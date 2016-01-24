import React, { Component } from 'react';
import { Link } from 'react-router';

class Map extends Component {
/*  constructor (props) {
    super(props);
    console.log(props);
  }*/

  /**
   * Create a marker with the given image in the exif geolocation
   */
  placeMarker (img, lat, lng) {
    let myLayer = L.mapbox.featureLayer().addTo(this.map);

    let geoJson = [{
      type: 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [lng, lat]
      },
      'properties': {
        'marker-color': '#3c4e5a',
        'marker-size': 'large',
        'image': img
      }
    }];

    myLayer.on('layeradd', e => {
      let marker = e.layer;
      let feature = marker.feature;
      let image = feature.properties.image;

      // Create custom popup content
      let popupContent = `<div class="popup"><img src="${image}" width="300" /></div>`;

      // http://leafletjs.com/reference.html#popup
      marker.bindPopup(popupContent, {
        closeButton: true,
        minWidth: 320
      });
    });

    // Add features to the map
    myLayer.setGeoJSON(geoJson);
  }

  componentDidMount () {
    /*L.mapbox.accessToken = 'pk.eyJ1IjoiYmVybmFyZG9kaWFzYyIsImEiOiJlZGFiZmUwOTUzZGM5MWIwOTgwMDhmY2ZkMGJlMzQ1OCJ9.tR40g6DTOsTyi101mxSWJg';
    this.map = L.mapbox.map('map', { zoomControl: false, style: 'mapbox://styles/mapbox/satellite-v8' });
    new L.Control.Zoom({ position: 'topright' }).addTo(this.map);*/


    // https://www.mapbox.com/mapbox-gl-js/api/
    // https://www.mapbox.com/help/mapbox-gl-js-fundamentals/
    // http://igortihonov.com/2014/10/21/taking-mapbox-gl-for-a-spin/

    mapboxgl.accessToken = 'pk.eyJ1IjoiYmVybmFyZG9kaWFzYyIsImEiOiJlZGFiZmUwOTUzZGM5MWIwOTgwMDhmY2ZkMGJlMzQ1OCJ9.tR40g6DTOsTyi101mxSWJg';
    this.map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/satellite-v8',
      // center: [-74.50, 40],
      // zoom: 9,
      // hash: true
    });

    this.map.addControl(new mapboxgl.Navigation());

    // this.map.addControl(new mapboxgl.Geocoder({ container: 'geocoder-container' }));
  }

  render() {
    return (
      <div id="map"></div>
    );
  }
}

export default Map;
