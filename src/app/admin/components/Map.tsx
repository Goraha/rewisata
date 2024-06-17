"use client"
import React, { useState } from "react";
import { MapContainer, TileLayer, Marker,useMapEvents,useMap,Tooltip } from "react-leaflet";
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

const Maps = (props:any) => {
  const { sendDataToParent, lat=1, lng=1} = props;
	const [selectedPosition, setSelectedPosition] = useState<[number, number]>([Number(lat),Number(lng)]);
  function Markers () {
    const map = useMap();
    //console.log(selectedPosition)
   

    useMapEvents({
      click(e) {                                
        setSelectedPosition([
          e.latlng.lat,
          e.latlng.lng
        ]);
        //console.log(e.latlng)
        sendDataToParent(e.latlng);
      },
    });

    map.flyTo(selectedPosition, map.getZoom());
    return (
        selectedPosition ? 
          <Marker
          position={selectedPosition}
          interactive={false} 
          >
             <Tooltip permanent>
                  <span>{selectedPosition[0]} | {selectedPosition[1]}</span>
            </Tooltip>
          </Marker>
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