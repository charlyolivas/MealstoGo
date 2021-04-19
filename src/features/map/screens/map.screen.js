import React, { useContext, useEffect, useState } from "react";
import MapView from "react-native-maps";
import { Search } from "../components/search.component";
import { Map } from "./map.screen.styles";
import { RestaurantsContext } from "../../../services/restaurants/context.restaurant";
import { LocationContext } from "../../../services/location/contex.location";
import { MapCallout } from "../components/map-callout.component";

export const MapScreen = ({ navigation }) => {
  const { restaurants } = useContext(RestaurantsContext);
  const { location } = useContext(LocationContext);
  const [latDelta, setLatDelta] = useState(0);
  const { lat, lng, viewport } = location;

  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;

    setLatDelta(northeastLat - southwestLat);
  }, [location, viewport]);
  return (
    <>
      <Search />
      <Map
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}
      >
        {restaurants.map((restaurant) => {
          return (
            <MapView.Marker
              key={restaurant.name}
              title={restaurant.name}
              coordinate={{
                latitude: restaurant.geometry.location.lat,
                longitude: restaurant.geometry.location.lng,
              }}
            >
              <MapView.Callout
                onPress={() => {
                  navigation.navigate("RestaurantDetail", { restaurant });
                }}
              >
                <MapCallout isMap restaurant={restaurant} />
              </MapView.Callout>
            </MapView.Marker>
          );
        })}
      </Map>
    </>
  );
};
