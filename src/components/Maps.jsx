import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 37.7749, // Latitude
  lng: -122.4194, // Longitude
};

function Maps() {
  return (
    <section className="w-full mb-2">
         <LoadScript googleMapsApiKey="YOUR_API_KEY">
            <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
                {/* Add markers or other components here */}
                <Marker position={center} />
            </GoogleMap>
        </LoadScript>
    </section>
   
  );
}

export default Maps;
