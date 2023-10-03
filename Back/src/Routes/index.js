const { Router } = require('express');
const champsR = require("../Routes/Rchamps")
// const  countriesR = require('../routes/countriesR');
// const  activitiesR  = require('../routes/activitiesR');
//const {activity , country }  = require ("../db")

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/champs', champsR );

module.exports = router;
