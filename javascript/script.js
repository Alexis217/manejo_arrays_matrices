const personas = [];
let contador = 0;

// función que permite capturar entradas del usuario de forma asíncrona
const pedirDato = (mensaje) => {
  return new Promise((resolve) => {
    const stdin = process.stdin;
    stdin.resume();
    process.stdout.write(mensaje);

    stdin.once("data", (data) => {
      resolve(data.toString().trim());
    });
  });
};

// Funcion principal para pedir datos y mostrar resultados
const main = async () => {
  const cantidad = parseInt(
    await pedirDato("Cantidad de personas a registrar: ")
  );

  while (contador < cantidad) {
    const nombre = await pedirDato(`Nombre persona ${contador + 1}: `);
    const edad = await pedirDato(`Edad de ${nombre}: `);
    const nota = await pedirDato(`Nota de ${nombre}: `);

    personas.push({
      nombre,
      edad: parseInt(edad),
      nota: parseFloat(nota),
    });

    contador++;
  }

  console.log("\nLista original:");
  console.log(personas);

  console.log("\nLista ordenada por nota:");
  console.log(personas.sort((a, b) => b.nota - a.nota));

  process.exit();
};

main();
