import React from 'react';
import './App.css';
import MainWindow from "./Components/MainWindow.js";
import { SongProvider} from './SongContext';
import "./Styles/main.scss";

function App() {
  return (
    <SongProvider>
      <div className="App">
        <MainWindow />
      </div>
    </SongProvider>
  );
}

export default App;
