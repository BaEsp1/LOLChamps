const server = require('./src/App.js');
const { conn } = require('./src/db.js');
const {getData} = require('./src/Controllers/SaveData.js');
const port = process.env.PORT || 3001;

// Syncing all the models at once.
console.log('Iniciando la aplicación');
conn.sync()
  .then(() => {
    server.listen(3001, async () => {
      console.log('Servidor ON');
      getData();
    });
    console.log('Base de datos sincronizada');
  })
  .catch((error) => {
    console.error('Error sincronizando la base de datos:', error);
  });
