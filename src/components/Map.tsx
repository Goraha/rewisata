"use client"

import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { LatLngExpression, LatLngTuple } from 'leaflet';

import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";


interface PositionData {
	lat: number,
	lng: number,
}

interface MapProps {
	data?: any
}
const Maps = (Map: MapProps) => {
	const { data } = Map
	//console.log(data);
  
  function LocationMarker() {
    const [position, setPosition] = useState<PositionData | null>(null);

    const map = useMap();

    useEffect(() => {
      map.locate().on("locationfound", function (e) {
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
      });
    }, [map]);

    return position === null ? null : (
      <Marker position={position} draggable={false}>
					<Popup>Lokasi Kamu</Popup>
			</Marker>
			
    );
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
      <LocationMarker />
			{
				data.data.map((item: any) => {
					return (
						<Marker key={item.id} position={[item.location.latitude,item.location.longitude]} draggable={false}>
							<Popup>
								<h1 className="text-2xl font-bold">{item.nama}</h1>
								<p>kapasitas : {item.kapasitas} orang</p>
							</Popup>
						</Marker>
					)
				})
				
			}
    </MapContainer>
  );
};

export default Maps;