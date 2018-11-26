/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_js_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/js/util.js */ \"./src/js/util.js\");\n/* harmony import */ var _src_js_UpdateTable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/js/UpdateTable.js */ \"./src/js/UpdateTable.js\");\n/* harmony import */ var _src_js_AddBook_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/js/AddBook.js */ \"./src/js/AddBook.js\");\n/* harmony import */ var _src_js_DeleteBook_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/js/DeleteBook.js */ \"./src/js/DeleteBook.js\");\n/* harmony import */ var _src_js_EditBook_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/js/EditBook.js */ \"./src/js/EditBook.js\");\n/* harmony import */ var _src_js_RateBook_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/js/RateBook.js */ \"./src/js/RateBook.js\");\n/* harmony import */ var _src_js_SortBook_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/js/SortBook.js */ \"./src/js/SortBook.js\");\n/* harmony import */ var _src_js_RandomControl_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/js/RandomControl.js */ \"./src/js/RandomControl.js\");\n/* harmony import */ var _src_js_Search_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./src/js/Search.js */ \"./src/js/Search.js\");\n/* harmony import */ var _src_js_auth_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./src/js/auth.js */ \"./src/js/auth.js\");\n/* harmony import */ var _src_js_home_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./src/js/home.js */ \"./src/js/home.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n$(() => {\n  $('[data-toggle=\"tooltip\"]').tooltip();\n\n  window.gDataTable = new _src_js_UpdateTable_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n  window.gDataTable._init();\n\n  window.gAddBooksUI = new _src_js_AddBook_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n  window.gAddBooksUI._init();\n\n  window.gDeleteBook = new _src_js_DeleteBook_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\n\n  window.gEditBook = new _src_js_EditBook_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]();\n\n  window.gRateBook = new _src_js_RateBook_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"]();\n\n  window.gSortBook = new _src_js_SortBook_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"]();\n  window.gSortBook._init();\n\n  window.gRandomBook = new _src_js_RandomControl_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"]();\n  window.gRandomBook._init();\n\n  window.gSearch = new _src_js_Search_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"]();\n  window.gSearch._init();\n\n  window.gAuth = new _src_js_auth_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"]();\n  window.gAuth._bindEvents();\n\n  window.gHome = new _src_js_home_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"]();\n  window.gHome._isLoggedIn();\n  if (window.gHome.isLoggedIn) {\n    window.gHome._getUserFromStorage();\n    window.gHome._switchLogInHeader();\n    window.gHome._bindEvents();\n  }\n});\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./src/js/AddBook.js":
/*!***************************!*\
  !*** ./src/js/AddBook.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return AddBooksUI; });\n/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util.js */ \"./src/js/util.js\");\n\n\nclass AddBooksUI {\n  constructor() {\n    this._tempBookshelf = new Array();\n    this._encodedImg;\n    this.libraryURL = '/library/';\n  }\n\n  _init() {\n    this._bindEvents();\n  }\n\n  _bindEvents() {\n    $('button#add-book-btn').on('click', this._handleModalOpen.bind(this));\n    $('button#add-another-btn').on('click', this._bookInLine.bind(this));\n    $('button#save-book-btn').on('click', this._saveBook.bind(this));\n    $('button#cancelAdd').on('click', this._cancelAdd.bind(this));\n    $('button#cancel-adding').on('click', this._cancelAdd.bind(this));\n  }\n\n  _cancelAdd() {\n    $('#addBookModal').modal('hide');\n    $('#title-text').removeClass('required');\n    $('#author').removeClass('required');\n    $('.booksInLine').empty();\n    $('#add-book-form')[0].reset();\n  }\n\n  _handleModalOpen() {\n    const isLoggedIn = window.gHome.isLoggedIn;\n    if (isLoggedIn) {\n      $('#addBookModal').modal('show');\n    } else {\n      window.gDataTable.ifNotLoggedIn();\n    }\n  }\n\n  _getFieldsFromModal() {\n    const fieldsData = $('#add-book-form').serializeArray();\n    const oData = new Object();\n    fieldsData.map(item => {\n      oData[item.name] = item.value;\n    });\n    // console.log(oData, \"book data 1\");\n    return oData;\n  }\n\n  _bookInLine() {\n    // console.log('book in line');\n\n    const bookData = this._getFieldsFromModal();\n    // console.log(bookData, \"book Data 2\");\n    const noBookCover = '../assets/books/noCover.jpg';\n\n    if (bookData.title === '') {\n      $('#title-text').addClass('required');\n      const errorMessage = $('<p>', { class: 'text-danger' });\n      errorMessage.text('Please complete missing fields');\n      $('.booksInLine').html(errorMessage);\n      return;\n    }\n    if (bookData.author === '') {\n      $('#title-text').removeClass('required');\n      $('#author').addClass('required');\n      const errorMessage = $('<p>', { class: 'text-danger' });\n      errorMessage.text('Please complete missing fields');\n      $('.booksInLine').html(errorMessage);\n      return;\n    }\n\n    $('#title-text').removeClass('required');\n    $('#author').removeClass('required');\n\n    const file = document.querySelector('#file-upload').files[0];\n    const reader = new FileReader();\n    if (file) {\n      reader.readAsDataURL(file);\n      // console.log(reader, \"READER\");\n      reader.onload = function () {\n        // console.log(reader.result);\n        bookData.cover = reader.result;\n      };\n    } else {\n      bookData.cover = noBookCover;\n    }\n\n    let count = 0;\n    for (let i = 0; i < window.gDataTable.allBooks.length; i++) {\n      if (window.gDataTable.allBooks[i].title === bookData.title && window.gDataTable.allBooks[i].author === bookData.author) {\n        $('#failure-modal').modal('show');\n        $('#failure-modal').find('.modal-footer').html('This title and author already exist in the Library!');\n        return count++;\n      }\n    }\n    if (count === 0) {\n      this._tempBookshelf.push(bookData);\n    }\n    const booksToAdd = $('<p>', { class: 'booksToAdd text-success' });\n    booksToAdd.text(`Books to be added: ${this._tempBookshelf.length}`);\n    $('.booksInLine').html(booksToAdd);\n    $('#add-book-form')[0].reset();\n  }\n\n  _saveBook() {\n    // console.log('before await');\n    this._bookInLine();\n    // console.log('after await');\n    setTimeout(() => {\n      // console.log(this._tempBookshelf, 'Temp Bookshelf');\n      $.ajax({\n        url: this.libraryURL,\n        method: 'POST',\n        dataType: 'json',\n        headers: { 'x-access-token': localStorage.getItem('jwt_token') },\n        data: { bookshelf: this._tempBookshelf },\n        success: () => {\n          window.gDataTable._getAllBooks();\n          Object(_util_js__WEBPACK_IMPORTED_MODULE_0__[\"renderSuccessModal\"])();\n\n          this._tempBookshelf = new Array();\n          $('#add-book-form')[0].reset();\n          $('.booksInLine').empty();\n          $('#addBookModal').modal('hide');\n          // console.log(data, \"log 2: back from DB\");\n        },\n        error: () => {\n          $('#failure-modal').modal('show');\n          const errorMessage = $('<p>', { class: 'text-danger' });\n          errorMessage.text('Oops! Something went wrong! Please try again!');\n          $('#failure-modal').find('.modal-footer').html(errorMessage);\n          $('.booksInLine').empty();\n          this._tempBookshelf = new Array();\n        },\n      });\n    }, 100);\n  }\n\n}\n\n\n//# sourceURL=webpack:///./src/js/AddBook.js?");

