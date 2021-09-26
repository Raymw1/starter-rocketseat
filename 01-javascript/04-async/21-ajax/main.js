const xhr = new XMLHttpRequest();

xhr.open("GET", "https://api.github.com/users/Raymw1"); //REQUEST FROM API
xhr.send(null);

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) { // IF RESPONSE
    console.log(JSON.parse(xhr.responseText));
  }
}
