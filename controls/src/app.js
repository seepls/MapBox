import React, {Component} from 'react';
import {render} from 'react-dom';
import MapGL, {Marker, Popup, NavigationControl, FullscreenControl} from 'react-map-gl';

import ControlPanel from './control-panel';
import IncidentHash from './incident-geohash'; //city-pin -> incidentGeohash
import IncidentInfo from './Incident-info'; // City-Info -> Incident-info

import INCIDENTS from '../../data/incident.json'; // CITIES- >INCIDENTS  // data/cities

const TOKEN = 'pk.eyJ1Ijoic21yaXRpdGl3YXJpIiwiYSI6ImNqdDQ2MXE4MjB0OG80NGxzdXoxYWVjaGoifQ.QiQvIVVZH0Zm1_PTNSpGUg';  // added my token here 

const fullscreenControlStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  padding: '10px'
};

const navStyle = {
  position: 'absolute',
  top: 36,
  left: 0,
  padding: '10px'
};

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        latitude: 37.785164,
        longitude: -100,
        zoom: 3.5,
        bearing: 0,
        pitch: 0
        // adding other information 
      },
      popupInfo: null
    };
  }

  _updateViewport = (viewport) => {
    this.setState({viewport});
  }

  _renderIncidentMarker = (incident, index) => { 
    return (
      <Marker 
        key={`marker-${index}`}
        longitude={incident.longitude}  
        latitude={incident.latitude} > 
        <IncidentHash size={20} onClick={() => this.setState({popupInfo: incident})} /> 
      </Marker>
    );
  }

  _renderPopup() {
    const {popupInfo} = this.state;

    return popupInfo && (
      <Popup tipSize={5}
        anchor="top"
        longitude={popupInfo.longitude}
        latitude={popupInfo.latitude}
        closeOnClick={false}
        onClose={() => this.setState({popupInfo: null})} >
        <IncidentInfo info={popupInfo} /> 
      </Popup>
    );
  }

  render() {

    const {viewport} = this.state;

    return (
      <MapGL
        {...viewport}
        width="100%"
        height="100%"
        mapStyle="mapbox://styles/mapbox/dark-v9"
        onViewportChange={this._updateViewport}
        mapboxApiAccessToken={TOKEN} >

        { INCIDENTS.map(this._renderIncidentMarker) } 

        {this._renderPopup()}

        <div className="fullscreen" style={fullscreenControlStyle}>
          <FullscreenControl />
        </div>
        <div className="nav" style={navStyle}>
          <NavigationControl onViewportChange={this._updateViewport} />
        </div>

        <ControlPanel containerComponent={this.props.containerComponent} />

      </MapGL>
    );
  }

}

export function renderToDom(container) {
  render(<App/>, container);
}
