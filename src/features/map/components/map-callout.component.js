import React from "react";
import {
  CompactImage,
  CompactWebview,
  Item,
} from "./map-callout.component.styles";
import { Platform } from "react-native";
import { Typography } from "../../../components/typography";
import { Favourite } from "../../restaurants/components/favourite.component";

const isAndroid = Platform.OS === "android";

export const MapCallout = ({ restaurant, isMap }) => {
  const Image = isAndroid && isMap ? CompactWebview : CompactImage;
  return (
    <Item>
      <Favourite restaurant={restaurant} isSmallImage />
      <Image source={{ uri: restaurant.photos[0] }} />
      <Typography center variant="caption" numberOfLines={3}>
        {restaurant.name}
      </Typography>
    </Item>
  );
};
