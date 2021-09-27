import axios from "axios";

export const buscaUsuario = async user => {
  try {
    const { data } = await axios.get(`https://api.github.com/users/${user}`);
    console.log(data);
  } catch (error) {
    console.warn("User not found!");
  }
}
