//Crea un archivo llamado objetos.js que contenga las siguientes líneas
//Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
//Una variable que obtenga tu edad a partir del objeto anterior
//Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
//Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor

// Objeto con tus datos personales
const misDatos = {
    nombre: "Alex",
    apellido: "Ramirez",
    edad: 26,
    altura: 1.78,
    eresDesarrollador: true
  };
  console.log(misDatos)

  // Variable que obtiene la edad a partir del objeto anterior
  const miEdad = misDatos.edad;
  console.log(miEdad)
  
  // Lista que contiene objetos con tus datos personales y los datos personales de tus dos mejores amig@s
  const listaDePersonas = [
    misDatos,
    {
      nombre: "yanjis",
      apellido: "Pecosa",
      edad: 24,
      altura: 1.76,
      eresDesarrollador: false
    },
    {
      nombre: "Pedro",
      apellido: "Piñeros",
      edad: 26,
      altura: 1.80,
      eresDesarrollador: true
    }
  ];
  console.log(listaDePersonas)
  
  // Nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
  const listaOrdenadaPorEdad = listaDePersonas.sort((a, b) => b.edad - a.edad);