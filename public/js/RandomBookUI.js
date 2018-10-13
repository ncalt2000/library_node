class RandomBookOrAuthor {
  _init() {
    this._bindEvents();
  }

  _bindEvents() {
    $('button#random-book-btn').on('click', this._showRandomBook.bind(this));
    $('button#random-author-btn').on('click', this._showRandomAuthor.bind(this));
    $('button#showAllAuthorsBtn').on('click', this._handleShowAuthors.bind(this));
  }

  _createRandomBook(book) {
    const form = $('<form>', { class: 'form-inline' });
    const image = $('<img>', {
      class: 'img-thumbnail col-md-4',
      src: `${book.cover}`,
      alt: 'random book cover',
    });
    const div = $('<div>', { class: 'col-md-6' });

    image.text(book.cover);
    const title = $('<h5>').text(book.title);
    const author = $('<h6>').text(book.author);
    const genre = $('<h6>').text(book.genre);
    const pages = $('<h6>').text(book.pages);
    const synopsis = $('<h6>').text(book.synopsis);
    div.append(title).append(author).append(genre).append(pages)
      .append(synopsis);
    form.append(image).append(div);
    form.append(div);
    return form;
  }

  _showRandomBook() {
    const allBooks = window.gDataTable._getGlobalBooks();
    const randomBook = allBooks[Math.floor(Math.random() * allBooks.length)];

    if (randomBook) {
      $('#randomBookModal').modal('show');
      $('#randomBookModal').find('.modal-body').html(this._createRandomBook(randomBook));
      $('#randomBookModal').find('.modal-title').html('Universe Suggests ...');
    } else {
      $('#book-table').empty();
      const message = $('<h1>', { class: 'text-danger text-center' }).html('Your Library is Empty!  🙁');
      $('#book-table').append(message);
    }
  }

  _showRandomAuthor() {
    const allBooks = window.gDataTable._getGlobalBooks();
    const randomBook = allBooks[Math.floor(Math.random() * allBooks.length)];
    if (randomBook) {
      const body = $('<div>', { class: 'text-center' });
      const author = $('<h4>').text(randomBook.author);
      body.append(author);
      $('#randomBookModal').modal('show');
      $('#randomBookModal').find('.modal-body').html(body);
      $('#randomBookModal').find('.modal-title').html('Universe sends you ...');
    }
  }

  _handleShowAuthors() {
    const allBooks = window.gDataTable._getGlobalBooks();
    const resultArr = [];
    for (var i = 0; i < allBooks.length; i++) {
      resultArr.push(allBooks[i].author);
    }

    const finalArr = resultArr.reduce((a, b) => {
      if (a.indexOf(b) < 0) {
        a.push(b);
      }
      return a;
    }, []);

    if (finalArr.length) {
      const ol = $('<ol>');
      for (var y = 0; y < finalArr.length; y++) {
        const li = $('<li>');
        $(li).text(finalArr[y]);
        ol.append(li);
      }
      $('#randomBookModal').modal('show');
      $('#randomBookModal').find('.modal-body').html(ol);
      $('#randomBookModal').find('.modal-title').html('Authors in your Universe: ');
    } else {
      $('#book-table').empty();
      const message = $('<h1>', { class: 'text-danger text-center' }).html('Your Library is Empty!  🙁');
      $('#book-table').append(message);
    }
  }
}

$(() => {
  window.gRandomBook = new RandomBookOrAuthor();
  window.gRandomBook._init();
});
