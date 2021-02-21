import React from 'react'
import Sidebar from "./sidebar.js"
import Player from "./player.js"
import Albums from "./albums.js"
import FullPlayer from "./FullPlayer.js"
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import player from './player.js';
import Playing from "./playing";

function MainWindow() {
    return (
        <Router>
            <Switch>
                <Route path="/fullPlayer">
                    <div className="mainWindow">
                        <div className="container">
                            <Sidebar/>
                            <FullPlayer/>
                        </div>
                        <Player/> 
                    </div>
                </Route>
                <Route path="/playing/:song" render={(props)=> <div className="mainWindow">
                        <div className="container">
                            <Sidebar/>
                            <Playing {...props}/>
                        </div>
                        <Player/> 
                    </div>}>
                    {/* <div className="mainWindow">
                        <div className="container">
                            <Sidebar/>
                            <Playing {...props}/>
                        </div>
                        <Player/> 
                    </div> */}
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
