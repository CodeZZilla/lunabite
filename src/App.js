import './App.css';
import {observer} from "mobx-react-lite";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {useRoutes} from "./routes";
import CommonStore from "./Store/CommonStore";
import Landing from "./Components/LandingPage/Landing"

const App = observer(() => {
    return (
        <Router>
            {CommonStore.token !== null ?
                useRoutes(CommonStore.token.split("___")[1]):
                <div className="App">
                    <Route path='/'>
                        <Landing/>
                    </Route>
                </div>
            }
        </Router>
    );
})

export default App;
