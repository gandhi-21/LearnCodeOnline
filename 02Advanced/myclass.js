class User{
    constructor(firstName, lastName, credit){
      this.firstName = firstName
      this.lastName = lastName
      this.credit = credit
    }
    getFullName(){
      return `${this.firstName} ${this.lastName} is my full name`
    }
    editName(newname){
      const myname = newname.split(' ')
      this.firstName = myname[0]
      this.lastName = myname[1]
      //take a middle name
    }
}

class Teacher extends User {
  constructor(firstName, lastName, credit, subject){
    super(firstName, lastName, credit)
    this.subject = subject
  }
  getFullName(){
    let fullname = `${this.firstName} ${this.lastName} is my full name and I teach ${this.subject}`
    return fullname
  }
  favDrink(name){
    console.log(`my favourite drink is ${name}`);
  }
}

const john = new Teacher('John', 'Anderson', 34, 'python')
//console.log(john);
john.editName('Johnny Anderson')
john.favDrink('Iced tea')
console.log(john.getFullName());

// const sammy = new User()
// console.log(sammy);
