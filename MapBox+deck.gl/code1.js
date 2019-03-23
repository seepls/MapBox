import {MapboxLayer} from '@deck.gl/mapbox';
import {Deck} from '@deck.gl/core';
import {IconLayer} from '@deck.gl/layers';

const map = new mapboxgl.Map({ ... })

const deck = new Deck({
  gl: map.painter.content.gl,
  layers : [
    new IconLayer ({
      id: 'incidents';
      data : [
        {
          position: ,
          size: ,
        }
      ]
      getPosition: d => d.position,
      getRadius: d => d.size,
      getFillColor: [R , G, B ]
    })
   ]
});

// add to mapbox

map.addLayer ( new MapboxLayer ({ id: 'incidents' ,deck}));

deck.setProps({
  layers : [
    new IconLayer({
      id: ' incidents',
      data: [
      
      ],
      getPosition: d => d.position,
      getRadius: d => d.size,
      getFillColor: [R , G, B ]
    })
   ]
});
      
new MapboxLayer(props);

const layer = new MapboxLayer({
  id='incidents',
  type = IconLayer,
  ...
});

layer.setProps({
  radiusScale: 2 
});

    
