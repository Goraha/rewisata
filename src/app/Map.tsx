"use client";

import React,{useState} from 'react'
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
const markers = [
  {
    id: 1,
    name: "Huta Siallagan",
    position: { lat:2.680610915101795, lng: 98.83577102141871 },
    slot: 1000,
    onsite:500,
    aviable:500
  },
  {
    id: 2,
    name: "Bukit Sipolha",
    position: { lat: 2.7360129268475664, lng: 98.85939244752848 },
    slot: 1000,
    onsite:500,
    aviable:500
  },
  {
    id: 3,
    name: "Pantai Paris",
    position: { lat: 2.8017557385863054,lng: 98.78007403637784 },
    slot: 1000,
    onsite:500,
    aviable:500
  },
  {
    id: 4,
    name: "Penatapan Simarjarunjung",
    position: { lat: 2.833630535763868,  lng: 98.76412670960711 },
    slot: 1000,
    onsite:500,
    aviable:500
  }
];

function Map() {
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
        
        {markers.map(({ id, name, position, slot, onsite, aviable }) => (
        <Marker 
          key={id}
          position={position}
          onClick={() => handleActiveMarker(id)}
        >
          {activeMarker === id ? (
            <InfoWindow onCloseClick={() => setActiveMarker(null)}>
              <div>
                <div>
                <h1>{name}</h1>
                <p>Slots : {slot}</p>
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