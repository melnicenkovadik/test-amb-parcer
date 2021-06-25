import React from "react";
import './App.css'
import {RenderPage} from "./pages/RenderPage";
import {MainPage} from "./pages/MainPage";
import {BrowserRouter as Router, Route, Switch,} from "react-router-dom";

function App() {
    return (
        <div className={'App'}>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <MainPage/>
                    </Route>
                    <Route path="/render-page">
                        <RenderPage/>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App;
