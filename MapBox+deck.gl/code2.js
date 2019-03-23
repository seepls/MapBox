import {IconLayer} from '@deck.gl/layers';
import {MapboxLayer} from '@deck.gl/mapbox';
import mapboxgl from 'mapbox-gl';

mapbox.gl.accessToken = '<access token>';
const map = new mapboxgl.Map({
  container: 'map';
  style:'mapbox : //styles/mapbox/____';
  center: [ , ],
  zoom: ,
});

// mapbox - compatible deck.gl layer 

const myDeckLayer = new MapboxLayer({
  id: 'my-scatterplot',
  type: IconLayer,
  data: [
     { position : [] , size : [] }
  ],
  getPosition: d => d.position,
  getRadius: d => d.size,
  getColor:[r,g,b]
});

map.on('load'()=>{
  map.addLayer(myDeckLayer, 'incident-label');
});


     
    
