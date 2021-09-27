import axios from "axios";

export default class Github {
  static async getRepositories(repo) {
    try {
      const { data } = await axios.get(`https://api.github.com/repos/${repo}`);
      console.log(data);
    } catch (error) {
      console.warn("Repository not found!")
    }
  }
}

