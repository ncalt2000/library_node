class RateBook {
  constructor() {
    this.libraryURL = '/library/';
    this.bookId = null;
    this._rateBook = (e) => {
      this.bookId = $(e.target).data('id');
      const onStar = parseInt($(e.target).data('value'), 10);

      $.ajax({
        url: `${this.libraryURL}${this.bookId}`,
        method: 'PUT',
        dataType: 'json',
        headers: { 'x-access-token': localStorage.getItem('jwt_token') },
        data: { rating: onStar },
        success: (data) => {
          if (data) {
            window.gDataTable._getAllBooks();
          } else {
            window.gDataTable.ifNotLoggedIn();
          }
        },
      });
    };
  }

}


$(() => {
  window.gRateBook = new RateBook();
});
