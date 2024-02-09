import { gql } from '@apollo/client';

export const ADD_USER = gql`
mutation AddUser($username: String!, $email: String!, $password: String!) {
  addUser(username: $username, email: $email, password: $password) {
    token
  }
}
`;

export const ADD_LISTING = gql`
mutation AddListing($channel: String!, $description: String!, $priceRange: String!, $listingId: String!) {
  addListing(channel: $channel, description: $description, priceRange: $priceRange, listingId:$listingId) {
    listings {
      _id
      channel
      description
      priceRange
    }
  }
}
`;
export const LOGIN_USER = gql`
mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
  }
}
`;

export const REMOVE_LISTING = gql`
mutation RemoveListing($listingId: ID!) {
  removeListing(listingId: $listingId) {
    listings {
      _id
      channel
      description
      priceRange
    }
  }
}
`;
