import React from 'react';
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
function player() {
    return (
        <div className="player">
            <div className="player_left">
                <h3>Playing song</h3>
                <p>Artist name</p>
            </div>
            <div className="player_center">
                <div><SkipPreviousIcon/></div>
                <div><PlayCircleFilledWhiteIcon/></div>
                <div><SkipNextIcon/></div>
                <div>Playing</div>
            </div>
            <div className="player_right">
                <div>Logo</div>
            </div>
        </div>
    )
}
export default player
