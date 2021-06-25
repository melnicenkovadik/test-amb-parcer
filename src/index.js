import React, {StrictMode} from "react";
import ReactDOM from "react-dom";


import App from "../src/App.js";
import {applyMiddleware, createStore} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import renderViewReducer from "./stores/renderViewReducer";
import Header from "./components/Header";
import Footer from "./components/Footer";

const store = createStore(
    renderViewReducer,
    applyMiddleware(thunk)
)
const rootElement = document.getElementById("root");
ReactDOM.render(
    <StrictMode>
        <Provider store={store}>
            <Header/>
            <App/>
            <Footer/>
        </Provider>
    </StrictMode>,
    rootElement
);
