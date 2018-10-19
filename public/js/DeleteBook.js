class DeleteBook {
  constructor() {
    this.libraryURL = '/library/';
    this.bookId = null;
  }

  _init() {
    window.gDataTable._getAllBooks();
    this._bindEvents();
  }

  _bindEvents() {
    console.log('Bind Events from Delete!!!');
    $('.delete').on('click', this._openDeleteModal.bind(this));
  }

  _bindCustomListeners() {
    $('#confirm-cancel-btn').on('click', this._closeModalOnCancel.bind(this));
    $('#confirm-delete-btn').on('click', this._confirmDeleteBook.bind(this));
  }

  _closeModalOnCancel() {
    $('.confirm-delete-text').empty();
    $('#confirm-delete-modal').modal('hide');
  }

  _openDeleteModal(e) {
    console.log("Hello delete modal");
    const isLoggedIn = window.gHome.isLoggedIn;
    if (isLoggedIn) {
      this.bookId = $(e.target).data('id');
      const _titleToDelete = $(e.target).data('title');
      const deleteText = $('<p>', {id: 'delete-text'});
      deleteText.html(`Are you sure you want to delete ${_titleToDelete}?`);
      // eslint-disable-next-line no-unused-vars
      const confirmDeleteText = $('.confirm-delete-text').append(deleteText);
      $('#confirm-delete-modal').modal('show');
    } else {
      window.gDataTable.ifNotLoggedIn();
    }
  }

  _confirmDeleteBook() {
    this._handleDeleteBook(this.bookId);
  }

  _handleDeleteBook(id) {
    $.ajax({
      url: `${this.libraryURL}${id}`,
      method: 'DELETE',
      dataType: 'json',
      headers: {
        'x-access-token': localStorage.getItem('jwt_token')
      },
      data: id,
      success: (data) => {
        if (data) {
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
          $('.confirm-delete-text').empty();
        }
        window.gDataTable._getAllBooks();
      }
    });
  }

}

$(() => {
  window.gDeleteBook = new DeleteBook();
  window.gDeleteBook._init();
});
