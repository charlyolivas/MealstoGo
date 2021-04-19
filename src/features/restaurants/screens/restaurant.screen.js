import React, { useContext, useState } from "react";
import { Colors } from "react-native-paper";
import { Spacer } from "../../../components/spacer";
import { RestaurantInfoCard } from "../components/info-card.component";
import { Search } from "../components/search.component";
import { FlatListContainer, Loading } from "./restaurant.screen.styles";
import { SafeArea } from "../../../components/safe-are";
import { RestaurantsContext } from "../../../services/restaurants/context.restaurant";
import { FavouritesContex } from "../../../services/favourites/context.favourites";
import { TouchableOpacity } from "react-native";
import { FavouriteBar } from "../components/favourite-bar.component";
import { FadeInView } from "../../../components/animation";

export function RestaurantsScreens({ navigation }) {
  const { isLoading, restaurants } = useContext(RestaurantsContext);
  const { favourites } = useContext(FavouritesContex);
  const [isToggled, setIsToggled] = useState(false);

  return (
    <SafeArea>
      <Search
        isFavouritesToggled={isToggled}
        onFavouritesToggle={() => setIsToggled(!isToggled)}
      />
      {isToggled && (
        <FavouriteBar
          favourites={favourites}
          onNavigate={navigation.navigate}
        />
      )}
      {isLoading ? (
        <Loading animating={true} color={Colors.blue400} size="large" />
      ) : (
        <FlatListContainer
          data={restaurants}
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
      )}
    </SafeArea>
  );
}
