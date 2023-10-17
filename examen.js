function sumaFor(n) {
  let sum = 0;

  for (let i = 0; i <= n; i++) {
    sum = sum + i;
  }

  return sum;
}

function sumaWhile(n) {
  let sum = 0;
  let i = 0;

  while (i <= n) {
    sum = sum + i;
    i++;
  }

  return sum;
}

console.log(sumaWhile(10));
console.log(sumaFor(10));
console.log(sumaWhile(20));
console.log(sumaFor(20));
console.log(sumaWhile(15));
console.log(sumaFor(15));
