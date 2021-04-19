import styled from "styled-components/native";
import { Image } from "react-native";
import { Card, Paragraph } from "react-native-paper";

export const CardContiner = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding-bottom: ${(props) => props.theme.space[3]};
`;
export const Address = styled(Paragraph)`
  font-family: ${(props) => props.theme.fonts.body}
  padding-left: ${(props) => props.theme.space[3]};
`;

export const Rating = styled(Paragraph)`
  flex-direction: row;
  margin-left: ${(props) => props.theme.space[3]};
`;

export const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
  margin-right: ${(props) => props.theme.space[2]};
`;
export const Icon = styled(Image)`
  width: 15px;
  height: 15px;
`;
