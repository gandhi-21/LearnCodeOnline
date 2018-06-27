 let sayHello = function (name) {
     console.log(`Greeting message for ${name}`)
     console.log(`Hey ${name}`)
 }
//
// sayHello('John')
//
 let fullNameMaker = function(firstName, lastName) {
   console.log('Welcome to LCO')
   console.log(`Happy to have you, ${firstName} ${lastName}`);
 }
//
// fullNameMaker('John','Doe');
//
 let myAdder = function(num1, num2) {
   let added = num1 + num2
   return added
 }
//
// console.log(myAdder(1,2))
//
let myMultiplier = function(num1, num2){
  return num1*num2
}
let guestUser = function(name = 'unName', courseCount = 0){
  return `Hello ${name} and your course count is ${courseCount}`
}
//
//  console.log(guestUser('John',1))
//
