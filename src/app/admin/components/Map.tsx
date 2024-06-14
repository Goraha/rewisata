"use client"
import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap,useMapEvents } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

const icon = L.icon(
	{ iconUrl: "/icon/leaf.png",
  	iconSize:     [25, 41], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
		//iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-1, -20] // point from which the popup should open relative to the iconAnchor
	}
);

interface PositionData {
	lat: number,
	lng: number,
}

const Maps = ({ sendDataToParent  }:any) => {

	const [selectedPosition, setSelectedPosition] = useState<[number, number]>([0,0]);
  

  function Markers () {
    const map = useMapEvents({
      click(e) {                                
        setSelectedPosition([
          e.latlng.lat,
          e.latlng.lng
        ]);
        //console.log(e.latlng)
        sendDataToParent(e.latlng);
      },            
    })
    return (
        selectedPosition ? 
          <Marker           
          key={selectedPosition[0]}
          position={selectedPosition}
          interactive={false} 
          />
        : null
    )
  }


	

  return (
    <MapContainer
      center={[2.598241448181369, 98.80545340309818]}
      zoom={13}
      scrollWheelZoom
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      
      <Markers />
			{
				
			}
    </MapContainer>
  );
};

export default Maps;