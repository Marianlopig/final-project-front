import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { IPark, IParkState } from "../../redux/types/parkInterfaces";
import Parkmini from "../Parkmini/Parkmini";
import { PointsMapStyles } from "./PointsMapStyles";

const PointsMap = ({ results: parks }: IParkState) => {
  const LocationMarker = () => (
    <>
      {parks.map((park: IPark) => (
        <Marker
          position={{
            lat: park.location.coordinates[0],
            lng: park.location.coordinates[1],
          }}
        >
          <Popup>
            <Parkmini {...park} />
          </Popup>
        </Marker>
      ))}
      ;
    </>
  );

  return (
    <PointsMapStyles>
      <MapContainer
        center={{ lat: 41.390205, lng: 2.154007 }}
        zoom={12}
        scrollWheelZoom={true}
        className="map"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker />
      </MapContainer>
    </PointsMapStyles>
  );
};

export default PointsMap;
