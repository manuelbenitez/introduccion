function numeroMasChico(num1, num2, num3) {
  let numeroMasChico = num1;

  if (numeroMasChico > num2) {
    numeroMasChico = num2;
  }
  if (numeroMasChico > num3) {
    numeroMasChico = num3;
  }

  const esPar = numeroMasChico % 2 === 0;

  if (esPar) {
    return true;
  } else if (!esPar) {
    return false;
  }
}
/**
 *
 */
function runTestFunc(callback) {
  console.log(callback);
  console.log(callback(1, 10, 33));
  console.log(callback(80, 56, 14));
  console.log(callback(444, 0, 52));
}
const runTest = (callback) => {
  console.log(callback);
  console.log(callback(1, 10, 33));
  console.log(callback(80, 56, 14));
  console.log(callback(444, 0, 52));
};

const arrowFunction = () => {
  console.log("arrow function en ejecucion");
};

arrowFunction();

runTest(numeroMasChico);
