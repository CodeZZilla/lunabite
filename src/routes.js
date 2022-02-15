import { Routes, Route } from "react-router-dom";
import Header from "./Components/LandingPage/Header/Header";
import Landing from "./Components/LandingPage/Landing";
import Profile from "./Components/Profile/Profile";
import CreateNewNFT from "./Components/CreateNewNFT/CreateNewNFT";
import ItemPageOwner from "./Components/ItemPageOwner/ItemPageOwner";

export const useRoutes = (userType) => {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path='/' element={<Landing/>}/>
                <Route path='/profile' element={<Profile name="Valentyn Kit" nickname="hi_vel"/>}/>
                <Route path='/create-new-nft' element={<CreateNewNFT/>}/>
            </Routes>
        </div>
    );
}
