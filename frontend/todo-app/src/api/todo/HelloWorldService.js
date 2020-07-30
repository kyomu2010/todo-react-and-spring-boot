import axios from 'axios';

class HelloWorldService {
  executeHelloWorldService() {
    return axios.get('http://localhost:8080/hello-world');
    //console.log('executeHelloWorldService() called');
  }

  executeHelloWorldBeanService() {
    return axios.get('http://localhost:8080/hello-world-bean');
    //console.log('executeHelloWorldBeanService() called');
  }

  executeHelloWorldPathVariableService(name) {
    // let username = 'user'
    // let password = 'password'

    // base64 encode username and password and assign to header
    //let basicAuthHeader = 'Basic ' + window.btoa(username + ':' + password)

    return axios.get(`http://localhost:8080/hello-world/path-variable/${name}`
    // ,
    //   {
    //     headers : {
    //       authorization: basicAuthHeader
    //     }
    //   }
      );
    //console.log('executeHelloWorldWorldPathVariable() called');
  }
}

export default new HelloWorldService();