const inputElement = document.querySelector("#app input");
const buttonElement = document.querySelector("#app button");
const listElement = document.querySelector("#app ul");

function getRepos() {
  listElement.innerHTML = "Carregando..."
  return axios.get(`https://api.github.com/users/${inputElement.value}/repos`)
    .then(response => renderRepos(response.data))
    .catch(error => {
      console.error(error);
      listElement.innerHTML = "Usuário não encontrado, tente novamente!"
    })

}

function renderRepos(repos) {
  listElement.innerHTML = ""
  repos.forEach(repo => {
    const repoElement = document.createElement("li");
    const repoText = document.createTextNode(repo.name)
    repoElement.appendChild(repoText);
    listElement.appendChild(repoElement);
  });
  inputElement.value = "";
}

buttonElement.onclick = getRepos;
