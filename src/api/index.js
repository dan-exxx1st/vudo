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

  async createFolder(payload) {
    const response = await this.client.post('/folder', payload);

    return response.data.folder;
  }

  async updateFolderName(payload) {
    const response = await this.client.put('/folder', payload);

    return response.data.folder;
  }

  async deleteFolder(id) {
    const response = await this.client.delete('/folder', {
      data: {
        id
      }
    });

    return response.data.folder;
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

  async deleteTodo(todoId) {
    const response = await this.client.delete('/todo', {
      data: {
        todoId
      }
    });
    if (response.status === 200) {
      return response.data.todo;
    }
  }
}
