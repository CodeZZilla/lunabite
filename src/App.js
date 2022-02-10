import './App.css';
import {observer} from "mobx-react-lite";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {useRoutes} from "./routes";
import CommonStore from "./Store/CommonStore";
import Landing from "./Components/LandingPage/Landing"
import Header from "./Components/LandingPage/Header/Header";
import Profile from "./Components/Profile/Profile";
import CreateNewNFT from "./Components/CreateNewNFT/CreateNewNFT";
import ItemPageOwner from "./Components/ItemPageOwner/ItemPageOwner";

let data = {
    name:"YarikCoin",
    collectionOf:"Kanchelaria",
    views:10,
    likes:3232,
    owner:"Sifon"
}

const App = observer(() => {
    return (
        <Router>
            <Header/>
            {CommonStore.token !== null ?
                useRoutes(CommonStore.token.split("___")[1]):
                <div className="App">
                    <Route exact path='/'>
                        <Landing/>
                    </Route>
                    <Route path='/profile'>
                        <Profile name="Valentyn Kit" nickname="hi_vel"/>
                    </Route>
                    <Route path='/create-new-nft'>
                        <CreateNewNFT/>
                    </Route>
                    <Route path='/item-owner'>
                        <ItemPageOwner {...data}/>
                    </Route>
                </div>

            }
        </Router>
    );
})

export default App;
