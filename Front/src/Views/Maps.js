import React, { useState } from "react";
import "./Maps.css";
import Demacia1 from "../lol/Cities/Demacia/demacia_plaza_01.jpg";
import Demacia2 from "../lol/Cities/Demacia/demacia_plaza_02.jpg";
import Demacia3 from "../lol/Cities/Demacia/demacia_plaza_03.jpg";
import Frel1 from "../lol/Cities/Frel/Frel1.jpg";
import Frel2 from "../lol/Cities/Frel/Frel2.jpg";
import Frel3 from "../lol/Cities/Frel/Frel3.jpg";
import Targon1 from "../lol/Cities/Targon/4.jpg";
import Targon2 from "../lol/Cities/Targon/2.jpg";
import Targon3 from "../lol/Cities/Targon/3.jpg";
import Nox1 from "../lol/Cities/Noxus/6.jpg";
import Nox2 from "../lol/Cities/Noxus/7.jpg";
import Nox3 from "../lol/Cities/Noxus/8.jpg";
import Shur1 from "../lol/Cities/Shurima/10.jpg";
import Shur2 from "../lol/Cities/Shurima/11.jpg";
import Shur3 from "../lol/Cities/Shurima/12.jpg";
import Sha1 from "../lol/Cities/Shadow/13.jpg";
import Sha2 from "../lol/Cities/Shadow/14.jpg";
import Sha3 from "../lol/Cities/Shadow/15.jpg";

