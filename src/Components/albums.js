import React from 'react'
import { Link } from "react-router-dom";

function albums() {
    return (
        <div className="albums">

            <Link to='/fullPlayer'>
                <div className='album_card'>
                    <img alt='' src='./assets/ab67706f0000000234097d638e927188c161a938.jpeg'></img>
                </div>
            </Link>

        </div>
    )
}

export default albums
