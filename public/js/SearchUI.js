class Search {
  _init() {
    this._bindEvents();
  }

  _bindEvents() {
    $('button#search-btn').on('click', this._getSearchResults.bind(this));
    $('button#clearSearchResults').on('click', this._clearSearchResults.bind(this));
  }

  _clearSearchResults() {
    $('#searchResults').empty();
  }

  _getSearchResults(e) {
    e.preventDefault();
    const allBooks = window.gDataTable._getGlobalBooks();

    const inputTerm = $('#search-input').val();

    const resultArr = allBooks.filter((book) => {
      const search = inputTerm.toLowerCase();
      return book.title.toLowerCase().indexOf(search) > -1 || book.author.toLowerCase().indexOf(search) > -1 || book.pubDate >= search;
    });

    const searchResult = $('<div>', { class: 'col-md-12 mt-5 h3 font-weight-bold text-center animated fadeIn' });
    searchResult.text(resultArr.length > 0 ? `Search result: ${resultArr.length}` : 'Nothing is found! Try Again...');
    $('#searchResults').empty();
    $('#searchResults').append(searchResult);

    if (resultArr.length > 0) {
      for (let i = 0; i < resultArr.length; i++) {
        const container = $('<div>', { class: 'custom-container' });
        const back = $('<div>', { class: 'back' });
        const columnDiv = $('<div>', { class: 'flipper' });
        const span = $('<span>', { class: 'front' });
        const card = $('<div>', { class: 'card card-inverse card-info animated zoomIn m-5' });
        const bookCover = $('<img>', { class: 'card-img-top book-card' }).text(resultArr[i].cover);
        bookCover.attr('src', `${resultArr[i].cover}`).attr('alt', `${resultArr[i].title} cover`);
        const cardBody = $('<div>', { class: 'card-body p-2' });
        const cardTitle = $('<h5>', { class: 'card-title ' }).text(resultArr[i].title);
        const cardAuthor = $('<h6>', { class: 'card-author ' }).text(resultArr[i].author);
        const synopsis = $('<p>', { class: 'card-text text-justify p-2' }).text(resultArr[i].synopsis);

        span.html(card);
        card.html(bookCover).append(cardBody);
        cardBody.html(cardTitle);
        cardBody.append(cardAuthor);
        resultArr[i].synopsis === '' ? back.html('No Synopsis Available!') : back.html(synopsis);
        columnDiv.append(back);
        columnDiv.append(span);
        container.append(columnDiv);

        $('#searchResults').append(container);
      }
      const bottomDiv = $('<div>', { class: 'col-md-12 d-flex justify-content-center' });
      const clearResultsBtn = $('<button>', { class: 'col-2 btn btn-secondary', text: 'Clear the Results', id: 'clearSearchResults' });
      bottomDiv.append(clearResultsBtn);
      $('#searchResults').append(bottomDiv);
    }

    window.location = '/#mainDivStart';
    $('#search-input').val('');
    this._bindEvents();
  }
}

$(() => {
  window.gSearch = new Search();
  window.gSearch._init();
});
