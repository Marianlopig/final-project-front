import { MapStyles } from "./MapStyles";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvents,
} from "react-leaflet";
import { useEffect, useState } from "react";

const Map = () => {
  function LocationMarker() {
    const [position, setPosition] = useState<[number, number]>([0, 0]);

    const map = useMap();

    useMapEvents({
      click(e) {
        setPosition([e.latlng.lat, e.latlng.lng]);
        map.flyTo(e.latlng, map.getZoom());
      },
    });

    useEffect(() => {
      map.locate().on("locationfound", function (e) {
        setPosition([e.latlng.lat, e.latlng.lng]);
        map.flyTo(e.latlng, 13);
      });
    }, [map]);

    return position === null ? null : (
      <Marker position={position}>
        <Popup>You are here</Popup>
      </Marker>
    );
  }

  return (
    <MapStyles>
      <MapContainer
        center={{ lat: 0, lng: 0 }}
        zoom={1}
        scrollWheelZoom={false}
        className="map"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker />
      </MapContainer>
    </MapStyles>
  );
};

export default Map;