/***/ }),

/***/ "./src/js/DeleteBook.js":
/*!******************************!*\
  !*** ./src/js/DeleteBook.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return DeleteBook; });\n/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util.js */ \"./src/js/util.js\");\n\n\nclass DeleteBook {\n  constructor() {\n    this.libraryURL = '/library/';\n    this.bookId = null;\n    this._openDeleteModal = (e) => {\n      const isLoggedIn = window.gHome.isLoggedIn;\n      if (isLoggedIn) {\n        this.bookId = $(e.target).data('id');\n        const _titleToDelete = $(e.target).data('title');\n        const deleteText = $('<p>', {id: 'delete-text'});\n        deleteText.html(`Are you sure you want to delete ${_titleToDelete}?`);\n        // eslint-disable-next-line no-unused-vars\n        const confirmDeleteText = $('.confirm-delete-text').append(deleteText);\n        $('#confirm-delete-modal').modal('show');\n        this._bindCustomListeners();\n      } else {\n        window.gDataTable.ifNotLoggedIn();\n      }\n    };\n  }\n\n  _bindCustomListeners() {\n    $('#confirm-cancel-btn').on('click', this._closeModalOnCancel.bind(this));\n    $('#confirm-delete-btn').on('click', this._confirmDeleteBook.bind(this));\n  }\n\n  _closeModalOnCancel() {\n    $('.confirm-delete-text').empty();\n    $('#confirm-delete-modal').modal('hide');\n  }\n\n  _confirmDeleteBook() {\n    this._handleDeleteBook(this.bookId);\n  }\n\n  _handleDeleteBook(id) {\n\n    $.ajax({\n      url: `${this.libraryURL}${id}`,\n      method: 'DELETE',\n      dataType: 'json',\n      headers: {\n        'x-access-token': localStorage.getItem('jwt_token')\n      },\n      data: id,\n      success: (data) => {\n        if (data) {\n          Object(_util_js__WEBPACK_IMPORTED_MODULE_0__[\"renderSuccessModal\"])();\n          $('.confirm-delete-text').empty();\n        }\n        window.gDataTable._getAllBooks();\n      }\n    });\n  }\n\n}\n\n\n//# sourceURL=webpack:///./src/js/DeleteBook.js?");

