import React from "react";
import { Card } from "react-native-paper";
import {
  CardContiner,
  Address,
  Rating,
  Section,
  SectionEnd,
  Icon,
} from "./info-card.styles";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Spacer } from "../../../components/spacer";
import { Typography } from "../../../components/typography";
import { Favourite } from "./favourite.component";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
    placeId,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <CardContiner elevation={5}>
      <Favourite restaurant={restaurant} />
      <Card.Cover source={{ uri: photos[0] }} />
      <Spacer position="left" size="large">
        <Spacer position="top" size="large">
          <Spacer position="bottom" size="large">
            <Typography variant="title">{name}</Typography>
          </Spacer>
        </Spacer>
      </Spacer>
      <Section>
        <Rating>
          {ratingArray.map((_, i) => (
            <SvgXml
              key={`star-${placeId}-${i}`}
              xml={star}
              width={20}
              height={20}
            />
          ))}
        </Rating>
        <SectionEnd>
          {isClosedTemporarily && (
            <Typography variant="error">CLOSED TEMPORARILY</Typography>
          )}
          <Spacer position="left" size="large" />
          {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
          <Spacer position="left" size="large" />
          <Icon source={{ uri: icon }} />
        </SectionEnd>
      </Section>
      <Address>{address}</Address>
    </CardContiner>
  );
};
