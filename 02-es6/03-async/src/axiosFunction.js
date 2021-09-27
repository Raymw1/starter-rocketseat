import axios from "axios";

export default class Api {
  static async getUserInfo(username) {
    try {
      const { data } = await axios.get(`https://api.github.com/users/${username}`);
      console.log(data);
    } catch (error) {
      console.warn("User not found!");
    }
  }
}