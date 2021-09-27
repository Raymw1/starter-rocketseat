const delay = (x) => new Promise(resolve => setTimeout(() => resolve(x), 2000));

export default async function umPorSegundo() {
  console.log(await delay("1s"));
  console.log(await delay("2s"));
  console.log(await delay("3s"));
}
