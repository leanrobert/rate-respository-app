import { gql } from "@apollo/client";

export const SIGN_IN = gql`
  mutation authorizeMutation($credentials: AuthenticateInput!) {
    authenticate(credentials: $credentials) {
      accessToken
    }
  }
`;

export const CREATE_REVIEW = gql`
  mutation CreateReview($review: CreateReviewInput!) {
    createReview(review: $review) {
      user {
        username
      }
      id
      repositoryId
      createdAt
      text
      rating
    }
  }
`;