/***/ }),

/***/ "./src/js/EditBook.js":
/*!****************************!*\
  !*** ./src/js/EditBook.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return EditBook; });\n/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util.js */ \"./src/js/util.js\");\n\n\nclass EditBook {\n  constructor() {\n    this.libraryURL = '/library/';\n    // this.allBooks = [];\n    this.bookId = null;\n    this._openEditModal = e => {\n      // console.log(e.target, 'TARGET');\n      const isLoggedIn = window.gHome.isLoggedIn;\n      if (isLoggedIn) {\n        $('#edit-book-modal').modal('show');\n\n        this.bookId = $(e.target).data('id');\n        const bookToEdit = window.gDataTable.allBooks.filter(item => item._id === this.bookId);\n\n        const parsedDate = Object(_util_js__WEBPACK_IMPORTED_MODULE_0__[\"parseFormDate\"])(bookToEdit[0].pubDate);\n\n        $('#title-edit').val(bookToEdit[0].title);\n        $('#author-edit').val(bookToEdit[0].author);\n        $('#genre-edit').val(bookToEdit[0].genre);\n        $('#pages-edit').val(bookToEdit[0].pages);\n        $('#publicationDate-edit').val(parsedDate);\n        $('#synopsis-edit').val(bookToEdit[0].synopsis);\n        this._bindCustomListeners();\n      } else {\n        window.gDataTable.ifNotLoggedIn();\n      }\n    };\n  }\n\n  _bindCustomListeners() {\n    $('#save-edit-btn').on('click', this._editBook.bind(this));\n  }\n\n  _saveEditedBook(id) {\n    const newTitle = $('#title-edit').val();\n    const newAuthor = $('#author-edit').val();\n    const newGenre = $('#genre-edit').val();\n    const newPages = $('#pages-edit').val();\n    const newPubDate = $('#publicationDate-edit').val();\n    const newSynopsis = $('#synopsis-edit').val();\n    let newCover = '';\n\n    if($('#file-upload-edit').val()){\n      const file = document.querySelector('#file-upload-edit').files[0];\n      const reader = new FileReader();\n      reader.readAsDataURL(file);\n      reader.onload = function () {\n        newCover = reader.result;\n      };\n    }\n\n    setTimeout(() => {\n      let editedBook = {\n        title: newTitle,\n        author: newAuthor,\n        genre: newGenre,\n        pages: newPages,\n        pubDate: newPubDate,\n        synopsis: newSynopsis,\n      };\n      if(newCover){\n        editedBook['cover'] = newCover;\n      } else {\n        editedBook;\n      }\n\n      $.ajax({\n        url: `${this.libraryURL}${id}`,\n        method: 'PUT',\n        dataType: 'json',\n        headers: { 'x-access-token': localStorage.getItem('jwt_token') },\n        data: editedBook,\n        success: () => {\n          Object(_util_js__WEBPACK_IMPORTED_MODULE_0__[\"renderSuccessModal\"])();\n          window.gDataTable._getAllBooks();\n        },\n      });\n    }, 100);\n\n    $('#save-edit-btn').off();\n    $('#edit-book-modal').modal('hide');\n  }\n\n  _editBook() {\n    this._saveEditedBook(this.bookId);\n  }\n\n}\n\n\n//# sourceURL=webpack:///./src/js/EditBook.js?");

/***/ }),

