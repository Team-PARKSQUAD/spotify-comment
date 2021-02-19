import React from 'react'

function sidebar() {
    return (
        <div className="sidebar">
            <img className='sidebar_logo' alt='' src='https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png'/>
            <li className='list_items'>
                Home
            </li>
            <li className='list_items'>
                Search
            </li>
            <li className='list_items'>
                Your Library
            </li>
        </div>
    )
}

export default sidebar
