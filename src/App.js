import React from "react";
import "./App.css";
import { Provider } from "unistore/react";
import { store } from "./store";
import Home from "./page/Home";
import Category from "./page/Category";
import Profile from "./page/Profile";
import Login from "./page/SignIn";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route path="/profile" component={Profile} />
                    <Route path="/:id" component={Category} />
                    <Route path="/login" component={Login} />
                    <Route path="/" component={Home} />
                </Switch>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
