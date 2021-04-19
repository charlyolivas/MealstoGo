import React, { useContext } from "react";
import { AvatarContainer } from "./settings.screen.styles";
import { Avatar, List } from "react-native-paper";
import { SafeArea } from "../../../components/safe-are";
import { AuthenticationContext } from "../../../services/authentication/context.authentication";
import { Spacer } from "../../../components/spacer";
import { Typography } from "../../../components/typography";
import { colors } from "../../../infrastructure/theme/colors";

export const SettingsScreen = ({ navigation }) => {
  const { user, onLogout } = useContext(AuthenticationContext);
  return (
    <SafeArea>
      <AvatarContainer>
        <Spacer position="top" size="large" />
        <Avatar.Icon
          size={150}
          icon="human"
          backgroundColor={colors.brand.primary}
        />
        <Spacer position="top" size="large">
          <Typography variant="label">{user.email}</Typography>
        </Spacer>
      </AvatarContainer>

      <List.Section>
        <List.Item
          title="Favourites"
          description="View your favourites"
          left={(props) => (
            <List.Icon {...props} color={colors.ui.error} icon="heart" />
          )}
          onPress={() => navigation.navigate("Favourites")}
        />
        <List.Item
          title="Logout"
          left={(props) => (
            <List.Icon {...props} color={colors.ui.secondary} icon="door" />
          )}
          onPress={onLogout}
        />
      </List.Section>
    </SafeArea>
  );
};
