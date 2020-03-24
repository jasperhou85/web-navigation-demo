import React, { Component } from 'react';
import logo from './logo.svg';
import { Map, Marker } from 'react-amap';

class AMap extends Component {

  state = {
    position: { longitude: 120, latitude: 32 }
  }

  render() {
    return (
      <div style={{ width: '100%', height: '100%', position: 'fixed' }}>

          <Map amapkey={"f969d73361ac79af3ca61ac140a75719"} center={this.state.position} zoom={12}>
              <Marker />
          </Map>
      </div>
  );

  }
  
}

export default AMap;
