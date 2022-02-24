import './App.css';
import {observer} from "mobx-react-lite";
import {Route, Routes} from "react-router-dom";
import {useRoutes} from "./routes";
import CommonStore from "./Store/CommonStore";
import Landing from "./Components/LandingPage/Landing"
import Profile from "./Components/Profile/Profile";
import CreateNewNFT from "./Components/CreateNewNFT/CreateNewNFT";
import ItemPageOwner from "./Components/ItemPageOwner/ItemPageOwner";
import Header from "./Components/LandingPage/Header/Header";
import React from "react";
import ExplorePage from "./Components/Explore/ExplorePage";

let data = {
    name: "YarikCoin",
    collectionOf: "Kanchelaria",
    views: 10,
    likes: 3232,
    owner: "Sifon"
}

const App = observer(() => {
    return (
        <div className="App">
            <Header/>
            {CommonStore.token !== null ?
                useRoutes(CommonStore.token.split("___")[1]) :
                <Routes>
                    <Route path='/' element={<Landing/>}/>
                    <Route path='/profile' element={<Profile name="Valentyn Kit" nickname="hi_vel"/>}/>
                    <Route path='/create-new-nft' element={<CreateNewNFT/>}/>
                    <Route path='/item-owner' element={<ItemPageOwner {...data}/>}/>
                    <Route path='/explore' element={<ExplorePage/>}/>
                </Routes>
            }
        </div>
    );
})

export default App;
