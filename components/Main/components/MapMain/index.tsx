'use client'
import { LatLngTuple } from 'leaflet';
import React from 'react'
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'

export const MapMain = () => {
  const position: LatLngTuple = [51.505, -0.09];
  return (
  //   <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
  //   <TileLayer
  //     attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  //     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  //   />
  //   <Marker position={position}>
  //     <Popup>
  //       A pretty CSS3 popup. <br /> Easily customizable.
  //     </Popup>
  //   </Marker>
  // </MapContainer>
  <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A04f98b4a13267354eab2d205950c7be0cea9c3adceb13fa43d148e13e307b2d9&amp;source=constructor" width="100%" height="400" frameBorder="0"></iframe>
  )
}
