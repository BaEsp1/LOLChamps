const { Router } = require('express');
const { getChamps , getDetail} = require('../Controllers/getChamps')
const router= Router();

router.get('/', getChamps);
router.get('/:id', getDetail);


module.exports = router;