import React from 'react';
import ReactDOM from 'react-dom';
import Song from './components/song/Song';
import Artista from './components/artist/Artista'
import './index.css';

ReactDOM.render(
    <div >
      
      <Song />
    
      <Artista />
    </div>,
  document.getElementById('root')
);
