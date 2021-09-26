function checkAge(age) {
  return new Promise((resolve, reject) => {
     age >= 18 ? resolve() : reject()
  })
}

const age = 18;
checkAge(age)
  .then(() => console.log("Maior que 18!"))
  .catch(() => console.warn("Menor que 18!"))