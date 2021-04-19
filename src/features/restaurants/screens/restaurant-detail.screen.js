import React from "react";
import { RestaurantInfoCard } from "../components/info-card.component";
import { MenuList } from "../components/menu-list.component";
import { SafeArea } from "../../../components/safe-are";

export const RestaurantDetailScreen = ({ route }) => {
  const { restaurant } = route.params;
  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      <MenuList />
    </SafeArea>
  );
};
