import React from 'react'
// import useState from 'react'
import {Link} from 'react-router-dom'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
// import FavoriteIcon from '@material-ui/icons/Favorite';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import ArrowBackIosSharpIcon from '@material-ui/icons/ArrowBackIosSharp'
// import player from './player';

function FullPlayer() {
    // const player = (song) => {
    //     console.log(song)
    // }
    // const [song,setSong] = useState("")
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
                        <text># TITLE</text>
                        <text>ALBUM</text>
                        <text>DATE ADDED</text>
                        <text>DURATION</text>
                    </div>
                    <Link to="/playing/song1">
                        <div className='song'>
                            <text>Song 1</text>
                            <text>Album 1</text>
                            <text>3 days ago</text>
                            <text>3:38</text>
                        </div>
                    </Link>
                    <Link to="/playing/song2">
                        <div className='song'>
                            <text>Song 2</text>
                            <text>Album 2</text>
                            <text>3 days ago</text>
                            <text>3:18</text>
                        </div>
                    </Link>
                    <Link to="/playing/song3">
                        <div className='song'>
                            <text>Song 3</text>
                            <text>Album 3</text>
                            <text>1 days ago</text>
                            <text>3:23</text>
                        </div>
                    </Link>
                    <Link to="/playing/song4">
                        <div className='song'>
                            <text>Song 4</text>
                            <text>Album 4</text>
                            <text>3 days ago</text>
                            <text>2:38</text>
                        </div>
                    </Link>
                    <Link to="/playing/song5">
                        <div className='song'>
                            <text>Song 5</text>
                            <text>Album 5</text>
                            <text>3 days ago</text>
                            <text>3:10</text>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default FullPlayer
