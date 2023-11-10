import Map from "../lol/Map_of_MOBA.png";
import Map2 from "../lol/Maps2.jpg";
import Map3 from "../lol/Maps3.png";
import GIF from "../lol/Gif/victory-lol.gif"
import "./Hp.css" ;
import Aram1 from "../lol/Gif/aram1.gif";
import Aram2 from "../lol/Gif/aram2.gif";
import Aram3 from "../lol/Gif/aram3.gif";
import Grieta1 from "../lol/Gif/grieta1.gif";
import Grieta2 from "../lol/Gif/grieta2.gif";
import Grieta3 from "../lol/Gif/grieta3.gif";
import Bosque1 from "../lol/Gif/Ashe.gif";
import Bosque2 from "../lol/Gif/Zac.gif";
import Bosque3 from "../lol/Gif/Braum.gif";
// import Grieta from "../lol/Maps/Abismo.png";
// import Bosque from "../lol/Maps/Bosque.png";
// import Lamentos from "../lol/Maps/Lamentos.png";
import Class from "../lol/class.jpg";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import MyCarousel2 from "../Components/Carrousel/Home-Maps"

function Htp () {

    return (
        <div>
            <Link to="/home" className="BackHome">Back to Home</Link>
        <div className="HowToPlay">

        <h1>What is "League of Legends"?</h1>
            <p className="Init">League of Legends (LoL), commonly referred to as League, is a 2009 multiplayer online battle arena video game developed and published by Riot Games. Inspired by Defense of the Ancients, a custom map for Warcraft III, Riot's founders sought to develop a stand-alone game in the same genre.</p>
        <br></br>

        <div className="data">
        <h2>Gameplay</h2>
            <img src={GIF} alt="gif" className="gifi"></img>
            <p>League of Legends is a multiplayer online battle arena (MOBA) game in which the player controls a character ("champion") with a set of unique abilities from an isometric perspective. As of 2023, there are exactly 165 champions available to play.Over the course of a match, champions gain levels by accruing experience points (XP) through killing enemies.Items can be acquired to increase champions' strength, and are bought with gold, which players accrue passively over time and earn actively by defeating the opposing team's minions,champions, or defensive structures. In the main game mode, Summoner's Rift, items are purchased through a shop menu available to players only when their champion is in the team's base.Each match is discrete; levels and items do not transfer from one match to another.</p>
            
            <ul className="content">
            <h2>Contents:</h2>
            <h3><li><a href="#Champs">Champs</a></li></h3>
            <h3><li>Maps</li></h3>
            <div className="Maps">            
                    <div className="carouselMaps"><MyCarousel2 /></div>
                <ul>
                    <li><a href="#Summor">Summoner's Rift</a>   </li>
                        
                    <li><a href="#ARAM">ARAM - Howling Abyss</a> </li>
                        
                    <li><a href="#Twisted">Twisted Treeline</a></li>
                </ul> 
               </div>
               <h3><li><a href="#References">References</a></li></h3>
               </ul>
            </div>  

        <br></br>
        <div className="data">
        <h2 id="Champs">Champions</h2>
            <p>There are six classifications of LoL champions. A champion can belong to one or more categories, depending on the line you choose to play or the team of items you purchase from the store:</p>
            <ul><li>Assassins: These are champions whose abilities or gameplay possibilities make them special in the task of killing or destabilizing targets with high strategic value. Their characteristics are infiltration, deception and mobility.</li>
            <li>Fighters: These are champions dedicated to close-range and physical damage, with high resistance to receiving damage.</li>
            <li>Mages: These are champions that generally have a long range, area damage and crowd control ability. </li>
            <li>Sharpshooters: These are champions with low defenses but with the ability to perform attacks at medium or long distances to eliminate opponents without being hit.</li>
            <li>Supports (also called Supporters): These are champions that reinforce or support their teammates with healing, shield and crowd control abilities or bonuses.</li>
            <li>Tanks: These are melee champions with the ability to reach high base HP to receive constant or massive damage due to their great defenses. They apply little physical damage in the game, but possess great crowd control. </li></ul>
            <div className="Clases"> <img src={Class} alt="class"></img></div>
            </div>
            <br></br>
            
        <div className="data">
        <h2 id="Summor">Summoner's Rift</h2>
            <p>Summoner's Rift is the flagship game mode of League of Legends and the most prominent in professional-level play.The mode has a ranked competitive ladder; a matchmaking system determines a player's skill level and generates a starting rank from which they can climb. There are nine tiers; the least skilled are Iron, Bronze, and Silver, and the highest are Master, Grandmaster, and Challenger.</p>
            <img src={Map} alt="Map1"/>
            <p>Two teams of five players compete to destroy the opposing team's "Nexus", which is guarded by the enemy champions and defensive structures known as "turrets". Each team's Nexus is located in their base, where players start the game and reappear after death. Non-player characters known as minions are generated from each team's Nexus and advance towards the enemy base along three lanes guarded by turrets: top, middle, and bottom. Each team's base contains three "inhibitors", one behind the third tower from the center of each lane. Destroying one of the enemy team's inhibitors causes stronger allied minions to spawn in that lane, and allows the attacking team to damage the enemy Nexus and the two turrets guarding it. The regions in between the lanes are collectively known as the "jungle", which is inhabited by "monsters" that, like minions, respawn at regular intervals. Like minions, monsters provide gold and XP when killed. Another, more powerful class of monster resides within the river that separates each team's jungle. These monsters require multiple players to defeat and grant special abilities to their slayers' team. For example, teams can gain a powerful allied unit after killing the Rift Herald, permanent strength boosts by killing dragons, and stronger, more durable minions by killing Baron Nashor.</p>
            <p> Summoner's Rift matches can last from as little as 15 minutes to over an hour.Although the game does not enforce where players may go, conventions have arisen over the game's lifetime: typically one player goes in the top lane, one in the middle lane, one in the jungle, and two in the bottom lane.Players in a lane kill minions to accumulate gold and XP (termed "farming") and try to prevent their opponent from doing the same. A fifth champion, known as a "jungler", farms the jungle monsters and, when powerful enough, assists their teammates in a lane.</p>
        <h3>Noticeable differences with DotA :</h3>
            <ul><li>The side lanes do not have varying lengths: they are uniform in length. The turret placement is also exactly equal.</li>
            <li>The secret shop does not exist in Summoner's Rift.</li>
            <li>Leaving will not grant allies control of your champion.</li>
            <li>Roshan (a legendary neutral creep from DotA) is replaced by two different legendary creeps on opposite sides of the map: Dragon Dragon and BaroNashor Baron Nashor.</li>
            <li>Removal of the Deny function.</li>
            <li>Brush scattered around the map - small pockets of instant stealth that can be used for hiding, running and confusing opponents.</li>
            <li>Dying in Summoner's Rift does not tax gold or experience.</li>
            <li>The many shops have become merged into one, with a simple layout and recommended items for beginners.</li>
            <li>Minions cannot be pulled very far from their lane: After a short distance, they return to their lane.</li>
            <li>You cannot buyback (instant revival at the cost of gold).</li>
            <li>Additional buildings removed: only the turrets, Nexus, and inhibitors (or barracks) remain.</li></ul>
            
                <div className="Game">
                    <img src={Grieta1} alt="gif2" ></img>
                    <img src={Grieta2} alt="gif3" ></img>
                    <img src={Grieta3} alt="gif4" ></img>
                </div>
            </div>
            <br></br>

            <div className="data" id="ARAM">
        <h2 id="ARAM">ARAM</h2>
            <p>ARAM, abbreviation of All Random, All Mid, is a game mode in League of Legends in a 5v5 format on the Howling Abyss icon Howling Abyss, where the objective is to destroy the opposing team's Nexus. The game includes an Reroll All random draft type, and a game that takes place only on one long lane (specifically referencing its resemblance to Summoner's Rift icon Summoner's Rift's middle lane). </p>

        <h3>Howling Abyss</h3>
            <p>The Howling Abyss is a bottomless crevasse located in the coldest, cruelest, part of the Freljord. Legends say that, long ago, a great battle took place here on the narrow bridge spanning the chasm. No one remembers who fought here, or why, but it is said that if you listen carefully to the wind you can still hear the cries of the vanquished tossed howling into the Abyss. There is only one lane in the Howling Abyss. You cannot Recall Recall or heal in base, but there are heals near the turrets at the edge of the map.</p>
            <img src={Map3} alt="Map3"/>
            <ul><li>There is only one lane.</li>
            <li>There are only two turrets protecting the inhibitor and two turrets protecting the nexus.</li>
            <li>Champions deal 0% − 25% (based on minutes) bonus damage to structures after 18:00.</li>
            <li>There is a base gate that blocks champions from leaving the base for the first 15 seconds.</li>
            <li>After these base gates have fallen, there will be frost-gates that are spawned in front of each team's Nexus.</li>
            <li>Champions can interact with these gates to initiate Frostgate Warp, causing them to Channeling icon channel for 0.75 seconds. Upon completion, they Da dash to the other side of the gate over 2.25 seconds, during which they are Untargetable icon untargetable and Lockout icon 2 unable to act. If the channel is interrupted, the gate will be placed on a 1.5-second cooldown. They may also choose a location to dash another time up to a distance away from the gate upon reaching their destination. Frost-gates have a 15-second cooldown after being activated.</li>
            <li>Leading gates cannot be interacted with and are located in front of the outer turret.</li>
            <li>If the outer turret is destroyed, the leading gate is relocated to the front of the inhibitor turret.</li>
            <li>Frost-gates on both sides of the map can be interacted with by champions regardless of which team they are on.</li>
            <li>There are 4 health relics positioned in front of the outer towers, with 2 relics on each team's respective side of the map.</li>
            <li>Restores 8% of missing health and 8% of missing mana to the champion who picks up the relic.</li>
            <li>After being picked up, triggers a beam of light to strike the ground after 2.5 seconds, restoring 16% of missing health and 16% of missing mana for alchampions within.</li>
            <li>Recall Recall is disabled, however, the channel's animation will still play.</li>
            <li>The fountain does not grant any restoration effects to champions.</li>
            <li>The shop will be disabled after champions have moved too far away from the fountain. It will be enabled after death.</li>
            <li>The range at which the shop becomes disabled is a slight distance away from the Nexus turrets.</li>
            <li>Unanimous Surrender is enabled at 8:00.</li>
            <li>Surrender is enabled at 12:00.</li></ul>
            <div className="Game">
            <img src={Aram1} alt="gif5" ></img>
            <img src={Aram2} alt="gif6" ></img>
            <img src={Aram3} alt="gif7" ></img>
            </div>
            </div>
            <br></br>
            <div className="data">
        <h2 id="Twisted">Twisted Treeline</h2>
        <img src={Map2} alt="Map2"/>
            <p>The Twisted Treeline was a 3v3 Field of Justice that was geared towards quicker gameplay as opposed to that of Summoner's Rift. The general time for games on this map was 20–35 minutes. The map featured a smaller field, with only two lanes and one legendary monster known as Vilemaw.</p>
        <h3>Features</h3>
            <ul><li>Two lanes to fight your way to the enemy base.</li>
            <li>A jungle populated by neutral monsters of varying degrees of toughness, the toughest of which provide buffs and gold for yo whole team.</li>
            <li>Powerful turrets defend key areas on the map. You must confront these in addition to your enemies if you are to make heway toward victory.</li>
            <li>Two bases at opposite corners of the map, populated by a shop, a Nexus and one turret to defend the nexus.</li>
            </ul>
            <div className="Game">
            <img src={Bosque2} alt="gif8" ></img>
            <img src={Bosque1} alt="gif9" ></img>
            <img src={Bosque3} alt="gif10" ></img>
            </div>
            </div>
            <br></br>
        <hr></hr>
        <h2 id="References">References:</h2>
            <ul><a href="https://leagueoflegendsoficial.fandom.com/es/wiki/Wiki_League_of_legends_oficial">
            https://leagueoflegendsoficial.fandom.com/es/wiki/Wiki_League_of_legends_oficial</a></ul>
            <ul><a href="https://es.wikipedia.org/wiki/League_of_Legends">https://es.wikipedia.org/wiki/League_of_Legends</a></ul>
            <ul><a href="https://www.techradar.com/how-to/league-of-legends-a-beginners-guide">https://www.techradar.com/how-to/league-of-legends-a-beginners-guide</a></ul>
        </div>
        <div><Footer/></div>
        </div>
    )   
}

export default Htp;