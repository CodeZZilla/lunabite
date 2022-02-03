import './App.css';
import {observer} from "mobx-react-lite";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {useRoutes} from "./routes";
import CommonStore from "./Store/CommonStore";
import Header from "./Components/LandingPage/Header/Header";
import Home from "./Components/LandingPage/Home/Home";
import Slider from 'react-styled-carousel';
import SliderStyled from "./Components/LandingPage/Slider/SliderStyled";

const App = observer(() => {
    return (
        <Router>
            {CommonStore.token !== null ?
                useRoutes(CommonStore.token.split("___")[1]):
                <div className="App">
                    <Route path='/'>
                        <Header/>
                        <Home/>
                        <SliderStyled/>

                    </Route>
                </div>
            }
        </Router>
    );
})

export default App;
