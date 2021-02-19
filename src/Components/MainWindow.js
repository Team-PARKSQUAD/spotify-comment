import React from 'react'
import Sidebar from "./sidebar.js"
import Player from "./player.js"
import Albums from "./albums.js"
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function MainWindow() {
    return (
        <Router>
            <Switch>

                <Route path="/fullPlayer">
                    <Sidebar/>
                    <Albums/>
                </Route>

                <Route path="/"> 
                    <div className="mainWindow">
                        <div className="container">
                            <Sidebar/>
                            <Albums/>
                        </div>
                        <Player/> 
                    </div>
                </Route>

            </Switch>
        </Router>
    )
}

export default MainWindow
