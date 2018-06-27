// const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
//
// // let sayHello = function (day) {
// //     console.log(day)
// // }
//
// // days.forEach(function(day, index) {
// //     console.log(`starts with ${index+1} -- ${day}`)
// // })
//
// // const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
//
// // months.forEach(function(month, index) {
// //     console.log(`starts with ${index+1} -- ${month}`)
// // })
//
// // const toDo = ['Earn', 'More', 'Money']
//
// // toDo.forEach(function(task) {
// //     console.log(`Task is ${task}`)
// // })
//
// for (var i = 0; i < days.length; i++) {
//   console.log(days[i])
// }
//

const myTodos = []

myTodos.unshift('Buy Bread')
myTodos.unshift('Record videos')
myTodos.unshift('Go to gym')

// myTodos.forEach(function (toDo, index) {
//     console.log(`Your task number ${index+1} is: ${toDo}`)
// })

for (var i = 0; i < myTodos.length; i++) {
    console.log(`Your task number ${i+1} is: ${myTodos[i]}`)
}