function Maps() {
  const [informacion, setInformacion] = useState(""); // Estado para almacenar la información
  const [imagenes, setImagenes] = useState([]); // Estado para almacenar las imágenes
  const [titulos, setTitulos] = useState({}); // Estado para almacenar los títulos
  const [mostrarDiv, setMostrarDiv] = useState(false); // Estado para controlar la visibilidad del div
  const [mostrarBotones, setMostrarBotones] = useState(true); // Estado para controlar la visibilidad de los botones
  const [carrousel, setCarrousel] = useState([]);
 
  // Función para mostrar el div y ocultar los botones
  function mostrarDivYBotones(texto, listaImagenes, titulo, subtitulo, carr) {
    setInformacion(texto);
    setImagenes(listaImagenes);
    setTitulos({ titulo, subtitulo });
    setMostrarDiv(true);
    setMostrarBotones(false);
    setCarrousel(carr);
  }

// Función para ocultar el div y mostrar los botones
function ocultarDivYBotones() {
    setMostrarDiv(false);
    setMostrarBotones(true);
  }

  // Información correspondiente a cada botón (texto e imágenes)
  const informacionBotones = {
    Freljord: {
      texto: "The Freljord is a harsh and unforgiving place—where the people are born warriors, who must persevere against all odds.Proud and fiercely independent, the tribes of the Freljord are often considered wild, rugged, and “uncivilized” by their neighbors across Valoran, who do not know the ancient traditions that shaped them. Many thousands of years ago, the alliance between the sisters Avarosa, Serylda, and Lissandra was shattered in a war that unknowingly threatened all of Runeterra, plunging the northern lands into chaos, and near-constant winter. Now, only those truly exceptional mortals who seem immune to the ravages of fire or ice seem destined, or able, to lead. Despite the best efforts of the Frostguard, myths and legends still endure of the old gods, the enigmatic yetis, and restless spirit walker shamans. The raiders of the Winter’s Claw range further with each passing year, harrying the borders of Demacia to the south, and the frontiers of Noxus to the east. Finally, seeking a more peaceful future, the fractious independent tribes and clans have begun to offer their allegiance to Ashe, young queen of the Avarosans. Even so, the portents are grim. War is surely returning to the Freljord, and none can hope to escape it.",
      imagenes: [ Frel2, Frel1, Frel3],
      titulo: "FRELJORD",
      subtitulo: "HARSH FROZEN LAND",
      carr:"carrousel de freljord",
    },
    Demacia: {
      texto: "Astrong, lawful kingdom with a prestigious military history, Demacia’s people have always valued the ideals of justice, honor, and duty most highly, and are fiercely proud of their cultural heritage. But in spite of these lofty principles, this largely self-sufficient nation has grown more insular and isolationist in recent centuries. Now, Demacia is a kingdom in turmoil. The capital, the Great City of Demacia, was founded as a refuge from sorcery after the nightmare of the Rune Wars, and built upon the riddle of petricite—a peculiar white stone that dampens magical energy. It is from here that the royal family has long seen to the defense of the outlying towns and villages, farmland, forests, and mountains rich with mineral resources. However, following the sudden death of King Jarvan III, the other noble families have not yet approved the succession of his sole heir, young Prince Jarvan, to the throne. Those who dwell beyond the heavily guarded borders are increasingly viewed with suspicion, and many former allies have begun to look elsewhere for protection, in these uncertain times. Some dare to whisper that the golden age of Demacia has passed, and unless its people are willing to adapt to a changing world—something many believe they are simply incapable of doing—the kingdom’s decline may be inevitable. And all the petricite in the land will not protect Demacia from itself.",
      imagenes:  [ Demacia1, Demacia2, Demacia3],
      titulo: "DEMACIA",
      subtitulo: "PROUD MILITARY KINGDOM",
      carr:"carrousel de frejord",
    },
    Targon: {
      texto: "Mount Targon is the mightiest peak in Runeterra, a towering peak of sun-baked rock amid a range of summits unmatched in scale anywhere else in the world. Located far from civilization, Mount Targon is utterly remote and all but impossible to reach save by the most determined seeker. Many legends cling to Mount Targon, and, like any place of myth, it is a beacon to dreamers, madmen and questors of adventure. Some of these brave souls attempt to scale the impossible mountain, perhaps seeking wisdom or enlightenment, perhaps chasing glory or some soul-deep yearning to witness its summit. The ascent is all but impossible, and those hardy few who somehow survive to reach the top almost never speak of what they have seen. Some return with a haunted, empty look in their eyes, others changed beyond all recognition, imbued by an Aspect of unearthly, inhuman power with a destiny few mortals can comprehend.",
      imagenes: [ Targon1, Targon2,Targon3],      
      titulo: "TARGON",
      subtitulo: "SPRAWLING WESTERN MOUNTAINS",
      carr:"carrousel de frejord",
    },

    Noxus: {
        texto: "Noxus is a powerful empire with a fearsome reputation. To those beyond its borders, it is brutal, expansionist, and threatening, yet those who look past its warlike exterior see an unusually inclusive society, where the strengths and talents of its people are respected and cultivated. The Noxii were once fierce barbarian tribes, until they stormed the ancient city that now lies at the heart of their domain. Under threat from all sides, they aggressively took the fight to their enemies, pushing their borders outward with each passing year. This struggle for survival has made modern Noxians a deeply proud people who value strength above all—though that strength can manifest in many different forms. Anyone can rise to a position of power and respect within Noxus if they display the necessary aptitude, regardless of social standing, background, homeland, or wealth. Those who are able to wield magic are held in particularly high esteem, and are actively sought out in order that their special talents may be honed and best harnessed for the benefit of the empire. But in spite of this meritocratic ideal, the old noble houses still wield considerable power… and some fear that the greatest threat to Noxus comes not from its enemies, but from within.",
        imagenes: [ Nox1, Nox2, Nox3],      
        titulo: "NOXUS",
        subtitulo: "BRUTAL EXPANSIONIST EMPIRE",
        carr:"carrousel de NOXUS",
      },
    Shurima:{
        texto: "The empire of Shurima was once a thriving civilization that spanned an entire continent. Forged in a bygone age by the mighty god-warriors of the Ascended Host, it united all the disparate peoples of the south, and enforced a lasting peace between them. Few dared to rebel. Those that did, like the accursed nation of Icathia, were crushed without mercy. However, after several thousand years of growth and prosperity, the failed Ascension of Shurima’s last emperor left the capital in ruins, and tales of the empire’s former glory became little more than myth. Now, most of the nomadic inhabitants of Shurima’s deserts eke out a meager existence from the unforgiving land. Some have built small outposts to defend the few oases, while others delve into long lost catacombs in search of the untold riches that must surely lay buried there. There are also those who live as mercenaries, taking coin for their service before disappearing back into the lawless wastelands. Still, a handful dare to dream of a return to the old ways. Indeed, more recently the tribes have been stirred by whispers from the heart of the desert—that their emperor Azir has returned, to lead them into a new, wondrous age.",
        imagenes: [Shur1, Shur2, Shur3],
        titulo: "SHURIMA",
        subtitulo: "FALLEN DESERT EMPIRE",
        carr:"carrousel de Shurima",
      },
    Shadow: {
        texto: "This cursed land was once home to a noble, enlightened civilization, known to its allies and emissaries as the Blessed Isles. However, more than a thousand years ago, an unprecedented magical cataclysm left the barrier between the material and spirit realms in tatters, effectively merging the two… and dooming all living things in an instant. Now, a malevolent Black Mist permanently shrouds the Isles, and the earth itself is tainted by dark sorcery. Mortals who dare to venture to these dismal shores will slowly have their life force stolen away from them, which in turn attracts the insatiable, restless spirits of the dead. Those who perish within the Mist are condemned to haunt this nightmarish place for eternity—worse still, the power of the Shadow Isles appears to wax stronger with every passing year, allowing the most powerful specters to roam farther and farther across Runeterra.",
        imagenes: [Sha1, Sha2 , Sha3],
        titulo: "SHADOW ISLES",
        subtitulo: "LANDS SHROUDED BY THE BLACK MIST",
        carr:"carrousel de Shadow",
      },
    Ionia:{
        texto: "Información de Targon...",
        imagenes: ["imagen5.jpg"],
        titulo: "Título de Frejord",
        subtitulo: "Subtítulo de Frejord",
      },
    Piltover: {
        texto: "Información de Targon...",
        imagenes: ["imagen5.jpg"],
        titulo: "Título de Frejord",
        subtitulo: "Subtítulo de Frejord",
      },
    Zaun: {
        texto: "Información de Targon...",
        imagenes: ["imagen5.jpg"],
        titulo: "Título de Frejord",
        subtitulo: "Subtítulo de Frejord",
      },
    Bilgewater: {
        texto: "Información de Targon...",
        imagenes: ["imagen5.jpg"],
        titulo: "Título de Frejord",
        subtitulo: "Subtítulo de Frejord",
      },

  };

  return (
    <div className="Maps">
      {/* Botones */}
      {mostrarBotones && (
        <div className="Buttons">
            {/* ------------Frijol ----------- */}
          <button id="Freljord" onClick={() => mostrarDivYBotones(
                informacionBotones.Freljord.texto,
                informacionBotones.Freljord.imagenes,
                informacionBotones.Freljord.titulo,
                informacionBotones.Freljord.subtitulo,
                informacionBotones.Freljord.carr,
              )}
              className="Freljord">
                <img src="Freljord" alt="Freljord"/>
                Frejord
          </button>
             {/* -----------------Demacia -----------------*/}
          <button id="Demacia" onClick={() => mostrarDivYBotones(
                informacionBotones.Demacia.texto,
                informacionBotones.Demacia.imagenes,
                informacionBotones.Demacia.titulo,
                informacionBotones.Demacia.subtitulo,
                informacionBotones.Demacia.carr,
              )}
              className="Demacia">
                <img src="Demacia" alt="Demacia"/>
            Demacia
          </button>
        {/* -----------------Targon -----------------*/}
            <button id="Targon" onClick={() => mostrarDivYBotones(
                informacionBotones.Targon.texto,
                informacionBotones.Targon.imagenes,
                informacionBotones.Targon.titulo,
                informacionBotones.Targon.subtitulo,
                informacionBotones.Targon.carr,
              )}
              className="Targon">
                <img src="Targon" alt="Targon"/>
            Targon
          </button>
                 {/* -----------------Noxus -----------------*/}
                 <button id="Noxus" onClick={() => mostrarDivYBotones(
                informacionBotones.Noxus.texto,
                informacionBotones.Noxus.imagenes,
                informacionBotones.Noxus.titulo,
                informacionBotones.Noxus.subtitulo,
                informacionBotones.Noxus.carr,
              )}
              className="Noxus">
                <img src="Noxus" alt="Noxus"/>
            Noxus
          </button>
            {/* -----------------Shurima -----------------*/}
            <button id="Shurima" onClick={() => mostrarDivYBotones(
                informacionBotones.Shurima.texto,
                informacionBotones.Shurima.imagenes,
                informacionBotones.Shurima.titulo,
                informacionBotones.Shurima.subtitulo,
                informacionBotones.Shurima.carr,
              )}
              className="Shurima">
                <img src="Shurima" alt="Shurima"/>
            Shurima
          </button>
            {/* -----------------Shadow -----------------*/}
                <button id="Shadow" onClick={() => mostrarDivYBotones(
                informacionBotones.Shadow.texto,
                informacionBotones.Shadow.imagenes,
                informacionBotones.Shadow.titulo,
                informacionBotones.Shadow.subtitulo,
                informacionBotones.Shadow.carr,
              )}
              className="Shadow">
                <img src="Shadow" alt="Shadow"/>
            Shadow Isle
          </button>


        </div>

      )}

      {mostrarDiv && (
        <div className="info" id="info">

          {/* Botón para cerrar el div */}
          <button onClick={ocultarDivYBotones}>CLOSE</button>
          {/* Mostrar los títulos */}
          <h1>{titulos.titulo}</h1>
          <h2>{titulos.subtitulo}</h2>

          {/* Mostrar la información almacenada en el estado */}
          <p>{informacion}</p>
          <br></br>
          <div>{carrousel}</div>
          <br></br>
          {/* Mostrar las imágenes almacenadas en el estado */}
          <div className="imagenes">
            {imagenes.map((imagen, index) => (
              <img key={index} src={imagen} alt={`Imagen ${index}`} />
            ))}
          </div>

        </div>
      )}
    </div>
  );
}

export default Maps;