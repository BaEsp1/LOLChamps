const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('champ', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    title:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    blurb:{
      type: DataTypes.JSON,
      allowNull: false,
    },
    image:{
      type: DataTypes.JSON,
      allowNull: false,
    },
    tags:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    info:{
      type: DataTypes.JSON,
    },
  },{timestamps:false});
};





// {"type":"champion","format":"standAloneComplex","version":"6.24.1","data":{
//     "Aatrox":
//         {"version":"6.24.1",
//         "id":"Aatrox",
//         "key":"266",
//         "name":"Aatrox",
//         "title":"the Darkin Blade",
//         "blurb":"Aatrox is a legendary warrior, one of only five that remain of an ancient race known as the Darkin. He wields his massive blade with grace and poise, slicing through legions in a style that is hypnotic to behold. With each foe felled, Aatrox's ...",
//         "info":{"attack":8,"defense":4,"magic":3,"difficulty":4},
//         "image":{"full":"Aatrox.png","sprite":"champion0.png","group":"champion","x":0,"y":0,"w":48,"h":48},
//         "tags":["Fighter","Tank"],
//         "partype":"BloodWell",
//         "stats":{"hp":537.8,"hpperlevel":85.0,"mp":105.6,"mpperlevel":45.0,"movespeed":345.0,"armor":24.384,"armorperlevel":3.8,"spellblock":32.1,"spellblockperlevel":1.25,"attackrange":150.0,"hpregen":6.59,"hpregenperlevel":0.5,"mpregen":0.0,"mpregenperlevel":0.0,"crit":0.0,"critperlevel":0.0,"attackdamage":60.376,"attackdamageperlevel":3.2,"attackspeedoffset":-0.04,"attackspeedperlevel":3.0}
//     },
//     "Ahri":{"version":"6.24.1","id":"Ahri","key":"103","name":"Ahri","title":"the Nine-Tailed Fox","blurb":"Unlike other foxes that roamed the woods of southern Ionia, Ahri had always felt a strange connection to the magical world around her; a connection that was somehow incomplete. Deep inside, she felt the skin she had been born into was an ill fit for ...","info":{"attack":3,"defense":4,"magic":8,"difficulty":5},"image":{"full":"Ahri.png","sprite":"champion0.png","group":"champion","x":48,"y":0,"w":48,"h":48},"tags":["Mage","Assassin"],"partype":"MP","stats":{"hp":514.4,"hpperlevel":80.0,"mp":334.0,"mpperlevel":50.0,"movespeed":330.0,"armor":20.88,"armorperlevel":3.5,"spellblock":30.0,"spellblockperlevel":0.0,"attackrange":550.0,"hpregen":6.505,"hpregenperlevel":0.6,"mpregen":6.0,"mpregenperlevel":0.8,"crit":0.0,"critperlevel":0.0,"attackdamage":53.04,"attackdamageperlevel":3.0,"attackspeedoffset":-0.065,"attackspeedperlevel":2.0}},
//     "Akali":{"version":"6.24.1","id":"Akali","key":"84","name":"Akali","title":"the Fist of Shadow","blurb":"There exists an ancient order originating in the Ionian Isles dedicated to the preservation of balance. Order, chaos, light, darkness -- all things must exist in perfect harmony for such is the way of the universe. This order is known as the Kinkou ...","info":{"attack":5,"defense":3,"magic":8,"difficulty":7},"image":{"full":"Akali.png","sprite":"champion0.png","group":"champion","x":96,"y":0,"w":48,"h":48},"tags":["Assassin"],"partype":"Energy","stats":{"hp":587.8,"hpperlevel":85.0,"mp":200.0,"mpperlevel":0.0,"movespeed":350.0,"armor":26.38,"armorperlevel":3.5,"spellblock":32.1,"spellblockperlevel":1.25,"attackrange":125.0,"hpregen":8.34,"hpregenperlevel":0.65,"mpregen":50.0,"mpregenperlevel":0.0,"crit":0.0,"critperlevel":0.0,"attackdamage":58.376,"attackdamageperlevel":3.2,"attackspeedoffset":-0.1,"attackspeedperlevel":3.1}}