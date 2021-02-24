import React, { useContext } from 'react'
import { SongContext } from '../SongContext';
import {Link} from 'react-router-dom'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import ArrowBackIosSharpIcon from '@material-ui/icons/ArrowBackIosSharp'
import Song from './Song.js';

function FullPlayer() {
    const [songs] = useContext(SongContext);

    return (
        <div className='player_container'>
            <div className='top_colour'>

            </div>
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
                <div className='songs_top'>
                    <PlayCircleFilledIcon className='songs_icons'/>
                    <FavoriteBorderIcon className='songs_icons'/>
                    <MoreHorizIcon className='songs_icons'/>

                </div>
                <div className='songs_list'>
                    <div className='song'>
                        <text className="title"># TITLE</text>
                        <text>ARTIST</text>
                        <text>DURATION</text>
                        <text>DURATION</text>
                    </div>  
                    {songs.map(song => (
                            <Song 
                                id={song.id} 
                                name={song.name} 
                                imageUrl={song.imageUrl} 
                                artist={song.artist} 
                                duration={song.duration}
                            />
                    ))}

                </div>
            </div>
        </div>
    )
}

export default FullPlayer
