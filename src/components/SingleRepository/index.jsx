import { useQuery } from "@apollo/client";
import { FlatList } from "react-native";
import { useParams } from "react-router-native";
import { GET_SINGLE_REPO } from "../../graphql/queries";
import ReviewItem from "./ReviewItem";
import RepositoryInfo from "./RepositoryInfo";
import ItemSeparator from "../ItemSeparator";

const SingleRepository = () => {
  const { id } = useParams();

  const { loading, data, fetchMore } = useQuery(GET_SINGLE_REPO, {
    fetchPolicy: 'cache-and-network',
    variables: { id, first: 20 }
  })

  const handleFetchMore = () => {
    const canFetchMore =
      !loading && data && data.repository.reviews.pageInfo.hasNextPage;
    if (!canFetchMore) {
      return;
    }
    fetchMore({
      query: GET_SINGLE_REPO,
      variables: {
        after: data.repository.reviews.pageInfo.endCursor,
        id,
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        const nextResult = {
          repository: {
            ...fetchMoreResult.repository,
            reviews: {
              ...fetchMoreResult.repository.reviews,
              edges: [
                ...previousResult.repository.reviews.edges,
                ...fetchMoreResult.repository.reviews.edges,
              ],
            },
          },
        };
        return nextResult;
      },
    });
  };

  const onEndReach = () => {
    handleFetchMore();
  };

  const renderItem = ({ item }) => (
    <ReviewItem
      username={item.node.user.username}
      rating={item.node.rating}
      text={item.node.text}
      createdAt={item.node.createdAt}
    />
  );

  const repository = data?.repository;
  const reviews = data?.repository.revires.edges;

  return (
    <FlatList
      data={reviews}
      renderItem={renderItem}
      keyExtractor={({ node: { id } }) => id }
      ListHeaderComponent={() => <RepositoryInfo repository={repository} />}
      ItemSeparatorComponent={ItemSeparator}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
    />
  )
}

export default SingleRepository