require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const { POSTGRES_URL } = process.env;
import pg from "pg";

const sequelize = new Sequelize( POSTGRES_URL, {
  dialectModule: pg,
  logging: false,
  native: false,
  dialectOptions: {
    ssl: true,
  },
});
const basename = path.basename(__filename);

const modelDefiners = [];
fs.readdirSync(path.join(__dirname, '/Models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/Models', file)));
  });

modelDefiners.forEach(model => model(sequelize));

// Capitalizamos los nombres de los modelos
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

const { Champs } = sequelize.models;

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};