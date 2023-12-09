const server = require('./src/App.js');
const { conn } = require('./src/db.js');
const {getData} = require('./src/Controllers/SaveData.js');
const port = process.env.PORT || 3001;

// Syncing all the models at once.
conn.sync({ force: true})
  .then(() => {
    server.listen(port , async () => {
            getData();
          }
        );
  });