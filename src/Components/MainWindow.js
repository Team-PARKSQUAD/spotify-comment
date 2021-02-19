import React from 'react'
import Sidebar from "./sidebar.js"
import Player from "./player.js"
import Albums from "./albums.js"

function MainWindow() {
    return (
        <div className="mainWindow">
            <div className="container">
                <Sidebar/>
                <Albums/>
            </div>
            <Player/> 
        </div>
    )
}

export default MainWindow
