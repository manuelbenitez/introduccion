// Explain the difference between the double and the triple equals operator.
const firstYearCompleted = true;
const yearsCompleted = 1;
const yearsCompletedString = "";

yearsCompleted == firstYearCompleted;
yearsCompleted === firstYearCompleted;

console.log(10 > 9);
console.log(45 == !34);
console.log(true == 1);
console.log(false == 0);
console.log(1 == !true);
console.log(1 == 1);
console.log(4 == !2);
console.log(4 >= 8);

if (!firstYearCompleted) {
  console.log("Volver a repetir el curso");
} else if (1 == !true) {
  console.log("");
}
