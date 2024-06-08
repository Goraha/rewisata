"use client";

import React,{useState,useEffect} from 'react'
import { GoogleMap, useJsApiLoader,Marker,InfoWindow,OverlayView  } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%'
};

const center = {
  lat: 2.598241448408067,
  lng: 98.81094657086759
};

const parapat = {
  lat: 2.725882167101786, 
  lng: 98.89980841694229
};


function Map(props:any) {
  const data = props.data;

  const [markers, setMarkers] = useState(
    data
  )

  //console.log(data);
  //console.log(markers[0].location.latitude);

  const [activeMarker, setActiveMarker] = useState(null);
  const handleActiveMarker = (marker:any) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "",
  })

  const options = {
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: false,
  };

  const mapContainerStyle = {
    width: "100vw",
    height: "100vh",
  };
  const onClick = (e: google.maps.MapMouseEvent) => {
    console.log('onClick args: ', e.latLng?.toJSON());
  }
  

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onClick={onClick}
      >
        
        {markers.map((dt:any) => (
        <Marker 
          key={dt.id}
          position={{lat: dt.location.latitude,lng: dt.location.longitude}}
          onClick={() => handleActiveMarker(dt.id)}
        >
          {activeMarker === dt.id ? (
            <InfoWindow onCloseClick={() => setActiveMarker(null)}>
              <div>
                <div>
                <h1>{dt.nama}</h1>
                <p>Slots : {dt.kapasitas}</p>
                </div>
                <div className='flex justify-center items-center'>
                  <button className='bg-red-500 text-white p-2 rounded block' onClick={() => setActiveMarker(null)}>Detail</button>
                  <button className='bg-red-500 text-white p-2 rounded block' >Pesan</button>
                </div>
                
              </div>
            </InfoWindow>
          ) : null}
        </Marker>
      ))}
      <OverlayView
      position={parapat}
      mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
    >
      <div>
        <h1 className='text-white'>OverlayView</h1>

        <button
          onClick={() => setActiveMarker(null)}
          type='button'
        >
          Click me
        </button>
      </div>
    </OverlayView>
        <></>
        
      </GoogleMap>
  ) : <></>
}

export default React.memo(Map)