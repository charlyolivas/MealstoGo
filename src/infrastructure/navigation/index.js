import React, { useContext } from "react";
import { AuthenticationContext } from "../../services/authentication/context.authentication";
import { AppNavigator } from "./navigator.app";
import { NavigationContainer } from "@react-navigation/native";
import { AccountNavigator } from "./navigator.account";
import { FavouritesContextProvider } from "../../services/favourites/context.favourites";
import { LocationContextProvider } from "../../services/location/contex.location";
import { RestaurantContextProvider } from "../../services/restaurants/context.restaurant";
export const Navigation = () => {
  const { isAuthenticated } = useContext(AuthenticationContext);

  return (
    <NavigationContainer>
      {isAuthenticated ? (
        <FavouritesContextProvider>
          <LocationContextProvider>
            <RestaurantContextProvider>
              <AppNavigator />
            </RestaurantContextProvider>
          </LocationContextProvider>
        </FavouritesContextProvider>
      ) : (
        <AccountNavigator />
      )}
    </NavigationContainer>
  );
};
