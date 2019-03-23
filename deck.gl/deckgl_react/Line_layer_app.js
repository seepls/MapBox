import React   from 'react' ;
import DeckGL , {LineLayer} from 'deck.gl';
import {StaticMap} from 'react-map-gl'; // for adding base map
const MAPBOX_ACCESS_TOKEN = 'MAPBOX_ACCESS_TOKEN';

const viewState = {
  longitude: -120.1111,
  latitude: 37.7777,
  zoom: 13,
  pitch: 0,
  bearing: 0
};

const data = [{sourcePosition: [-120.1111, 37.7777], targetPosition: [-122.41669, 37.781]}];

// DeckGL react component
class App extends React.Component {
  render() {
    const layers = [
      new LineLayer({id: 'line-layer', data})
    ];

    return (
      <DeckGL initialViewState={initialViewState} layers={layers} >
        <MapView id="map" width="50%" controller={true}>
          <StaticMap mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN} />
        </MapView>
        <FirstPersonView width="50%" x="50%" fovy={50} />
      </DeckGL>
    );
  }
}
