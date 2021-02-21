import React from 'react'
import ArrowBackIosSharpIcon from '@material-ui/icons/ArrowBackIosSharp';
import {Link} from "react-router-dom";

function FullPlayer() {
    // const player = (song) => {
    //     console.log(song)
    // }
    return (
        <div className='player_container'>
            <div className='top'>
                <Link to="/"><ArrowBackIosSharpIcon fontSize="large" className="backBtn"/></Link>
                <div className='song_image_area'>
                    <img className='song_image'  alt='' src='./assets/ab67706f0000000234097d638e927188c161a938.jpeg'/>
                </div>
                <div className='song_info'>
                    <text className='album_title'>Indie India</text>
                    <text className='album_description' >The best of the country's independent artists. Cover: The Yellow Diary.</text>
                    <text className='album_likes' >126,114 likes - 76 songs, 4 hr 44 min</text>
                </div>

            </div>
            <div className='songs'>
                <Link to="/player/Song1" >Song1</Link>
                <h2>Song</h2>
                <h2>Song</h2>
                <h2>Song</h2>
            </div>
        </div>
    )
}

export default FullPlayer
