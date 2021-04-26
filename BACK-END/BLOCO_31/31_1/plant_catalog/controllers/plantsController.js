const {
  createNewPlant,
  getPlants,
  getPlantById,
  removePlantById,
  getPlantsThatNeedsSunWithId,
  editPlant
} = require('../plants');

const getPlantsBase = (req, res) => {
  const plants = getPlants();
  res.status(200).json(plants);
};

const getPlantByIdBase = (req, res) => {
  const { id } = req.params;

  const plant = getPlantById(Number(id));
  res.status(200).json(plant);
};

const removePlantByIdBase = (req, res) => {
  const { id } = req.params;

  removePlantById(Number(id));
  res.status(204).end();
};

const editPlantBase = (req, res) => {
  const { id } = req.params;
  const newPlant = req.body;

  const baseEdited = editPlant(Number(id), newPlant);
  res.status(200).json(baseEdited);
};

const createNewPlantBase = (req, res) => {
  const plant = req.body;
  const newPlant = createNewPlant(plant);

  res.status(201).json(newPlant);
};

const getPlantsThatNeedsSunWithIdBase = (req, res) => {
  const { id } = req.params;

  const plantsFiltred = getPlantsThatNeedsSunWithId(Number(id));
  res.status(200).json(plantsFiltred);
};

module.exports = {
  getPlantsBase,
  getPlantByIdBase,
  removePlantByIdBase,
  editPlantBase,
  createNewPlantBase,
  getPlantsThatNeedsSunWithIdBase
}