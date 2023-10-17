const listaDeEstudiantesCursoIntrodutorio = [
  {
    fullName: "Manuel Benitez",
    estaAprobado: false,
  },
  {
    fullName: "Marco Adornato",
    estaAprobado: true,
  },
  {
    fullName: "Adriana",
    estaAprobado: true,
  },
  {
    fullName: "Valarezo Jimenez Jeizer",
    estaAprobado: true,
  },
];

const listaDeEstudiantesFS = [
  {
    fullName: "Manuel Benitez",
    estaAprobado: false,
  },
  {
    fullName: "Marco Lambir",
    estaAprobado: false,
  },
  {
    fullName: "Barbara",
    estaAprobado: true,
  },
  {
    fullName: "Esteve",
    estaAprobado: true,
  },
];

const estaAprobado = (arrayDeEstudiantes) => {
  arrayDeEstudiantes.forEach((estudiante) => {
    if (estudiante.estaAprobado) {
      console.log(estudiante.fullName);
    }
  });
};

estaAprobado(listaDeEstudiantesCursoIntrodutorio);
estaAprobado(listaDeEstudiantesFS);
