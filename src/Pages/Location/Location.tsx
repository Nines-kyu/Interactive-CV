import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix default marker icon issue in Leaflet + React
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const Location: React.FC = () => {
  // Coordinates for Valenzuela City
  const valenzuelaCoords: [number, number] = [14.694883595446168, 120.97204997435432];

  return (
    <div className="flex flex-col h-full items-center justify-center p-6 border-r-0 lg:border-r-2 border-b-2 rounded-br-2xl border-gray-50">
      <div className="w-full max-w-2xl h-96 rounded-lg shadow-lg overflow-hidden">
        <MapContainer
          center={valenzuelaCoords}
          zoom={12}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={valenzuelaCoords}>
            <Popup>
              Valenzuela City, Metro Manila <br /> 📍 My home city.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
      <h2 className="text-2xl font-bold mt-4 mb-4 text-softWhite">📍 My Location</h2>
      <p className="text-steelGray mb-4">
        I am based in <span className="font-semibold">Valenzuela City, Metro Manila</span>.
      </p>
    </div>
  );
};

export default Location;
