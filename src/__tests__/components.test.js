import { render } from "@testing-library/react-native";
import { RepositoryListContainer } from "../components/RepositoryList";

describe('RepositoryList', () => {
  describe('RepositoryListContainer', () => {
    it('renders repository information correctly', () => {
      const repositories = {
        totalCount: 8,
        pageInfo: {
          hasNextPage: true,
          endCursor:
            'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
        },
        edges: [
          {
            node: {
              id: 'jaredpalmer.formik',
              fullName: 'jaredpalmer/formik',
              description: 'Build forms in React, without the tears',
              language: 'TypeScript',
              forksCount: 1619,
              stargazersCount: 21856,
              ratingAverage: 88,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars2.githubusercontent.com/u/4060187?v=4',
            },
            cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
          },
          {
            node: {
              id: 'async-library.react-async',
              fullName: 'async-library/react-async',
              description: 'Flexible promise-based React data loader',
              language: 'JavaScript',
              forksCount: 69,
              stargazersCount: 1760,
              ratingAverage: 72,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars1.githubusercontent.com/u/54310907?v=4',
            },
            cursor:
              'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          },
        ],
      };

      const { getAllByTestId } = render(<RepositoryListContainer repositories={repositories} />)

      const firstRepo = repositories.edges[0].node
      const secondRepo = repositories.edges[1].node

      const repoNames = getAllByTestId('fullname')
      const firsRepoName = repoNames[0]
      const secondRepoName = repoNames[1]
      expect(firsRepoName).toHaveTextContent(firstRepo.fullName)
      expect(secondRepoName).toHaveTextContent(secondRepo.fullName)

      const repoDescs = getAllByTestId('description')
      const firsRepoDesc = repoDescs[0]
      const secondRepoDesc = repoDescs[1]
      expect(firsRepoDesc).toHaveTextContent(firstRepo.description)
      expect(secondRepoDesc).toHaveTextContent(secondRepo.description)

      const repolangs = getAllByTestId('language')
      const firsRepolang = repolangs[0]
      const secondRepolang = repolangs[1]
      expect(firsRepolang).toHaveTextContent(firstRepo.language)
      expect(secondRepolang).toHaveTextContent(secondRepo.language)

      const repoStars = getAllByTestId('stargazerscount')
      const firsRepoStar = repoStars[0]
      const secondRepoStar = repoStars[1]
      expect(firsRepoStar).toHaveTextContent(firstRepo.stargazersCount > 1000 ? `${(firstRepo.stargazersCount / 1000).toFixed(1)}k` : firstRepo.stargazersCount)
      expect(secondRepoStar).toHaveTextContent(secondRepo.stargazersCount > 1000 ? `${(secondRepo.stargazersCount / 1000).toFixed(1)}k` : secondRepo.stargazersCount)

      const repoForks = getAllByTestId('forkcount')
      const firsRepoFork = repoForks[0]
      const secondRepoFork = repoForks[1]
      expect(firsRepoFork).toHaveTextContent(firstRepo.forksCount > 1000 ? `${(firstRepo.forksCount / 1000).toFixed(1)}k` : firstRepo.forksCount)
      expect(secondRepoFork).toHaveTextContent(secondRepo.forksCount > 1000 ? `${(secondRepo.forksCount / 1000).toFixed(1)}k` : secondRepo.forksCount)

      const repoReviews = getAllByTestId('reviewcount')
      const firsRepoReview = repoReviews[0]
      const secondRepoReview = repoReviews[1]
      expect(firsRepoReview).toHaveTextContent(firstRepo.reviewCount)
      expect(secondRepoReview).toHaveTextContent(secondRepo.reviewCount)

      const repoRatings = getAllByTestId('ratingavg')
      const firsRepoRating = repoRatings[0]
      const secondRepoRating = repoRatings[1]
      expect(firsRepoRating).toHaveTextContent(firstRepo.ratingAverage)
      expect(secondRepoRating).toHaveTextContent(secondRepo.ratingAverage)
    });
  });
});