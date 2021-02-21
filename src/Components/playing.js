import React from 'react'
import { Link } from "react-router-dom";
import songData from "./data/songData.json";

function playing(props) {
    console.log(songData)
    var songInfo = {}
    songData.map((d)=>{
        if (d["name"] == props.match.params.song){
            songInfo = {
                "name": d.name,
                "artist": d.artist,
                "duration": d.duration,
                "imageUrl": d.imageUrl
            }
        }
    })
    console.log(songInfo)
    return (
        <div className="playing">
            <div>{songInfo.name}</div>
            <div>{songInfo.artist}</div>
            <div>{songInfo.duration}</div>
            <div>{songInfo.imageUrl}</div>
        </div>
    )
}

export default playing
