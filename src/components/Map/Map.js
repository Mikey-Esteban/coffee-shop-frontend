import React from "react";
import GoogleMapReact from "google-map-react";
import { Storefront } from "@styled-icons/ionicons-outline/Storefront";

const Map = ({ isMobile }) => {
  const defaultProps = {
    center: {
      lat: 40.74648,
      lng: -73.952924
    },
    zoom: 15
  };

  let width;
  isMobile ? (width = "100%") : (width = "90%");

  return (
    // Important! Always set the container height explicitly

    <div style={{ height: "50%", width: width }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBEy2o1wfzOyQ14y94AGc8_TiFqQkF1zAY" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <Storefront lat={40.74638} lng={-73.953924} size={24} color={"red"} />
      </GoogleMapReact>
    </div>
  );
};

export default Map;
