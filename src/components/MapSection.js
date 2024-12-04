// src/components/MapSection.js
import React, { useEffect } from 'react';
import './MapSection.css';
import GoogleMapReact from 'google-map-react';
const AnyReactComponent = ({ text }) => <div>{text}</div>;
const MapSection = () => {

  const defaultProps = {
    center: {
      lat: 12.748186,
      lng: 78.346085
    },
    zoom: 11
  };
  return (
    <section id="location-map" className="map-section">
      <div className="map-container">
        <h2>Find Auto Stands Near You</h2>
        <div id="map">
        <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
      </GoogleMapReact>
        </div>
      </div>
    </section>
  );
};

export default MapSection;