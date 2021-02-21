import React from 'react'
import { Link } from "react-router-dom";

function playing(props) {
    console.log(props)
    return (
        <div className="playing">
            <div>{props.match.params.song}</div>
        </div>
    )
}

export default playing
