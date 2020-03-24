import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Map, Marker } from 'react-amap';

function App() {
  return (
      <div style={{ width: '100%', height: '100%', position: 'fixed' }}>
          <Map amapkey={"f969d73361ac79af3ca61ac140a75719"} zoom={16}>
              <Marker />
          </Map>
      </div>
  );
}

export default App;
