// let defaultPlants = [
//   {
//     id: 1,
//     breed: "Bromelia",
//     needsSun: false,
//     origin: "Argentina",
//     size: 102,
//     specialCare: {
//       waterFrequency: 3,
//     },
//   },
//   {
//     id: 2,
//     breed: "Orquidea",
//     size: 99,
//     needsSun: false,
//     origin: "Brazil",
//   },
// ];

// let createdPlants = defaultPlants.length;

const calculateWaterFrequency = (needsSun, size, origin) => {
  return needsSun ? size *  0.77 + (origin === 'Brazil' ? 8 : 7)
    : (size / 2) *  1.33 + (origin === 'Brazil' ? 8 : 7)
}

const initPlant = (id, { breed, needsSun, origin, specialCare, size }) => {
  const waterFrequency = calculateWaterFrequency(needsSun, size, origin);
  const newPlant = {
    id,
    breed,
    needsSun,
    origin,
    specialCare: {
      waterFrequency,
      ...specialCare,
    },
    size,
  };
  return newPlant;
};

// const savePlants = () => {
//   const plants = JSON.stringify(defaultPlants);
//   localStorage.setItem("plants", plants);
// };

const getPlants = () => {
  return defaultPlants;
};

const getPlantById = (id) => {
  return defaultPlants.filter((plant) => plant.id === id);
};

const removePlantById = (id) => {
  defaultPlants = defaultPlants.filter((plant) => plant.id !== id);
};

const getPlantsThatNeedsSunWithId = (id) => {
  return defaultPlants.filter((plant) => {
    console.log(plant.needsSun);
    if (plant.needsSun && plant.id === id) {
        return plant;
    }
  });
};

const editPlant = (plantId, newPlant) => {
  defaultPlants = defaultPlants.map((plant) => {
    if (plant.id === plantId) {
      return newPlant;
    }
    return plant;
  });
  return defaultPlants;
};

const createNewPlant = (plant) => {
  createdPlants++;
  const mappedPlant = initPlant(createdPlants, { ...plant });
  defaultPlants.push(mappedPlant);
  return mappedPlant;
};

module.exports = {
  createNewPlant,
  getPlants,
  getPlantById,
  removePlantById,
  getPlantsThatNeedsSunWithId,
  editPlant
}