const student = {
  name: 'john',
  age: 23,
  isActive: true
}

// convert the object into a string to bbe stored in local localStorage

const studentObjToString = JSON.stringify(student)

console.log(typeof studentObjToString);

localStorage.setItem('student', studentObjToString)

const toJSONStudent = JSON.parse(studentObjToString)

console.log(typeof toJSONStudent)

console.log(toJSONStudent.age);
