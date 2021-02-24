import React , {useContext} from 'react'
import { SongContext } from '../SongContext';
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
    const [songs] = useContext(SongContext);
    const id = window.location.href.split("/")
    var selectedSong
    songs.map(song=>{
        if (song.id == id[id.length-1]){
            selectedSong = song
        }
    })
    console.log(selectedSong)
    return (
        <div className="player">
            <div className="player_left">
                <img src={selectedSong ? selectedSong.imageUrl : "thumbnail.jpeg"} alt="thumbnail"/>
                <div className="info">
                    <p className="title">{selectedSong ? selectedSong.name : "Filhaal"}</p>
                    <p className="artist">{selectedSong ? selectedSong.artist : "B Praak"}</p>
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