/***/ "./src/js/RandomControl.js":
/*!*********************************!*\
  !*** ./src/js/RandomControl.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return RandomBookOrAuthor; });\nclass RandomBookOrAuthor {\n  _init() {\n    this._bindEvents();\n  }\n\n  _bindEvents() {\n    $('button#random-book-btn').on('click', this._showRandomBook.bind(this));\n    $('button#random-author-btn').on('click', this._showRandomAuthor.bind(this));\n    $('button#showAllAuthorsBtn').on('click', this._handleShowAuthors.bind(this));\n  }\n\n  _createRandomBook(book) {\n    const form = $('<form>', { class: 'form-inline' });\n    const image = $('<img>', {\n      class: 'img-thumbnail col-md-4',\n      src: `${book.cover}`,\n      alt: `${book.title} cover`,\n      style: 'width: 50px'\n    });\n    const div = $('<div>', { class: 'col-md-8' });\n\n    image.text(book.cover);\n    const title = $('<h5>', {class: 'my-1 font-weight-bold'}).text(book.title);\n    const author = $('<h6>').text(book.author);\n    const synopsis = $('<h6>').text(book.synopsis);\n    div.append(title).append(author).append(synopsis);\n    form.append(image).append(div);\n    form.append(div);\n    return form;\n  }\n\n  _showRandomBook() {\n    const allBooks = window.gDataTable.allBooks;\n    const randomBook = allBooks[Math.floor(Math.random() * allBooks.length)];\n\n    if (randomBook) {\n      $('#randomBookModal').modal('show');\n      $('#randomBookModal').find('.modal-body').html(this._createRandomBook(randomBook));\n      $('#randomBookModal').find('.modal-title').html('Universe Suggests you to read...');\n    } else {\n      $('#book-table').empty();\n      const message = $('<h1>', { class: 'text-danger text-center' }).html('Your Library is Empty!  🙁');\n      $('#book-table').append(message);\n    }\n  }\n\n  _showRandomAuthor() {\n    const allBooks = window.gDataTable.allBooks;\n    const randomBook = allBooks[Math.floor(Math.random() * allBooks.length)];\n    if (randomBook) {\n      const body = $('<div>');\n      const author = $('<h4>', { class: 'text-center' }).text(randomBook.author);\n      const list = $('<ol>');\n      allBooks.filter(book => book.author === randomBook.author)\n        .forEach(bookByAuthor => {\n          const listItem = $('<li>');\n          listItem.text(bookByAuthor.title);\n          list.append(listItem);\n        });\n      const text = $('<p>').text('And this author\\'s books:');\n      body.append(author).append(text).append(list);\n      $('#randomBookModal').modal('show');\n      $('#randomBookModal').find('.modal-body').html(body);\n      $('#randomBookModal').find('.modal-title').html('Universe sends you ...');\n    } else {\n      $('#book-table').empty();\n      const message = $('<h1>', { class: 'text-danger text-center' }).html('Your Library is Empty!  🙁');\n      $('#book-table').append(message);\n    }\n  }\n\n  _handleShowAuthors() {\n    const allBooks = window.gDataTable.allBooks;\n    const resultArr = [];\n    for (var i = 0; i < allBooks.length; i++) {\n      resultArr.push(allBooks[i].author);\n    }\n\n    const finalArr = resultArr.reduce((a, b) => {\n      if (a.indexOf(b) < 0) {\n        a.push(b);\n      }\n      return a;\n    }, []);\n\n    if (finalArr.length) {\n      const ol = $('<ol>');\n      for (var y = 0; y < finalArr.length; y++) {\n        const li = $('<li>');\n        $(li).text(finalArr[y]);\n        ol.append(li);\n      }\n      $('#randomBookModal').modal('show');\n      $('#randomBookModal').find('.modal-body').html(ol);\n      $('#randomBookModal').find('.modal-title').html('Authors in your Universe: ');\n    } else {\n      $('#book-table').empty();\n      const message = $('<h1>', { class: 'text-danger text-center' }).html('Your Library is Empty!  🙁');\n      $('#book-table').append(message);\n    }\n  }\n}\n\n\n//# sourceURL=webpack:///./src/js/RandomControl.js?");

/***/ }),

/***/ "./src/js/RateBook.js":
/*!****************************!*\
  !*** ./src/js/RateBook.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return RateBook; });\nclass RateBook {\n  constructor() {\n    this.libraryURL = '/library/';\n    this.bookId = null;\n    this._rateBook = (e) => {\n      this.bookId = $(e.target).data('id');\n      const onStar = parseInt($(e.target).data('value'), 10);\n\n      $.ajax({\n        url: `${this.libraryURL}${this.bookId}`,\n        method: 'PUT',\n        dataType: 'json',\n        headers: { 'x-access-token': localStorage.getItem('jwt_token') },\n        data: { rating: onStar },\n        success: (data) => {\n          if (data) {\n            window.gDataTable._getAllBooks();\n          } else {\n            window.gDataTable.ifNotLoggedIn();\n          }\n        },\n      });\n    };\n  }\n\n}\n\n\n//# sourceURL=webpack:///./src/js/RateBook.js?");

/***/ }),

