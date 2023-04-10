import { FlatList, StyleSheet } from "react-native";
import RepositoryItem from "../RepositoryItem";
import React from "react";
import RepositoryListHeader from "./RepositoryListHeader";
import ItemSeparator from '../ItemSeparator';

const styles = StyleSheet.create({
  listHeader: {
    zIndex: 10,
  },
});

export const formatNumbers = num => {
  return num > 999 ? (num / 1000).toFixed(1) + "k" : num;
}

const renderItem = ({ item }) => (
  <RepositoryItem
    id={item.id}
    fullName={item.fullName}
    description={item.description}
    language={item.language}
    forksCount={formatNumbers(item.forksCount)}
    stars={formatNumbers(item.stargazersCount)}
    ratingAverage={formatNumbers(item.ratingAverage)}
    reviewCount={formatNumbers(item.reviewCount)}
    avatar={item.ownerAvatarUrl}
  />
)

class RepositoryListContainer extends React.Component {
  renderHeader = () => {
    const { searchQuery, onChangeSearch, onPress, sort } = this.props;

    return (
      <RepositoryListHeader
        searchQuery={searchQuery}
        onChangeSearch={onChangeSearch}
        onPress={onPress}
        sort={sort}
      />
    );
  }

  render() {
    const { repositories } = this.props;
    const repositoryNodes = repositories
      ? repositories?.edges.map((edge) => edge.node)
      : [];


    return (
      <FlatList
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={this.renderHeader}
        ListHeaderComponentStyle={styles.listHeader}
      />
    );
  }
}

export default RepositoryListContainer