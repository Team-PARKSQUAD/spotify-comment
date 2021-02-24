import React, {useState, createContext} from "react";

export const SongContext = createContext();

export const SongProvider = props => {
    const [songs, setSongs] = useState([
        {
            id:"song1",
            name: "We Don't Talk Anymore",
            imageUrl:"https://i1.sndcdn.com/artworks-000189515316-czpf98-t500x500.jpg",
            artist:"Charlie Puth ",
            duration: " 3:23 ",
            color: "#00b7ff"
        },
        {
            id:"song2",
            name:"Laare",
            imageUrl:"https://a10.gaanacdn.com/gn_img/albums/qa4WEqqWP1/a4WEA8GVWP/size_xxl_1575464055.webp",
            artist:"Maninder Butter ",
            duration: " 2:23 ",
            color: "#ff7600"
        },
        {
            id:"song3",
            name:"FRIENDS",
            imageUrl:"https://upload.wikimedia.org/wikipedia/en/9/9d/Marshmello_and_Anne-Marie_Friends.jpg",
            artist:"Marshmello ",
            duration: " 3:16 ",
            color: "#ff006a"
        },
        {
            id:"song4",
            name:"Wake Me up When September Ends",
            imageUrl:"https://e-cdns-images.dzcdn.net/images/cover/c14f698c45f445a5ba9dba395f26d642/350x350.jpg",
            artist:"Green Day ",
            duration: " 3:45 ",
            color: "#ff0000"
        },
        {
            id:"song5",
            name:"Wake Me up When September Ends",
            imageUrl:"https://e-cdns-images.dzcdn.net/images/cover/c14f698c45f445a5ba9dba395f26d642/350x350.jpg",
            artist:"Green Day ",
            duration: " 3:45 ",
            color: "#ff0000"
        }

    ]);
    return(
        <SongContext.Provider value={[songs, setSongs]}>
            {props.children}
        </SongContext.Provider>
    );
}