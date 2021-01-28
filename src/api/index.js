import axios from 'axios';

export class Api {
  constructor() {
    this.client = axios.create({
      baseURL: 'http://localhost:8080/api'
    });
  }

  async getAllFolders() {
    const folders = await this.client.get('/folders');
    return folders;
  }
}
