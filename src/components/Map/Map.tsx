import { MapStyles } from "./MapStyles";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from "react-leaflet";

export interface IMap {
  onLocationSelected(loc: [number, number]): void;
  location: [number, number];
}

const Map = ({ onLocationSelected, location }: IMap) => {
  function LocationMarker() {
    const map = useMapEvents({
      click(e) {
        onLocationSelected([e.latlng.lat, e.latlng.lng]);
        map.flyTo(e.latlng, map.getZoom());
      },
    });

    map.flyTo({ lat: location[0], lng: location[1] }, map.getZoom());

    return location === null ? null : (
      <Marker position={location}>
        <Popup>You are here</Popup>
      </Marker>
    );
  }

  return (
    <MapStyles>
      <MapContainer
        center={{ lat: location[0], lng: location[1] }}
        zoom={15}
        scrollWheelZoom={true}
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
