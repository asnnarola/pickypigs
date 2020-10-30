import React from "react";

import GoogleMapReact from "google-map-react";
import MyMarker from "./MyMarker";

const points = [
  { id: 1, title: "Round Pond", lat: 51.506, lng: -0.184 },
  { id: 2, title: "The Long Water", lat: 51.508, lng: -0.175 },
  { id: 3, title: "The Serpentine", lat: 51.505, lng: -0.164 }
];


export default function GoogleMapTestComp() {
  return (
    <div style={{ height:140, width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: "AIzaSyCKNYJOc_E1GD16c6Qd44fleZmmkyqDi7c",
          language: "en",
          region: "US"
        }}
        defaultCenter={{ lat:21.195836, lng:72.793251 }}
        defaultZoom={15}
      >
        {points.map(({ lat, lng, id, title }) => {
          return (
            <MyMarker
              key={id}
              lat={lat}
              lng={lng}
              text={id}
              tooltip={title}
            />
          );
        })}
      </GoogleMapReact>
    </div>
  );
}

