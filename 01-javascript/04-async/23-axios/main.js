axios.get("https://api.github.com/users/Raymw1")
  .then(response => console.log(response.data))
  .catch(error => console.error(error))