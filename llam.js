// Importa la biblioteca de shell de Python
const python = require("python-shell");

// Crea un objeto de shell de Python
const shell = new python.Shell();

// Ejecuta la expresión de conjuntos en Python
const result = shell.run({
  script: `python3 ${expression}`,
  pythonPath: "python3",
});

// Obtén los conjuntos involucrados en la operación
const conjuntos = JSON.parse(result.output).conjuntos;

// Subraya los conjuntos involucrados en la operación
for (var i = 0; i < conjuntos.length; i++) {
  // Obtén el círculo correspondiente al conjunto.
  var circulo = document.getElementById(conjuntos[i]);

  // Subraya el círculo.
  circulo.style.border = "1px solid red";
}
