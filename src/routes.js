import { Switch, Route } from "react-router-dom";
import Header from "./Components/LandingPage/Header/Header";

export const useRoutes = (userType) => {
    return (
        <div className="App">
            <Header/>
            <Switch>
                <Route path='/home'>
                    <h1>Hello world</h1>
                </Route>
            </Switch>
        </div>
    );
}
