import React from "react";
import { Spacer } from "../../../components/spacer";
import { Typography } from "../../../components/typography";
import {
  AccountBackground,
  AccountContiner,
  AccountCover,
  AuthButton,
} from "./background.styles";

export const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <AccountCover />
      <Typography variant="title">Meals To Go</Typography>
      <AccountContiner>
        <AuthButton
          icon="lock-open-outline"
          mode="contained"
          onPress={() => navigation.navigate("Login")}
        >
          Login
        </AuthButton>
        <Spacer size="large" position="top">
          <AuthButton
            icon="account-outline"
            mode="contained"
            onPress={() => navigation.navigate("Register", {})}
          >
            Register
          </AuthButton>
        </Spacer>
      </AccountContiner>
    </AccountBackground>
  );
};
