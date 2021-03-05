import React, { useEffect, useState } from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";


const GoogleMapTestComp=(props)=>{
  const [center, setCenter] = useState({ lat:0, lng: 0});


  return(
    <React.Fragment>
      {props.coordinate&&props.coordinate.length>0?
        <GoogleMap
            defaultZoom={10}
            defaultCenter={{ lat:props.coordinate[0], lng: props.coordinate[1]}}
          >
          <Marker
            position={{ lat:props.coordinate[0], lng:props.coordinate[1]}}
          />
        </GoogleMap>
        :
        <GoogleMap
          defaultZoom={10}
          defaultCenter={center}
        >
        <Marker
          position={center}
        />
      </GoogleMap>
      }

    </React.Fragment>
  )
}
export default withScriptjs(withGoogleMap(GoogleMapTestComp));