/***/ "./src/js/Search.js":
/*!**************************!*\
  !*** ./src/js/Search.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Search; });\nclass Search {\n\n  _init() {\n    this._bindEvents();\n  }\n\n  _bindEvents() {\n    $('button#search-btn').on('click', this._getSearchResults.bind(this));\n  }\n\n  _bindCustomEvents() {\n    $('button#clearSearchResults').on('click', this._clearSearchResults.bind(this));\n  }\n\n  _clearSearchResults() {\n    $('#searchResults').empty();\n    window.location='/#body';\n  }\n\n  _getSearchResults(e) {\n    e.preventDefault();\n    const allBooks = window.gDataTable.allBooks;\n\n    const inputTerm = $('#search-input').val();\n\n    const resultArr = allBooks.filter((book) => {\n      const search = inputTerm.toLowerCase();\n      return book.title.toLowerCase().indexOf(search) > -1 || book.author.toLowerCase().indexOf(search) > -1 || book.pubDate >= search;\n    });\n\n    const searchResult = $('<div>', { class: 'col-md-12 mt-5 h3 font-weight-bold text-center animated fadeIn' });\n    searchResult.text(resultArr.length > 0 ? `Search result: ${resultArr.length}` : 'Nothing is found! Try Again...');\n    $('#searchResults').empty();\n    $('#searchResults').append(searchResult);\n\n    if (resultArr.length > 0) {\n      for (let i = 0; i < resultArr.length; i++) {\n        const media = $('<div>', {class: 'media w-100 shadow p-3 m-2 bg-beige rounded animated zoomIn'});\n        const bookCover = $('<img>', { class: 'align-self-center mr-3', src: `${resultArr[i].cover}`, style: 'width: 80px' });\n        const mediaBody = $('<div>', {class: 'media-body'});\n        const cardTitle = $('<h5>', { class: 'my-1 font-weight-bold' }).text(resultArr[i].title);\n        const cardAuthor = $('<h6>', { class: 'mt-0 font-italic' }).text(`by ${resultArr[i].author}`);\n        const synopsis = $('<p>').text(resultArr[i].synopsis);\n\n        resultArr[i].synopsis === '' ? synopsis.html('No Synopsis Available!') : synopsis.html(resultArr[i].synopsis);\n\n        media.append(bookCover).append(mediaBody);\n        mediaBody.append(cardTitle).append(cardAuthor).append(synopsis);\n\n        $('#searchResults').append(media);\n      }\n      const bottomDiv = $('<div>', { class: 'col-md-12 mt-3 d-flex justify-content-end' });\n      const clearResultsBtn = $('<button>', { class: 'col-2 btn btn-warning font-weight-bold shadow', text: 'Clear the Results', id: 'clearSearchResults' });\n      bottomDiv.append(clearResultsBtn);\n      $('#searchResults').append(bottomDiv);\n    }\n\n    window.location = '/#mainDivStart';\n    $('#search-input').val('');\n    this._bindCustomEvents();\n  }\n}\n\n\n//# sourceURL=webpack:///./src/js/Search.js?");

/***/ }),

/***/ "./src/js/SortBook.js":
/*!****************************!*\
  !*** ./src/js/SortBook.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SortBook; });\nclass SortBook {\n  constructor() {\n    this.libraryURL = '/library/';\n    this.bookId = null;\n    this._sortBy = e => {\n      const val = $(e.target).data('sort');\n      // console.log(val, \"VALUE\");\n      window.gDataTable.allBooks.sort((a, b) => {\n        if (typeof a[val] === 'number') {\n          return b[val] - a[val];\n        }\n        const itemA = a[val].toLowerCase();\n        const itemB = b[val].toLowerCase();\n        if (itemA < itemB) // sort string ascending\n        { return -1; }\n        if (itemA > itemB) return 1;\n        return 0; // default return value (no sorting)\n      });\n      window.gDataTable._updateTable();\n    };\n  }\n\n  _init() {\n    window.gDataTable._bindEvents();\n  }\n}\n\n\n//# sourceURL=webpack:///./src/js/SortBook.js?");

/***/ }),

