import { gql } from "@apollo/client";

export const SIGN_IN = gql`
  mutation authorizeMutation($credentials: AuthenticateInput!) {
    authenticate(credentials: $credentials) {
      accessToken
    }
  }
`;
