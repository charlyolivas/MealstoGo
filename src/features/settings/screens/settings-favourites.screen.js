import React, { useContext } from "react";
import { Spacer } from "../../../components/spacer";
import { RestaurantInfoCard } from "../../restaurants/components/info-card.component";
import { FlatListContainer } from "../../restaurants/screens/restaurant.screen.styles";
import { SafeArea } from "../../../components/safe-are";
import { FavouritesContex } from "../../../services/favourites/context.favourites";
import { TouchableOpacity } from "react-native";
import { FadeInView } from "../../../components/animation";

export function SettingsFavourites({ navigation }) {
  const { favourites } = useContext(FavouritesContex);

  if (!favourites.length) {
    return null;
  }
  return (
    <SafeArea>
      <FlatListContainer
        data={favourites}
        initialNumToRender={4}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetail", {
                  restaurant: item,
                })
              }
            >
              <Spacer position="bottom" size="large">
                <FadeInView>
                  <RestaurantInfoCard restaurant={item} />
                </FadeInView>
              </Spacer>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
}
