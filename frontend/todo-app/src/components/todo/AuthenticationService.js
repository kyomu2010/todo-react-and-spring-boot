import axios from 'axios';

class AuthenticationService {

  executeBasicAuthenticationService(username, password) {
    return axios.get('http://localhost:8080/basicauth', 
      {headers: {authorization: this.createBasicAuthToken(username, password)}})
  }

  createBasicAuthToken(username, password) {
    // base64 encode username and password and assign to header
    return 'Basic ' + window.btoa(username + ':' + password)
  }

  registerSuccessfulLogin(username, password) {
    // base64 encode username and password and assign to header
    //let basicAuthHeader = 'Basic ' + window.btoa(username + ':' + password)

    sessionStorage.setItem('authenticatedUser', username);
    //console.log('registerSuccessfulLogin() called');
    this.setupAxiosInterceptors(this.createBasicAuthToken(username, password))
  }

  logout() {
    sessionStorage.removeItem('authenticatedUser');
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticatedUser');
    if(user===null) return false;
    return true;
  }

  getLoggedInUserName() {
    let user = sessionStorage.getItem('authenticatedUser');
    if(user===null) return '';
    return user;
  }

  setupAxiosInterceptors(basicAuthHeader) {
    axios.interceptors.request.use(
      (config) => {
        if(this.isUserLoggedIn()) {
          config.headers.authorization = basicAuthHeader
        }
        return config
      } 
    )
  }
}

export default new AuthenticationService();