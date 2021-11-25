import React from "react";
import Header from "./pages/sections/Header";
import Menu from "./pages/sections/Menu";
import HomePage from "./pages/HomePage";
import GalleryPage from "./pages/GalleryPage";
import AboutPage from "./pages/AboutPage";
import NewsPage from "./pages/NewsPage";
import Contacts from "./pages/Contacts";
import Footer from "./pages/sections/Footer";

import {BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
// import {Route,Switch} from "react-router";

function Main (){
    return(
        <Router>
            <div className="wrapper">
                <div className="content">
                    <Header/>
                    <Menu/>
                    <Switch>
                        <Route exact path="/">
                            <HomePage/>
                        </Route>
                        <Route exact path="/about" >
                            <AboutPage/>
                        </Route>
                        <Route exact path="/gallery" >
                            <GalleryPage/>
                        </Route>
                        <Route exact path="/contacts" >
                            <Contacts/>
                        </Route>
                        <Route exact path="/news" >
                            <NewsPage/>
                        </Route>
                    </Switch>
                </div>
                <Footer/>
            </div>
        </Router>
    )
}
export default Main;