/***/ "./src/js/UpdateTable.js":
/*!*******************************!*\
  !*** ./src/js/UpdateTable.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return DataTable; });\n/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util.js */ \"./src/js/util.js\");\n\n\nclass DataTable {\n  constructor() {\n    this.libraryURL = '/library/';\n    this.allBooks = [];\n  }\n\n  _init() {\n    this._getAllBooks();\n  }\n\n  _bindEvents() {\n\n    $('.star').on('click', window.gRateBook._rateBook);\n\n    $('.delete').on('click', window.gDeleteBook._openDeleteModal);\n\n    $('.edit').on('click', window.gEditBook._openEditModal);\n\n    $('#sort-title').on('click', window.gSortBook._sortBy);\n    $('#sort-author').on('click', window.gSortBook._sortBy);\n    $('#sort-genre').on('click', window.gSortBook._sortBy);\n    $('#sort-rating').on('click', window.gSortBook._sortBy);\n  }\n\n  _reload() {\n    this._updateTable();\n  }\n\n  _getAllBooks() {\n  // console.log(\"get all books\");\n    this._activateLoader();\n    $.ajax({\n      url: this.libraryURL,\n      method: 'GET',\n      dataType: 'json',\n      success: (data) => {\n        if (data.length) {\n          $('#display-data').empty();\n          this.allBooks = data;\n          // console.log('get all books success');\n          // console.log(this.allBooks, 'All Books from DB');\n          this._reload();\n        } else {\n          $('#book-table').empty();\n          const message = $('<h1>', { class: 'text-danger text-center' }).html('Your Library is Empty!  🙁');\n          $('#book-table').append(message);\n        }\n      },\n    });\n  }\n\n  _activateLoader() {\n    const $thead = $('thead');\n    $thead.empty();\n    const $tbody = $('#table-body');\n    $tbody.empty();\n    const loader = $('<div>', { class: 'loader text-center' });\n    $('#table-body').append(loader);\n  }\n\n  _updateTable() {\n    const $tbody = $('#table-body');\n    $tbody.empty();\n\n    const $thead = $('thead');\n    $thead.empty();\n\n    const message = $('<h1>', { class: 'text-danger text-center' }).html('Your Library is Empty!  🙁');\n\n    this.allBooks.length\n      ? (\n        $thead.append(this._createHeader())\n        && $.each(this.allBooks, (index, book) => { $tbody.append(this._createRow(index, book));})\n      )\n      : $tbody.html(message);\n\n    this._bindEvents();\n  }\n\n  ifNotLoggedIn() {\n    const body = $('<div>', { class: 'h4 text-center' });\n    const link = $('<a>', { href: '../login.html', class: 'u-link btn btn-outline-primary' }).text('Sign In');\n    body.append(link);\n    $('#randomBookModal').modal('show');\n    $('#randomBookModal').find('.modal-body').html(body);\n    $('#randomBookModal').find('.modal-title').html('Please sign-in to update your Library!');\n  }\n\n  _createHeader() {\n    // eslint-disable-next-line\n    const book = new _util_js__WEBPACK_IMPORTED_MODULE_0__[\"Book\"]();\n    const tr = document.createElement('tr');\n\n    // ************Number the rows*********\n    const rowNumber = document.createElement('th');\n    $(rowNumber).text('');\n    $(tr).append(rowNumber);\n    // ************************\n\n    for (const key in book) {\n      const th = document.createElement('th');\n      const thAttr = document.createAttribute('scope');\n      thAttr.value = 'col';\n      th.setAttributeNode(thAttr);\n      // ********Capitalize Columns names**********\n      const keyName = key.split(/(?=[A-Z])/).join(' ');\n      const headerName = keyName.charAt(0).toUpperCase() + keyName.substr(1);\n      // ********************\n\n      $(th).text(headerName);\n      tr.append(th);\n\n      if (key === 'synopsis') {\n        $(th).hide();\n      }\n      if (key === 'deleteCol') {\n        $(th).text('Delete');\n      }\n    }\n    return tr;\n  }\n\n  _createRow(index, book) {\n  // console.log(\"row created!\");\n    const tr = $('<tr>', { id: 'row', class: 'animated fadeIn' });\n    const deleteIcon = $('<i>', {\n      class: 'far fa-times-circle fa-lg delete',\n      'data-title': book.title,\n      'data-id': book._id,\n    });\n    const editIcon = $('<i>', {\n      class: 'far fa-edit fa-lg edit',\n      'data-title': book.title,\n      'data-id': book._id,\n    });\n    const ratingList = $('<ul>', {\n      class: 'stars w-100 d-flex flex-nowrap',\n      id: 'ratingStar',\n    });\n\n    const rowNumber = $('<td>');\n    $(rowNumber).text(index + 1);\n    $(tr).append(rowNumber);\n\n    // *** book cover cell\n    // console.log(book, 'book');\n    const bookImg = $('<img>', {\n      class: 'coverToEdit',\n      src: `${book.cover}`,\n      alt: 'book cover',\n    });\n    // end book cover cell ***\n\n    for (let i = 0; i < 5; i++) {\n      const ratingItem = $('<li>', {\n        class: 'star',\n      });\n      if (book.rating && book.rating > i) {\n        $(ratingItem).addClass('selected');\n      }\n      const star = $('<i>', {\n        class: 'fa fa-star',\n        'data-id': book._id,\n        'data-value': i + 1,\n        'data-title': book.title,\n      });\n      const rating = $(ratingItem).append(star);\n      $(ratingList).append(rating);\n    }\n\n    $(tr).append($('<td>').append(bookImg));\n    $(tr).append($('<td>', { class: 'h5' }).append(book.title));\n    $(tr).append($('<td>').append(book.author));\n    $(tr).append($('<td>').append(book.genre));\n    $(tr).append($('<td>').append(book.pages));\n    $(tr).append($('<td>').append(Object(_util_js__WEBPACK_IMPORTED_MODULE_0__[\"parseDate\"])(book.publishDate)));\n    $(tr).append($('<td>').append(ratingList).addClass('rating-stars'));\n    $(tr).append($('<td>', { class: 'text-center' }).append(deleteIcon));\n    $(tr).append($('<td>', { class: 'text-center' }).append(editIcon));\n\n    return tr;\n  }\n\n}\n\n\n//# sourceURL=webpack:///./src/js/UpdateTable.js?");

