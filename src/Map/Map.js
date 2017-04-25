import React from 'react';

var google = {};
//@scriptLoader(['https://maps.googleapis.com/maps/api/js?key=AIzaSyBuuWB5ypGov2
//eIn2aofz87l8_Pi5LGOFk'])
export default class Maps extends React.Component {
  constructor(props) {
    super(props);
    this.map = null;
  }

  componentDidMount() {
    // Connect the initMap() function within this class to the global window
    // context, so Google Maps can invoke it
    window.initMap = this
      .initMap
      .bind(this);
    // Asynchronously load the Google Maps script, passing in the callback reference
    google = null;

    loadJS('https://maps.googleapis.com/maps/api/js?key=AIzaSyBuuWB5ypGov2eIn2aofz87l8_Pi5LG' +
        'OFk&callback=initMap');
  }

  initMap() {

    this.uluru = {
      lat: this.props.lat || 32.6622889,
      lng: this.props.lng ||51.6870261
    };
    this.map = new window
      .google
      .maps
      .Map(this.refs.map, {
        zoom: this.props.zoom || 13,
        center: this.uluru
      });

  }

  render() {
    return (
      <div ref="map" className="GoogleMap" {... this.props}></div>
    );
  }

}

function loadJS(src) {
  var ref = window
    .document
    .getElementsByTagName("script")[0];
  var script = window
    .document
    .createElement("script");
  script.src = src;
  script.async = true;
  ref
    .parentNode
    .insertBefore(script, ref);
}
