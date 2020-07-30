import axios from 'axios';

class TodoDataService {
  retrieveAllTodos(name) {
    return axios.get(`http://localhost:8080/users/${name}/todos`);
    //console.log('executeHelloWorldService() called');
  }

  retrieveTodo(name, id) {
    return axios.get(`http://localhost:8080/users/${name}/todos/${id}`);
    //console.log('executeHelloWorldService() called');
  }

  deleteTodo(name, id) {
    return axios.delete(`http://localhost:8080/users/${name}/todos/${id}`);
    //console.log('executeHelloWorldService() called');
  }

  updateTodo(name, id, todo) {
    return axios.put(`http://localhost:8080/users/${name}/todos/${id}`, todo);
    //console.log('executeHelloWorldService() called');
  }

  createTodo(name, todo) {
    return axios.post(`http://localhost:8080/users/${name}/todos`, todo);
    //console.log('executeHelloWorldService() called');
  }

}

export default new TodoDataService();