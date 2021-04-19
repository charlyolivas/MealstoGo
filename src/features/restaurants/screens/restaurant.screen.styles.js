import { View, FlatList } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import styled from "styled-components/native";

export const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

export const FlatListContainer = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const Loading = styled(ActivityIndicator)`
  flex: 1;
`;
