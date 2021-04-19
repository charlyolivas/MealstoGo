import React from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import { Spacer } from "../../../components/spacer";
import { Typography } from "../../../components/typography";
import { MapCallout } from "../../map/components/map-callout.component";
import { FavouritesWrapper } from "./favourite-bar.component.styles";

export const FavouriteBar = ({ favourites, onNavigate }) => {
  if (!favourites.length) {
    return null;
  }
  return (
    <FavouritesWrapper elevation={3}>
      <Spacer position="left" size="large">
        <Typography variant="caption">Favourites</Typography>
      </Spacer>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((restaurant, i) => {
          return (
            <Spacer key={i} position="left" size="medium">
              <TouchableOpacity
                onPress={() =>
                  onNavigate("RestaurantDetail", {
                    restaurant,
                  })
                }
              >
                <MapCallout restaurant={restaurant} />
              </TouchableOpacity>
            </Spacer>
          );
        })}
      </ScrollView>
    </FavouritesWrapper>
  );
};
