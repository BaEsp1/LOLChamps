const { Champ } = require('../db');
const axios = require('axios');

async function getData() {
  const allChamps = await Champ.findAll();

  if (!allChamps.length) {
    try {
      const apiResponse = await axios.get('http://ddragon.leagueoflegends.com/cdn/12.6.1/data/en_US/champion.json');
      const apiChamps = Object.values(apiResponse.data.data).map((e) => {
        return {
          id: e.id,
          name: e.name,
          title: e.title,
          blurb: e.blurb,
          image: e.image.full,
          tags: e.tags,
          info: e.info,
        };
      });

      await Champ.sync({ force: true }); // Esto eliminará y recreará la tabla Champ
      await Champ.bulkCreate(apiChamps);
      console.log('BD created');
    } catch (error) {
      console.error('Error fetching or processing data:', error.message);
    }
  }

  const updatedChamps = await Champ.findAll();
  return updatedChamps;
}

module.exports = { getData };
