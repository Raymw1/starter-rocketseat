const users = [
  { name: 'Diego', age: 23, company: 'Rocketseat' },
  { name: 'Gabriel', age: 15, company: 'Rocketseat' },
  { name: 'Lucas', age: 30, company: 'Facebook' },
];

const ages = users.map(user => user.age);
const rocketers = users.filter(user => user.age >= 18 && user.company === "Rocketseat");
const googlers = users.find(user => user.company === "Google");

let oldUsers = users.map(user => ({...user, age: user.age * 2}));
oldUsers = oldUsers.filter(user => user.age <= 50);


console.log(ages);
console.log(rocketers);
console.log(googlers);
console.log(oldUsers);