const myPromise = function () {
  return new Promise(function (resolve, reject) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.github.com/users/Raymw1");
    xhr.send(null);

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText));
        } else {
          reject("Requisition error!")
        }
      }
    }
  })
}

myPromise()
  .then(response => console.log(response))
  .catch(error => console.error(error))