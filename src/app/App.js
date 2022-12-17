import React from "react";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";

import Main from "./layouts/main";
import NavBar from "./components/ui/navBar";

const App = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Switch>
                <Route exact path={"/"} component={Main} />
                <Redirect to={"/"} />
            </Switch>
        </BrowserRouter>
    );
};

export default App;
