// const sayHello = function(name){
//   return "Hey there," + name + " !"
// }
//
// console.log(sayHello('Gandhi'));


//const sayHello = (name) =>  `Hey there ${name}!`


//console.log(sayHello('Gandhi'));


const todos = [{
  title: 'Buy Bread',
  isDone: true,
}, {
  title: 'Go to the gym',
  isDone: true,
}, {
  title: 'Record youtube videos',
  isDone: false,
}]

const thingsDone = todos.filter((todo) =>  todo.isDone === true)



// console.log(thingsDone);

const cameras = {
  price: 600,
  weight: 2000,
  myDes: function() {
    return `This canon camera is of ${this.price} `
  }
}

console.log(cameras.myDes());

//Only for redux people
//const func = () => ({key: 'value'});
