import React from 'react'
import { Link } from 'react-router-dom';

function Song({id, name, artist, duration}) {
    return (
        <div className='song' >
            <Link to={"/playing/" + id}>
                <text>{name}</text>
            </Link>
            <text>{artist}</text>
            <text>{duration}</text>
            <text>{duration}</text>
        </div>
    )
}

export default Song
