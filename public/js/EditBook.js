class EditBook {
  constructor() {
    this.libraryURL = '/library/';
    // this.allBooks = [];
    this.bookId = null;
    this._openEditModal = e => {
      // console.log(e.target, 'TARGET');
      const isLoggedIn = window.gHome.isLoggedIn;
      if (isLoggedIn) {
        $('#edit-book-modal').modal('show');

        this.bookId = $(e.target).data('id');
        const bookToEdit = window.gDataTable.allBooks.filter(item => item._id === this.bookId);

        const parsedDate = window.parseFormDate(bookToEdit[0].pubDate);

        $('#title-edit').val(bookToEdit[0].title);
        $('#author-edit').val(bookToEdit[0].author);
        $('#genre-edit').val(bookToEdit[0].genre);
        $('#pages-edit').val(bookToEdit[0].pages);
        $('#publicationDate-edit').val(parsedDate);
        $('#synopsis-edit').val(bookToEdit[0].synopsis);
        this._bindCustomListeners();
      } else {
        window.gDataTable.ifNotLoggedIn();
      }
    };
  }

  _bindCustomListeners() {
    $('#save-edit-btn').on('click', this._editBook.bind(this));
  }

  _saveEditedBook(id) {
    const newTitle = $('#title-edit').val();
    const newAuthor = $('#author-edit').val();
    const newGenre = $('#genre-edit').val();
    const newPages = $('#pages-edit').val();
    const newPubDate = $('#publicationDate-edit').val();
    const newSynopsis = $('#synopsis-edit').val();
    let newCover = '';

    if($('#file-upload-edit').val()){
      const file = document.querySelector('#file-upload-edit').files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function () {
        newCover = reader.result;
      };
    }

    setTimeout(() => {
      let editedBook = {
        title: newTitle,
        author: newAuthor,
        genre: newGenre,
        pages: newPages,
        pubDate: newPubDate,
        synopsis: newSynopsis,
      };
      if(newCover){
        editedBook['cover'] = newCover;
      } else {
        editedBook;
      }

      $.ajax({
        url: `${this.libraryURL}${id}`,
        method: 'PUT',
        dataType: 'json',
        headers: { 'x-access-token': localStorage.getItem('jwt_token') },
        data: editedBook,
        success: () => {
        // console.log(data, 'Edited Book from DB');
          $('#success-modal').modal('show');
          setTimeout(() => {
            $('#success-modal').removeClass('zoomIn');
            $('#success-modal').addClass('zoomOut');
          }, 1000);
          setTimeout(() => {
            $('#success-modal').modal('hide');
            $('#success-modal').removeClass('zoomOut');
            $('#success-modal').addClass('zoomIn');
          }, 1500);
          window.gDataTable._getAllBooks();
        },
      });
    }, 100);

    $('#save-edit-btn').off();
    $('#edit-book-modal').modal('hide');
  }

  _editBook() {
    this._saveEditedBook(this.bookId);
  }

}

$(() => {
  window.gEditBook = new EditBook();
});
