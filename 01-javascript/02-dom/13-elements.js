const linkElement = document.createElement("a");
linkElement.setAttribute("href", "https://rayanwilbert.herokuapp.com");
linkElement.setAttribute("target", "_blank");

const textElement = document.createTextNode("Acessar meu portifólio!")
linkElement.appendChild(textElement)

linkElement.style.color = "#555";
linkElement.style.textDecoration = "none"

container = document.querySelector("#app");
container.appendChild(linkElement);

container.removeChild(document.getElementById("toerase"));
