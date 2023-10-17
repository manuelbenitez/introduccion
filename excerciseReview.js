const students = [
  {
    id: 1,
    name: "Luca",
    surname: "Rossi",
    age: 20,
    hobby: "gamer",
    altura: 1.67,
    sexo: "M",
  },
  {
    id: 2,
    name: "Mario",
    surname: "Bianchi",
    age: 24,
    hobby: "sportsman",
    altura: 1.47,
    sexo: "M",
  },
  {
    id: 5,
    name: "Elena",
    surname: "Pappalardo",
    age: 23,
    hobby: "photographer",
    altura: 1.69,
    sexo: "F",
  },
  {
    id: 3,
    name: "Giovanna",
    surname: "Brambilla",
    age: 26,
    hobby: "gamer",
    altura: 1.97,
    sexo: "NB",
  },
  {
    id: 4,
    name: "Carmelo",
    surname: "Verdi",
    age: 18,
    hobby: "photographer",
    altura: 1.37,
    sexo: "M",
  },
];

function printByHobby() {
  students.forEach((student) => {
    console.log(student.name);
    if (student.hobby === "gamer") {
      console.log("Life is a Game, Play to Win!");
    } else if (student.hobby === "sportsman") {
      console.log("Never give up!");
    } else if (student.hobby === "photographer") {
      console.log("A picture isn't worth a thousand words!");
    }
  });
}

function sortDates(prevDate, nextDate) {
  const now = new Date();
  const isBetween = prevDate > now && prevDate < nextDate;
  const isBefore = prevDate < now;
  const isAfter = prevDate > nextDate;

  if (isBetween) {
    console.log("Aca iria la logica de tu codigo");
  } else if (isAfter) {
    console.log("No hay disponibilidad");
  } else if (isBefore) {
    console.log("Aca no hay disponibilidad");
  }
}

function sortByAge() {
  //Menor a mayor
  const youngest = students.sort((prevStudent, nextStudent) => {
    if (prevStudent.age < nextStudent.age) {
      return -1;
    } else if (prevStudent.age > nextStudent.age) {
      return 1;
    }
  });

  //Mayor a menor
  const oldest = students.sort((prevStudent, nextStudent) => {
    if (prevStudent.age < nextStudent.age) {
      return 1;
    } else if (prevStudent.age > nextStudent.age) {
      return -1;
    }
  });

  console.log(`The youngest student is: ${youngest[0].name}`);
  console.log(`The oldest student is: ${oldest[0].name}`);
}

function longestSurname() {
  var longest = "";

  students.forEach((student) => {
    if (student.surname.length > longest.length) {
      longest = student.surname;
    }
  });

  console.log("The longest surname is " + longest);
}

students.push({
  id: 6,
  name: "Jeizer",
  surname: "Valarezo Jimenez",
  age: 23,
  hobby: "gamer",
  altura: 1.67,
  sexo: "M",
});

function filterByAge() {
  const filteredStudents = students.filter((student) => student.age > 20);
  console.log(filteredStudents);
}

/**
 *
 * @param {Array} students - Array de estudiantes para ser filtrado
 *
 * @returns {Array} - Array filtrado de estudiantes con apellido de mas de 10 caracteres
 */
function filtradoPorLongitudDeApellido(students) {
  const filteredStudents = students.filter(
    (student) => student.surname.length > 10
  );
  console.log(filteredStudents);
}

function sliceArray() {
  const slicedStudents = students.slice(0, 3);
  const nextSlicedStudents = students.slice(4, students.length);

  // console.log(nextSlicedStudents);
  slicedStudents.push({
    id: 7,
    name: "Michelle",
    surname: "Caicedo",
    age: 23,
    hobby: "gamer",
  });

  nextSlicedStudents.forEach((student) => {
    slicedStudents.push(student);
  });

  console.log(slicedStudents, "students after push");
}

function printPorAltura() {
  sortByAge();

  students.forEach((student) => {
    let prefijo = "";

    if (student.sexo === "M") {
      prefijo = "El";
    } else if (student.sexo === "F") {
      prefijo = "La";
    } else if (student.sexo === "NB") {
      prefijo = "Los";
    }
    console.log(
      `${prefijo} estudiante${prefijo === "Los" ? "s" : ""} ${student.name}: ${
        student.altura
      }`
    );
  });
}

printPorAltura();
sliceArray();
printByHobby();
sortByAge();
longestSurname();
filterByAge();
filtradoPorLongitudDeApellido(students);
