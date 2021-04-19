import React, { useContext } from "react";
import {
  FavouriteButton,
  FavouriteButtonEdge,
} from "./favourite.component.styles";
import { AntDesign } from "@expo/vector-icons";
import { FavouritesContex } from "../../../services/favourites/context.favourites";

export const Favourite = ({ restaurant, isSmallImage, isMap }) => {
  const { favourites, addToFavourites, removeFromFavourites } = useContext(
    FavouritesContex
  );

  const isFavourite = favourites.find(
    (item) => item.placeId === restaurant.placeId
  );
  if (isSmallImage && !isMap) {
    return (
      <FavouriteButtonEdge
        onPress={() =>
          !isFavourite
            ? addToFavourites(restaurant)
            : removeFromFavourites(restaurant)
        }
      >
        <AntDesign name={"close"} size={24} color={"white"} />
      </FavouriteButtonEdge>
    );
  } else {
    return (
      <FavouriteButton
        onPress={() =>
          !isFavourite
            ? addToFavourites(restaurant)
            : removeFromFavourites(restaurant)
        }
      >
        <AntDesign
          name={isFavourite ? "heart" : "hearto"}
          size={24}
          color={isFavourite ? "red" : "white"}
        />
      </FavouriteButton>
    );
  }
};
