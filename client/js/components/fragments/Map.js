import React, { Component } from 'react';
import { Link } from 'react-router';
import GoogleMapsLoader from 'google-maps';

class Map extends Component {
  constructor () {
    super();
    this.map;
  }

  componentDidMount () {
    // https://developers.google.com/maps/documentation/javascript/reference
    // https://developers.google.com/maps/documentation/javascript/libraries
    // https://developers.google.com/maps/documentation/javascript/controls
    GoogleMapsLoader.VERSION = '3.22';
    GoogleMapsLoader.LIBRARIES = ['drawing'];
    GoogleMapsLoader.load(google => {
      this.map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 0, lng: 0},
        zoom: 2,
        mapTypeIds: [
          google.maps.MapTypeId.HYBRID,
          google.maps.MapTypeId.ROADMAP,
          google.maps.MapTypeId.SATELLITE,
          google.maps.MapTypeId.TERRAIN
        ],
        scaleControl: true,
        mapTypeControl: true,
        mapTypeControlOptions: {
          style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
          position: google.maps.ControlPosition.LEFT_BOTTOM
        },
        streetViewControl: true,
        streetViewControlOptions: {
          position: google.maps.ControlPosition.LEFT_BOTTOM
        },
        zoomControl: true,
        zoomControlOptions: {
          position: google.maps.ControlPosition.LEFT_BOTTOM
        }
      });

      this.map.setMapTypeId(google.maps.MapTypeId.SATELLITE);
      this.map.data.loadGeoJson('temp-fixture.json');

      var drawingManager = new google.maps.drawing.DrawingManager({
        // drawingMode: google.maps.drawing.OverlayType.MARKER,
        drawingControl: true,
        drawingControlOptions: {
          position: google.maps.ControlPosition.BOTTOM_CENTER,
          drawingModes: [
            google.maps.drawing.OverlayType.MARKER,
            google.maps.drawing.OverlayType.CIRCLE,
            google.maps.drawing.OverlayType.POLYGON,
            google.maps.drawing.OverlayType.POLYLINE,
            google.maps.drawing.OverlayType.RECTANGLE
          ]
        },
        // markerOptions: {icon: 'images/beachflag.png'},
        circleOptions: {
          fillColor: '#ffff00',
          fillOpacity: 1,
          strokeWeight: 5,
          clickable: false,
          editable: true,
          zIndex: 1
        }
      });
      drawingManager.setMap(this.map);
    });
  }

  render() {
    return (
      <div id="map"></div>
    );
  }
}

export default Map;
