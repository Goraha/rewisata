"use client"
import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
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

interface MapProps {
	data?: any
}
const Maps = (Map: MapProps) => {
	const { data } = Map
	//console.log(data);

	// var fromLatLng = L.latLng(2.931843957410449, 99.04600797068322);
	// var toLatLng = L.latLng(2.734851208940183, 98.85933726310648);
	// var dis = fromLatLng.distanceTo(toLatLng)/ 1000;
	// console.log(dis);
  
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
						<Marker key={item.id} icon={icon} position={[item.location.latitude,item.location.longitude]} draggable={false}>
							<Popup>
								<div>
									<div>
										<h1 className="text-2xl font-bold">{item.nama}</h1>
										<p>{item.tentang}</p>
										<p>Harga Tiket : {item.harga}</p>
										<p>kapasitas : {item.kapasitas} orang</p>
									</div>
									<div className="flex items-center">
										<button className="bg-blue-500 text-white hover:bg-gray-700 text-white font-bold py-2 px-4 mx-1 rounded w-1/3">Pesan</button>
										<button className="bg-blue-500 text-white hover:bg-gray-700 text-white font-bold py-2 px-4 mx-1 rounded w-1/3">Detail</button>
										<button onClick={() => {window.open( `https://www.google.com/maps/?q=${item.location.latitude},${item.location.longitude}`)}} className="bg-blue-500 text-white hover:bg-gray-700 text-white font-bold py-2 px-4 rounded w-1/3">Maps</button>
									</div>
								</div>
								
							</Popup>
						</Marker>
					)
				})
				
			}
    </MapContainer>
  );
};

export default Maps;