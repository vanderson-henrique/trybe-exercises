const conn = require('./connection');

const getPlants = async () => {
  const [rows] = await conn.query('SELECT * FROM plants;');
  return rows;
};

const getPlantById = async (id) => {
  const [result] = await conn.query('SELECT * FROM plants WHERE id = ?', [id]);
  if (!result.length) return null;
  return result[0];
}

const removePlantById = async (id) => {
  const plant = await getPlantById(id);
  if (!plant) return null;
  return await conn.query('DELETE FROM plants WHERE id = ?;', [id]);
};

const editPlant = async (id, { breed, needsSun, origin, size, waterFrequency }) => {
  await conn.query(
    'UPDATE plants SET breed = ?, needsSun = ?, origin = ?, size = ?, waterFrequency = ? WHERE id = ?',
    [breed, needsSun, origin, size, waterFrequency, id]
  );
}

const createNewPlant = async ({ breed, needsSun, origin, size, waterFrequency }) => {
  const [{ insertId }] = await conn.query(
    'INSERT INTO plants (breed, needsSun, origin, size, waterFrequency) VALUES (?, ?, ?, ?, ?)',
    [breed, needsSun, origin, size, waterFrequency]
  );
  return ({
    id: insertId,
    breed,
    needsSun,
    origin,
    size,
    waterFrequency
  });
};

const getPlantsThatNeedsSunWithId = async (id) => {
  const [result] = await conn.query('SELECT * FROM plants WHERE id = ? && needsSun = 1', [id]);
  if (!result.length) return null;
  return result[0];
}

module.exports = {
  getPlants,
  getPlantById,
  removePlantById,
  editPlant,
  createNewPlant,
  getPlantsThatNeedsSunWithId
}