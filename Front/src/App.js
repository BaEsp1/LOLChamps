import {Routes,Route} from "react-router-dom";
import './App.css'
import Lp from "./Views/Lp";
import Home from "./Views/Home";
import Hp from "./Views/Hp";
import Maps from "./Views/Maps";
import Champs from "./Views/Champs";
import Detail from "./Views/Detail";
import Favorites from "./Views/Favorite";
import Index from "./Components/Index";
import Footer from "./Components/Footer";
import { useLocation } from "react-router-dom";


function App () {
    const location = useLocation();

    return (
        <div>
        <div className='App'>
            {location.pathname !== "/" && !location.pathname.startsWith("/detail/") && (
                <Index />
            )}
        <Routes>
            <Route path='/' element={<Lp/>} name='Lp' key='Lp' />
            <Route path='/home' element={<Home/>} name='home' key='home' />
            <Route path='/howToPlay' element={<Hp/>} name='hp' key='hp' />
            <Route path='/maps' element={<Maps/>} name='maps' key='maps' />
            <Route path='/champs' element={<Champs/>} name='champs' key='champs' />
            <Route path='/detail/:id' element={<Detail/>} name='detail' key='detail' />
            <Route path='/favorites' element={<Favorites/>} name='favorites' key='favorites' />
        </Routes>
        </div>
        {location.pathname !== "/maps" && location.pathname !== "/howToPlay" && location.pathname !== "/favorites" ? <Footer/>:""}
        
        </div>
    )
}

export default App;