const myPromise = () => new Promise((resolve, reject) => {
  setTimeout(() => resolve("Ok"), 2000);
})
// myPromise().then(response => console.log(response))

export default async function runPromise() {
  console.log(await myPromise());
  console.log(await myPromise());
  console.log(await myPromise());
}
