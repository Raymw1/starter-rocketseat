const address = {
  street: "Rua dos Pinheiros",
  number: 1293,
  neighborhood: "Centro",
  city: "São Paulo",
  uf: "SP"
};

function returnAddress(address) {
  return `O usuário mora em ${address.city} / ${address.uf}, no bairro ${address.neighborhood}, na rua ${address.street} com Nº ${address.number}`
}

const result = returnAddress(address);
console.log(result);