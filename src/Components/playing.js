import React from 'react'
// import { Link } from "react-router-dom";
import songData from "./data/songData.json";

import ChatSection from './ChatSection';
import {auth} from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import firebase from 'firebase/app';


function playing(props) {

    const [user] = useAuthState(auth);

    console.log(songData)
    var songInfo = {}
    songData.map((d)=>{
        if (d["name"] === props.match.params.song){
            songInfo = {
                "name": d.name,
                "artist": d.artist,
                "duration": d.duration,
                "imageUrl": d.imageUrl
            }
        }
        return 0;
    })
    console.log(songInfo)
    return (
        <div className="playing">
            
            <div>{songInfo.name}</div>
            <div>{songInfo.artist}</div>
            <div>{songInfo.duration}</div>
            <div>{songInfo.imageUrl}</div>

            <div className="ChatSection">
                <div className='header'>
                    <h1>Chat Section</h1>
                    <SignOut />
                </div>
                <div className='section'>
                    {user ? <ChatSection/> : <SignIn />}
                </div>
            </div>

        </div>
    )
}

function SignIn() {

    const signInWithGoogle = () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider);
    }
    return (
      <button onClick={signInWithGoogle}>Sign in with Google</button>
    )
}
  
function SignOut() {
    return auth.currentUser && (
      <button onClick={() => auth.signOut()}>Sign Out</button>
    )
}
  

export default playing
