function returnUsers(users) {
  return users.map(user => `${user.name} has the skills: ${user.skills.join(", ")}`);
}


const users = [
  {
    name: "Rayan",
    skills: ["HTML", "CSS", "Javascript"]
  },
  {
    name: "Nicolas",
    skills: ["ReactJS", "Node.js", "Javascript"]
  }
]

const results = returnUsers(users);
results.forEach(result => console.log(result));