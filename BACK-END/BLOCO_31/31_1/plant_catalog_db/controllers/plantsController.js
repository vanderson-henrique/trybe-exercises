const { getPlants,
        getPlantById,
        removePlantById,
        editPlant,
        createNewPlant,
        getPlantsThatNeedsSunWithId
} = require('../models/plantsModel');

const getPlantsBase = async (req, res) => {
  const plants = await getPlants();
  res.status(200).json(plants);
};

const getPlantByIdBase = async (req, res) => {
  const { id } = req.params;

  const plant = await getPlantById(Number(id));

  if (plant === null) return res.status(404).json({ message: 'Planta não encontrada' });

  res.status(200).json(plant);
};

const removePlantByIdBase = async (req, res) => {
  try {
    const { id } = req.params;

    const plantRemoved = await removePlantById(Number(id));
    if (!plantRemoved) throw new Error('Planta inexistente!');
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const editPlantBase = async (req, res) => {
  const { id } = req.params;
  const newPlant = req.body;

  await editPlant(Number(id), newPlant);
  res.status(204).end();
};

const createNewPlantBase = async (req, res) => {
  const plant = req.body;
  const newPlant = await createNewPlant(plant);

  res.status(201).json(newPlant);
};

const getPlantsThatNeedsSunWithIdBase = async (req, res) => {
  const { id } = req.params;

  const plantsFiltred = await getPlantsThatNeedsSunWithId(Number(id));
  if (!plantsFiltred) return res.status(404).json({ message: 'Planta não encontrada' });
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