// A função getPlanet abaixo imprime o planeta Marte de forma síncrona. Modifique getPlanet, de forma que Marte seja impresso assincronamente, depois de 4 segundos.

const getPlanet = () => {
    const mars = {
      name: "Mars",
      distanceFromSun: {
        value: 227900000,
        measurementUnit: "kilometers",
      },
    };
    // Inserida função setTimeOut que executa a função (no caso, console.log) depois de um tempo estipulado (4000 ms, ou 4 segundos)
    setTimeout(() => console.log("Returned planet: ", mars), 4000);
  };
  
  getPlanet(); // imprime Marte depois de 4 segundos