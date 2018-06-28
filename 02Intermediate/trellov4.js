// const myTodos = ['Buy Bread', 'Go to the gym', 'Record youtube videos']
// //console.log(myTodos.indexOf('Buy Bread'));


const newTodos = [{
  title: 'Buy Bread',
  isDone: false,
}, {
  title: 'Go to the gym',
  isDone: false,
}, {
  title: 'Record youtubbe videos',
  isDone: true,
}]

// const index = newTodos.findIndex(function(todo, index){
//   console.log(todo);
//   return todo.title == 'Go to the gym'
// })
//
// console.log(index);

// Method 1
//
// const findTodo = function(myTodos, title){
//   const index = myTodos.findIndex(function(todo, index){
//     return todo.title.toLowerCase() === title.toLowerCase()
//   })
//   return myTodos[index]
// }
//
// let printMe = findTodo(newTodos, 'Go To The Gym')
// console.log(printMe);

// Method 2
const findTodo = function(myTodos, title){
  const titleReturned = myTodos.find(function(todo, index){
    return todo.title.toLowerCase() === title.toLowerCase()
  })
  return titleReturned
}

let printMe = findTodo(newTodos, 'Go to the gym')
console.log(printMe);
