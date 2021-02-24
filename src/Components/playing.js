import React , {useContext} from 'react'
import { SongContext } from '../SongContext';
import ChatSection from './ChatSection';
import {auth} from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import firebase from 'firebase/app';


function playing() {
    const [user] = useAuthState(auth);
    const [songs] = useContext(SongContext);
    const name = window.location.href.split('/');
    const this_id = name[name.length-1];
    var i, song;
    for (i=0; i < songs.length ; i++) {
        if (songs[i].id === this_id) { song = songs[i];}
    }

    return (
        <div className="playing">
            <div className="playing_top" style={{backgroundImage: `linear-gradient(to bottom, ${song.color} ,rgb(41, 36, 36))`}}>
                <div className="playing_left">
                    <div className="thumbnail">
                        <img src={song.imageUrl} alt={song.name}/>
                    </div>
                    <div className="songInfo">
                        <h2>{song.name}</h2>
                        <p>
                            {song.artist} 
                            {song.duration}
                        </p>
                    </div>
                </div>
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
            <div className="playing_bottom">

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
