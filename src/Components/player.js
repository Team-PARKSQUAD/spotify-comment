import React from 'react';
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import QueueMusicIcon from '@material-ui/icons/QueueMusic';
import DevicesIcon from '@material-ui/icons/Devices';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';

function player() {
    return (
        <div className="player">
            <div className="player_left">
                <img src="./thumbnail.jpeg" alt="thumbnail"/>
                <div className="info">
                    <p className="title">Song Name</p>
                    <p className="artist">Artist</p>
                </div>
                <div><FavoriteBorderIcon fontSize="small"/></div>
            </div>
            <div className="player_center">
                <div><ShuffleIcon/></div>
                <div><SkipPreviousIcon/></div>
                <div className="playBtn"><PlayCircleFilledWhiteIcon style={{
                fontSize: 45 + "px"}}/></div>
                <div><SkipNextIcon/></div>
                <div><RepeatIcon/></div>
            </div>
            <div className="player_right">
                <QueueMusicIcon fontSize="small"/>
                <DevicesIcon fontSize="small"/>
                <VolumeUpIcon fontSize="small"/>
            </div>
        </div>
    )
}
export default player
