import { useSelector,useDispatch } from "react-redux";
import "./Detail.css"
import React ,{ useState , useEffect ,useMemo} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Line } from 'rc-progress';
import IndexDetail from "../Components/IndexDetail";
import { addFav, delFav ,loading, ready} from "../Components/Redux/Actions";
import gif from "../lol/Gif/Poro.gif"
import gif2 from "../lol/Gif/Poro2.gif"
import gif3 from "../lol/Gif/Poro3.gif"

// ========== Img COL1 ==================
const squareImages = require.context('../lol/loading', false, /\.(jpg)$/);
const imageMap = squareImages.keys().reduce((acc, key) => {
  const champId = key.replace(/^\.\/(.*)\.jpg$/, '$1');
  acc[champId] = squareImages(key);
  return acc;
}, {});

//========= Carrousel Col2 ============
const skinsImages = require.context('../lol/Skins', false, /\.(jpg)$/);

function Col2({ championName }) {
const skinImageFiles = skinsImages.keys();
  const championSkinImages = skinImageFiles
    .filter((filename) => filename.includes(championName))
  
    const settings = {
        dots: true,            
        infinite: true,        
        speed: 500,            
        slidesToShow: 1,       
        slidesToScroll: 1,     
        autoplay: true,        
        autoplaySpeed: 2000, 
        arrows: true,  
      };

  return (
    <Slider {...settings}>
        {championSkinImages.map((filename, index) => (
          <div key={index}>
            <img src={skinsImages(filename)} alt={championName}  className="Skins"/>
          </div>
        ))}
      </Slider>
    );
  }

  //  ====== STATS Col3 ========
function MyProgressBar({ percent }) {return <Line percent={percent} strokeWidth="2" strokeColor="#FF2019" />;} //Ataque
function MyProgressBar2({ percent }) {return <Line percent={percent} strokeWidth="2" strokeColor="#1843E3" />;} //Def
function MyProgressBar3({ percent }) {return <Line percent={percent} strokeWidth="2" strokeColor="#19FFE3" />;} //Magia
function MyProgressBar4({ percent }) {return <Line percent={percent} strokeWidth="2" strokeColor="#FFF119" />;} //Diff

 //========= Attacks ============
    
const attacksImages = require.context('../lol/Attacks', false, /\.(png)$/);

const AttackImg = attacksImages.keys().reduce((acc, key) => {
const champId = key.replace(/^\.\/(.*)\.png$/, '$1');
  acc[champId] = attacksImages(key);
  return acc;
  }, {});


//  =========================== DETAIL  ==========================

function Detail (){

    const dataDetail = useSelector((state)=>state.detail);
    const isLoading = useSelector((state) => state.loading);
    const data = useMemo(() => {
      return Array.isArray(dataDetail) ? dataDetail : [];
    }, [dataDetail]);
    
    //========== Favs: ============

    const [isFav, setIsFav] = useState(false);
        const dispatch = useDispatch();
        const listFavorites = useSelector((state) => state.favorites);
      
      // console.log(data)
        useEffect(() => {
          const favoritesArray = Object.values(listFavorites);
          const isInFavorites = favoritesArray.some((fav) => fav.id === data[0].id);
          if (isInFavorites) setIsFav(true);
        }, [listFavorites, data]);
      
        
        function handleFavorite() {
          setIsFav((prevIsFav) => !prevIsFav);
      
          if (isFav) {
            console.log(data[0].id)
            dispatch(delFav(data[0].id));
          } else {
            dispatch(addFav(data[0].id));
          }
        }
        //========LOADER ======
        let Poro1 = gif
        let Poro2 = gif2
        let Poro3 = gif3
        const loader = () => {
            dispatch(loading());
        
            setTimeout(() => {
            dispatch(ready());
            }, 500);
        };
        
        useEffect(() => {
            loader();
        }, []);

    return (
      <div>
        <IndexDetail/>
        
        { isLoading 
        ? (<div className="poroL"><img src={Poro1} alt="poro1"/><img src={Poro3} alt="poro2"/><img src={Poro2} alt="poro3"/></div>) 
        : (<div className="detail">
                {/* ============ Campeon ========== */}
            <div className="Col1">
              {data.map((c)=>(
                <div key={c.id}>
                  <h1>{c.name}
                  {/* ================ Favs ===========*/}
                    { isFav ? (<button onClick={handleFavorite}  className="FavsOn" >❤️</button>) : (
                      <button onClick={handleFavorite}  className="FavsOff"> ♥ </button>  ) }
                      </h1>
                  <h2>{c.title}</h2>
                  <p>{c.blurb}</p>
                  <img src={imageMap[c.id+"_0"]} alt={c.name}></img>
                </div>
                ))}
            </div>

                {/* ============ Skins ========== */}
            <div className="Col2">
                <h1>Skins</h1>
                {data.map((c)=>(
                <Col2 championName={c.id}/>))}
            </div>

                 {/* ============ Stats ========== */}
            <div className="Col3">
              <h1>Stats</h1>
              {data.map((c)=>(
                    <div className="Stats">
                      <h3>Attack</h3>
                      <MyProgressBar percent={c.info.attack*10} />
                      <br></br>
                      <h3>Defense</h3>
                      <MyProgressBar2 percent={c.info.defense*10} />
                      <br></br>
                      <h3>Magic</h3>
                      <MyProgressBar3 percent={c.info.magic*10} />
                      <br></br>
                      <h3>Difficulty</h3>
                      <MyProgressBar4 percent={c.info.difficulty*10} />
                        <div className="Attacks">
                            <br/>
                            <hr/>
                            <h1>Attack moves</h1>
                            <h4>Q<img src={AttackImg[c.id+"Q"]} alt={c.name}/></h4>
                            <h4>W<img src={AttackImg[c.id+"W"]} alt={c.name}/></h4>
                            <h4>E<img src={AttackImg[c.id+"E"]} alt={c.name}/></h4>
                            <h4>R<img src={AttackImg[c.id+"R"]} alt={c.name}/></h4>
                            <h4>Passive <img src={AttackImg[c.id+"_Passive"]} alt="Not Passive"/></h4>
                            <hr/>
                            <h1>Tags</h1>
                            {c.tags ? (
                              c.tags
                                .replace(/[{}]/g, '')
                                .split(',') 
                                .map((tag, index, array) => (
                                  <span key={index}>{tag}{index < array.length - 1 ? ' & ' : ''}</span>
                                ))
                            ) : (
                              <span>Not available</span>
                            )}
                          </div>
                    </div>
            ))}
            </div>
        </div>)}
  </div>
    )
}

export default Detail;