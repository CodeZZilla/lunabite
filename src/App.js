import './App.css';
import {observer} from "mobx-react-lite";
import {Route, Routes} from "react-router-dom";
import {useRoutes} from "./routes";
import CommonStore from "./Store/CommonStore";
import Landing from "./Components/LandingPage/Landing"
import Profile from "./Components/Profile/Profile";
import CreateNewNFT from "./Components/CreateNewNFT/CreateNewNFT";
import ItemPageOwner from "./Components/ItemPageOwner/ItemPageOwner";

let data = {
    name: "YarikCoin",
    collectionOf: "Kanchelaria",
    views: 10,
    likes: 3232,
    owner: "Sifon"
}

const App = observer(() => {
    return (
        <>
            {CommonStore.token !== null ?
                useRoutes(CommonStore.token.split("___")[1]) :
                <div className="App">
                    <Routes>
                        <Route path='/' element={<Landing/>}/>
                        <Route path='/profile' element={<Profile name="Valentyn Kit" nickname="hi_vel"/>}/>
                        <Route path='/create-new-nft' element={<CreateNewNFT/>}/>
                        <Route path='/item-owner' element={<ItemPageOwner {...data}/>}/>
                    </Routes>
                </div>
            }
        </>

    );
})

export default App;
