import api from "./api";

class App {
  constructor() {
    this.repositories = [];
    this.formElement = document.getElementById("repo-form");
    this.listElement = document.getElementById("repo-list");
    this.inputElement = document.querySelector("input[name=repository]");
    this.registerHandlers();
  }

  registerHandlers() {
    this.formElement.onsubmit = event => this.addRepository(event);
  }

  setLoading(loading = true) {
    if (loading === true) {
      const loadingElement = document.createElement("span");
      loadingElement.appendChild(document.createTextNode("Carregando..."));
      loadingElement.setAttribute("id", "loading");
      this.formElement.appendChild(loadingElement);
    } else {
      document.getElementById("loading").remove();
    }
  }

  async addRepository(event) {
    event.preventDefault();
    this.setLoading();
    const repoInput = this.inputElement.value;
    if (repoInput?.length === 0) return;
    try {
      const { data } = await api.get(`/repos/${repoInput}`);
      const { name, description, html_url, owner: { avatar_url } } = data;

      this.repositories.push({
        name,
        description,
        avatar_url,
        html_url
      });
      this.inputElement.value = "";
      this.renderRepositories();
    } catch (error) {
      alert("Repository not found!");
    }
    this.setLoading(false);
  }

  renderRepositories() {
    this.listElement.innerHTML = "";
    this.repositories.forEach(repo => {
      const imgElement = document.createElement("img");
      imgElement.setAttribute("src", repo.avatar_url);

      const titleElement = document.createElement("strong");
      titleElement.appendChild(document.createTextNode(repo.name));

      const descriptionElement = document.createElement("p");
      descriptionElement.appendChild(document.createTextNode(repo.description));

      const linkElement = document.createElement("a");
      linkElement.setAttribute("href", repo.html_url);
      linkElement.setAttribute("target", "_blank");
      linkElement.appendChild(document.createTextNode("Acessar"));

      const contentElement = document.createElement("div");
      contentElement.setAttribute("class", "content");
      contentElement.appendChild(titleElement);
      contentElement.appendChild(descriptionElement);
      contentElement.appendChild(linkElement);

      const listItemElement = document.createElement("li");
      listItemElement.appendChild(imgElement);
      listItemElement.appendChild(contentElement);

      this.listElement.appendChild(listItemElement);
    })
  }
}

new App();