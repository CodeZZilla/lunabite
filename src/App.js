import './App.css';
import {observer} from "mobx-react-lite";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {useRoutes} from "./routes";
import CommonStore from "./Store/CommonStore";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";


const App = observer(() => {
    return (
        <Router>
            {CommonStore.token !== null ?
                useRoutes(CommonStore.token.split("___")[1]):
                <div className="App">
                    <Route path='/'>
                        <Header/>
                        <Home/>
                    </Route>
                </div>
            }
        </Router>
    );
})

export default App;
