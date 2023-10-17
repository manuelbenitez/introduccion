// 44

// const numbers = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20,
// ];

// console.log(numbers[0]);
// console.log(numbers[9]);
// console.log(numbers.length);
// console.log(numbers[20]);

// 45

// const students = [
//   {
//     id: 1,
//     name: "Manuel",
//     surname: "Benitez",
//   },
//   {
//     id: 2,
//     name: "Denny",
//     surname: "Zambrano",
//   },
//   {
//     id: 3,
//     name: "Adriana",
//     surname: "Alexe",
//   },
// ];

// console.log(students[0].surname);

// 46

// const students = [
//   { id: 1, name: "Luca", surname: "Rossi", age: 20 },
//   { id: 2, name: "Mario", surname: "Bianchi", age: 24 },
//   { id: 3, name: "Giovanni", surname: "Brambilla", age: 30 },
// ];

// students.forEach((student) => {
//   console.log(student.id);
// });

// 47
const names = ["Luca", "Marco", "Vittorio", "Giovanni"];

// console.log(names.pop());
// console.log(names);
// names.push("Pippo");
// console.log(names);
// names.splice(1, 1, "Giovanni");
// // names.unshift("Giovanni");
// console.log(names);

// 48

// console.log(names.join("-"));

// 49

const students = [
  { id: 1, name: "Luca", surname: "Rossi", age: 20 }, // 0
  { id: 1, name: "Marco", surname: "Rossi", age: 20 }, // 1
  { id: 2, name: "Mario", surname: "Bianchi", age: 24 }, // 2
  { id: 3, name: "Giovanni", surname: "Brambilla", age: 30 }, // 3
];

const indiceDeMario = students.map((student) => student.name).indexOf("Mario");

console.log(indiceDeMario);
students.splice(indiceDeMario, 1, {
  id: 3,
  name: "Francesco",
  surname: "Verdi",
  age: 41,
});

console.log(students);
