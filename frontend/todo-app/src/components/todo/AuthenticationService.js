class AuthenticationService {
  registerSuccessfulLogin(username, pasword) {
    sessionStorage.setItem('authenticatedUser', username);
    console.log('registerSuccessfulLogin() called');
  }

  logout() {
    sessionStorage.removeItem('authenticatedUser');
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticatedUser');
    if(user===null) return false;
    return true;
  }
}

export default new AuthenticationService();