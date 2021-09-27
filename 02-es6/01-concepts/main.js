// ================== CLASS ==================
class List {
  constructor() {
    this.data = [];
  }

  add(data) {
    this.data.push(data);
    console.log(this.data);
  }
}

class TodoList extends List {
  constructor() {
    super();
    this.user = "Rayan";
  }

  showUser() {
    console.log(this.user);
  }

  static showGoal() {
    console.log("Create TODOS");
  }
}

const MyList = new TodoList();

document.getElementById("newtodo").onclick = () => MyList.add("New TODO");
MyList.showUser();
TodoList.showGoal();

// ================== REDUCE ==================
const arr = [1, 3, 4, 5, 8, 9];
const sum = arr.reduce((total, next) => total + next)
console.log(sum);

// ================== DESTRUCTURING ==================
let user = {
  name: "Rayan",
  age: 17,
  address: {
    city: "Petrópolis",
    state: "RJ"
  }
};
const { age, address: { city } } = user;

const showName = ({ name }) => console.log(name);
showName(user)

// ================== REST ==================
const { name, ...rest } = user;
console.log(name, rest);