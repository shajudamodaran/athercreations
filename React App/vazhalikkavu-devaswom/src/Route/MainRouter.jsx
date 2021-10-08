import React from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import About from '../Pages/About/About';
import History from '../Pages/History/History';
import Homepage from '../Pages/Home/Homepage';
import Offerings from '../Pages/Offerings/Offerings';
import Gallery from '../Pages/Photo Gallery/Gallery';



function MainRouter() {
    return (
        <Router>
            <Switch>

            <Route exact path="/">
                    <Homepage />
                </Route>

                <Route path="/about">
                    <About />
                </Route>

                <Route exact path="/gallery">
                    <Gallery />
                </Route>

                <Route exact path="/offerings">
                    <Offerings />
                </Route>



            </Switch>
        </Router>
    )
}

export default MainRouter