/***/ }),

/***/ "./src/js/auth.js":
/*!************************!*\
  !*** ./src/js/auth.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Auth; });\nclass Auth {\n  constructor() {\n    this.libraryURL = '/user/';\n    this.newUserData;\n  }\n\n  _init() {\n    this._bindEvents();\n  }\n\n  _bindEvents() {\n    $('#loginBtn').on('click', this._userLogin.bind(this));\n    $('#createAccountBtn').on('click', this._registerUser.bind(this));\n  }\n\n  _getUserInfo() {\n    const userInfo = $('#signUpForm').serializeArray();\n    // console.log(userInfo);\n    const newData = new Object();\n    userInfo.map(item => {\n      newData[item.name] = item.value;\n    });\n\n    // VALIDATION:\n    const values = Object.values(newData);\n\n    for (let i = 0; i < values.length; i++) {\n      if (values[i] === '') {\n        throw new Error('Please fill out all fields');\n      }\n      if (values[values.length - 2] !== values[values.length - 1]) {\n        throw new Error('Passwords don\\'t match!');\n      }\n    }\n    return this.newUserData = newData;\n  }\n\n  _registerUser(e) {\n    e.preventDefault();\n    try {\n      this._getUserInfo();\n      $.ajax({\n        url: `${this.libraryURL}${'register'}`,\n        method: 'POST',\n        dataType: 'json',\n        data: this.newUserData,\n        success: (data) => {\n          if (data.auth) {\n            this._modalToShow();\n            this._setToken(data);\n            $('#signUpForm')[0].reset();\n            setTimeout(() => {\n              window.location = '/';\n            }, 900);\n          } else {\n            setTimeout(() => {\n              this._modalToShow(data.msg);\n            }, 100);\n            setTimeout(() => {\n              $('#signUpModal').modal('hide');\n            }, 1800);\n          }\n        },\n      });\n    } catch (err) {\n      setTimeout(() => {\n        this._modalToShow(err);\n      }, 100);\n      setTimeout(() => {\n        $('#signUpModal').modal('hide');\n      }, 2000);\n    }\n  }\n\n  _modalToShow(err) {\n    if (err) {\n      $('#signUpModal').find('.modal-body').empty();\n      $('#signUpModal').modal('show');\n      const message = $('<h4>', { class: 'text-danger text-center' });\n      const checkmark = $('<figure><svg stroke=\"#e55454\" xmlns=\"http://www.w3.org/2000/svg\" width=\"40px\" height=\"40px\" viewBox=\"0 0 60 60\"><circle class=\"cross__circle\" stroke=\"#e55454\" cx=\"26\" cy=\"26\" r=\"20\" fill=\"none\"/><path class=\"cross__path cross__path--right\" stroke=\"#e55454\" stroke-width=\"6\" stroke-linecap=\"round\" fill=\"none\" d=\"M16,16 l20,20\" /><path class=\"cross__path cross__path--left\" stroke=\"#e55454\" stroke-width=\"6\" stroke-linecap=\"round\" fill=\"none\" d=\"M16,36 l20,-20\" /></svg></figure>');\n      message.text(err);\n      checkmark.append(message);\n      $('#signUpModal').find('.modal-body').append(checkmark);\n    } else {\n      $('#signUpModal').find('.modal-body').empty();\n      $('#signUpModal').modal('show');\n      const message = $('<h4>', { class: 'text-success text-center' });\n      const checkmark = $('<figure class=\"w-40\"><svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 130.2 130.2\" xml:space=\"preserve\" width=\"40px\" height=\"40px\"><circle class=\"path circle\" fill=\"none\" stroke=\"#73AF55\" stroke-width=\"6\" stroke-miterlimit=\"10\" cx=\"65.1\" cy=\"65.1\" r=\"62.1\"/><polyline class=\"path check\" fill=\"none\" stroke=\"#73AF55\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-miterlimit=\"10\" points=\"100.2,40.2 51.5,88.8 29.8,67.5 \"/></svg></figure>');\n      message.text('Success!');\n      checkmark.append(message);\n      $('#signUpModal').find('.modal-body').append(checkmark);\n    }\n  }\n\n  _getUserInfoLogin() {\n    const userInfo = $('#loginForm').serializeArray();\n    const newData = new Object();\n    userInfo.map(item => {\n      newData[item.name] = item.value;\n    });\n    const values = Object.values(newData);\n\n    for (let i = 0; i < values.length; i++) {\n      if (values[i] === '') {\n        throw new Error('Please fill out all fields');\n      }\n    }\n    return this.newUserData = newData;\n  }\n\n  _userLogin(e) {\n    e.preventDefault();\n\n    try {\n      this._getUserInfoLogin();\n      $.ajax({\n        url: `${this.libraryURL}${'login'}`,\n        method: 'POST',\n        dataType: 'json',\n        data: this.newUserData,\n        success: (data) => {\n          if (data.auth) {\n            this._modalToShow();\n            this._setToken(data);\n            setTimeout(() => {\n              window.location = '/';\n            }, 900);\n          } else {\n            setTimeout(() => {\n              this._modalToShow(data.msg);\n            }, 100);\n            setTimeout(() => {\n              $('#signUpModal').modal('hide');\n            }, 1800);\n          }\n        },\n      });\n    } catch (err) {\n      this._modalToShow(err);\n    }\n  }\n\n  _setToken(jwt) {\n    if (jwt.auth) {\n      localStorage.setItem('jwt_token', jwt.token);\n      localStorage.setItem('userName', jwt.user);\n    }\n  }\n}\n\n\n//# sourceURL=webpack:///./src/js/auth.js?");

/***/ }),

