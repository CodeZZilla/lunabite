import { Switch, Route } from "react-router-dom";
import Header from "./Components/LandingPage/Header/Header";
import Landing from "./Components/LandingPage/Landing";
import Profile from "./Components/Profile/Profile";
import CreateNewNFT from "./Components/CreateNewNFT/CreateNewNFT";

export const useRoutes = (userType) => {
    return (
        <div className="App">
            <Header/>
            <Switch>
                <Route exact path='/'>
                    <Landing/>
                </Route>
                <Route path='/profile'>
                    <Profile name="Valentyn Kit" nickname="hi_vel"/>
                </Route>
                <Route path='/create-new-nft'>
                    <CreateNewNFT/>
                </Route>
            </Switch>
        </div>
    );
}
