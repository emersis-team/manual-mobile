import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import Home from "./components/content/Home";
import SoloTextoComponent from "./components/content/SoloTextoComponent";
import TextoImagenComponent from "./components/content/TextoImagenComponent";
import TextoVideoComponent from "./components/content/TextoVideoComponent";
import history from './History';

export default class Routes extends Component {

    render() {

        return (

            <Router history={history}>

                <Switch>

                    <Route path="/" exact component={Home} />
                    <Route path="/capitulo1" component={SoloTextoComponent} />
                    <Route path="/capitulo2" component={TextoImagenComponent} />
                    <Route path="/capitulo3" component={TextoVideoComponent} />

                </Switch>

            </Router>

        )

    }

}