/***/ "./src/js/home.js":
/*!************************!*\
  !*** ./src/js/home.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\nclass Home {\n  constructor() {\n    this.libraryURL = '/user/';\n    this.userName = '';\n    this.isLoggedIn = false;\n  }\n\n  _bindEvents() {\n    $('#logout').on('click', this._LogOut.bind(this));\n  }\n\n  _getToken() {\n    return localStorage.getItem('jwt_token') || false;\n  }\n\n  _getUserFromStorage() {\n    this.userName = localStorage.getItem('userName') || false;\n  }\n\n  _isLoggedIn() {\n    this.isLoggedIn = this._getToken();\n  }\n\n  _switchLogInHeader() {\n    if (this.isLoggedIn) {\n      $('#userName').children('a').text(`Welcome, ${this.userName}!`);\n      $('#navSignIn').children('a').text('Log Out').attr('id', 'logout');\n      $('#navSignUp').remove();\n      $('#guest-login').addClass('d-none');\n    }\n  }\n\n  _LogOut(e) {\n    e.preventDefault();\n    this._dumpToken();\n    $.ajax({\n      url: `${this.libraryURL}logout`,\n      type: 'GET',\n      dataType: 'json',\n      success: (() => {\n        location.reload();\n      }),\n    });\n  }\n\n  _dumpToken() {\n    localStorage.removeItem('jwt_token');\n  }\n}\n\n\n//# sourceURL=webpack:///./src/js/home.js?");

/***/ }),

/***/ "./src/js/util.js":
/*!************************!*\
  !*** ./src/js/util.js ***!
  \************************/
/*! exports provided: parseDate, parseFormDate, Book, renderSuccessModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parseDate\", function() { return parseDate; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parseFormDate\", function() { return parseFormDate; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Book\", function() { return Book; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderSuccessModal\", function() { return renderSuccessModal; });\n\n// from 02/01/2000 into \"February 2000\":\nfunction parseDate(pubDate) {\n  // console.log(\"parseDate function\");\n  const date = new Date(pubDate);\n  let month = date.getMonth();\n  const arr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'Sepember', 'October', 'November', 'December'];\n  month = arr[month];\n  const year = date.getFullYear();\n  return `${month} ${year}`;\n}\n\n// from \"February 2000\" into 02/01/2000:\nfunction parseFormDate(pubDate) {\n  // console.log(\"it's working\");\n  const date = new Date(pubDate);\n  const month = (date.getMonth() + 1).toString().padStart(2, '0');\n  const day = date.getDay().toString().padStart(2, '0');\n  const year = date.getFullYear();\n  return `${year}-${month}-${day}`;\n}\n\nfunction Book(cover, title, author, genre, pages, publishDate, rating, deleteCol, synopsis, edit) {\n  this.cover = cover;\n  this.title = title;\n  this.author = author;\n  this.genre = genre;\n  this.pages = pages;\n  this.publishDate = new Date(String(publishDate));\n  this.rating = rating;\n  this.deleteCol = deleteCol;\n  this.synopsis = synopsis;\n  this.edit = edit;\n};\n\nfunction renderSuccessModal(){\n  $('#success-modal').modal('show');\n  setTimeout(() => {\n    $('#success-modal').removeClass('zoomIn');\n    $('#success-modal').addClass('zoomOut');\n  }, 1000);\n  setTimeout(() => {\n    $('#success-modal').modal('hide');\n    $('#success-modal').removeClass('zoomOut');\n    $('#success-modal').addClass('zoomIn');\n  }, 1500);\n}\n\n\n//# sourceURL=webpack:///./src/js/util.js?");

/***/ })

/******/ });