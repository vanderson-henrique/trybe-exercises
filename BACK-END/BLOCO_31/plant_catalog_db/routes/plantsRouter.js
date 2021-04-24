const { Router } = require('express');
const { getPlantsBase,
        getPlantByIdBase,
        removePlantByIdBase,
        editPlantBase,
        createNewPlantBase,
        getPlantsThatNeedsSunWithIdBase
} = require('../controllers/plantsController');

const router = Router();

router.get('/plants', getPlantsBase);
router.get('/plant/:id', getPlantByIdBase);
router.delete('/plant/:id', removePlantByIdBase);
router.put('/plant/:id', editPlantBase);
router.post('/plant', createNewPlantBase);
router.get('/sunny/:id', getPlantsThatNeedsSunWithIdBase);

module.exports = router;
