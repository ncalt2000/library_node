export default class Home {
  constructor() {
    this.libraryURL = '/user/';
    this.userName = '';
    this.isLoggedIn = false;
  }

  _bindEvents() {
    $('#logout').on('click', this._LogOut.bind(this));
  }

  _getToken() {
    return localStorage.getItem('jwt_token') || false;
  }

  _getUserFromStorage() {
    this.userName = localStorage.getItem('userName') || false;
  }

  _isLoggedIn() {
    this.isLoggedIn = this._getToken();
  }

  _switchLogInHeader() {
    if (this.isLoggedIn) {
      $('#userName').children('a').text(`Welcome, ${this.userName}!`);
      $('#navSignIn').children('a').text('Log Out').attr('id', 'logout');
      $('#navSignUp').remove();
      $('#guest-login').addClass('d-none');
    }
  }

  _LogOut(e) {
    e.preventDefault();
    this._dumpToken();
    $.ajax({
      url: `${this.libraryURL}logout`,
      type: 'GET',
      dataType: 'json',
      success: (() => {
        location.reload();
      }),
    });
  }

  _dumpToken() {
    localStorage.removeItem('jwt_token');
  }
}
