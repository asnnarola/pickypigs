import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";



 const GoogleMapTestComp = withScriptjs(withGoogleMap(props =>
  <GoogleMap
    defaultZoom={10}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  >
    <Marker
      position={{ lat: -34.397, lng: 150.644 }}
    />
  </GoogleMap>
));

export default GoogleMapTestComp;

