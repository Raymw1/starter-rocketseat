const inputElement = document.querySelector("#app input");
const buttonElement = document.querySelector("#app button");
const listElement = document.querySelector("#app ul");

function getRepos(username) {
  return axios.get(`https://api.github.com/users/${username}/repos`)
    .then(response => repos = response.data)
    .catch(error => console.error(error))

}

async function renderRepos() {
  listElement.innerHTML = ""
  const repos = await getRepos(inputElement.value);
  repos.forEach(repo => {
    const repoElement = document.createElement("li");
    const repoText = document.createTextNode(repo.name)
    repoElement.appendChild(repoText);
    listElement.appendChild(repoElement);
  });
  inputElement.value = "";
}

buttonElement.onclick = renderRepos;
