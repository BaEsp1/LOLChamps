
const { Router } = require('express');
const { getClass} = require('../Controllers/getChamps')
const router= Router();

router.get('/', getClass);


module.exports = router;