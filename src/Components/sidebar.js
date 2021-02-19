import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import TocIcon from '@material-ui/icons/Toc';
import AddBoxIcon from '@material-ui/icons/AddBox';
import FavoriteIcon from '@material-ui/icons/Favorite';

function sidebar() {
    return (
        <div className="sidebar">
            <img className='sidebar_logo' alt='' src='https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png'/>

            <div className='list'>
                <li className='list_items'>
                    <HomeIcon className='list_icon' />
                    <text className='list_text'>Home</text>
                </li>
                <li className='list_items'>
                    <SearchIcon className='list_icon'/>
                    <text className='list_text'>Search</text>
                </li>
                <li className='list_items'>
                    <TocIcon className='list_icon'/>
                    <text className='list_text'>Your Library</text>
                
                </li>
            </div>

            <text className='playlist_text'>Playlists</text>

            <div className='list'>
                <li className='list_items'>
                    <AddBoxIcon className='list_icon' />
                    <text className='list_text'>Creat Playlist</text>
                </li>
                <li className='list_items'>
                    <FavoriteIcon className='list_icon'/>
                    <text className='list_text'>Liked Songs</text>
                </li>
            </div>

        </div>
    )
}

export default sidebar
