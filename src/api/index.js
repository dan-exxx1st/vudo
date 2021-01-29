import axios from 'axios';

export class Api {
  constructor() {
    this.client = axios.create({
      baseURL: 'http://localhost:8080/api'
    });
  }

  async getAllFolders() {
    const response = await this.client.get('/folders');
    return response.data;
  }

  async getTodosByFolderId(folderId) {
    const response = await this.client.get(`/todos?folderId=${folderId}`);

    return response.data.todos;
  }

  async createTodo(payload) {
    const response = await this.client.post('/todo', payload);
    const newTodo = response.data.todo;
    return newTodo;
  }

  async updateTodoDone(payload) {
    const response = await this.client.put('/todo', payload);
    const updatedTodo = response.data.todo;
    return updatedTodo;
  }
}
