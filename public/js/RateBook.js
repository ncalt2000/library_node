class RateBook {
  constructor() {
    this.libraryURL = '/library/';
    this.bookId = null;
  }

  _init() {
    window.gDataTable._getAllBooks();
  }

  _reload() {
    window.gDataTable._updateTable();
    this._bindEvents();
  }

  _bindEvents() {
    $('.star').on('click', this._rateBook.bind(this));
  }

  _rateBook(e) {
  // console.log(e, 'event');
    this.bookId = $(e.target).data('id');
    // console.log(this.bookId, 'Book ID');
    const onStar = parseInt($(e.target).data('value'), 10); // The star currently selected

    $.ajax({
      url: `${this.libraryURL}${this.bookId}`,
      method: 'PUT',
      dataType: 'json',
      headers: { 'x-access-token': localStorage.getItem('jwt_token') },
      data: { rating: onStar },
      success: (data) => {
        if (data) {
          this._getAllBooks();
        } else {
          this.ifNotLoggedIn();
        }
      },
    });
  }

}


$(() => {
  window.gRateBook = new RateBook();
  window.gRateBook._init();
});
