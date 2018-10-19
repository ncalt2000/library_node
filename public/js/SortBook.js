class SortBook {
  constructor() {
    this.libraryURL = '/library/';
    this.allBooks = [];
    this.bookId = null;
  }

  _init() {
    this._bindEvents();
  }

  _reload() {
    window.gDataTable._updateTable();
  }

  _bindEvents() {
    console.log("Bind events from SortBook!!!");
    $('#sort-title').on('click', this._sortBy.bind(this));
    $('#sort-author').on('click', this._sortBy.bind(this));
    $('#sort-genre').on('click', this._sortBy.bind(this));
    $('#sort-rating').on('click', this._sortBy.bind(this));
  }

  _sortBy(e) {
    const val = $(e.target).data('sort');
    // console.log(val, "VALUE");
    this.allBooks.sort((a, b) => {
      if (typeof a[val] === 'number') {
        return b[val] - a[val];
      }
      const itemA = a[val].toLowerCase();
      const itemB = b[val].toLowerCase();
      if (itemA < itemB) // sort string ascending
      { return -1; }
      if (itemA > itemB) return 1;
      return 0; // default return value (no sorting)
    });
    this._reload();
  }
}

$(() => {
  window.gSortBook = new SortBook();
  window.gSortBook._init();
});
