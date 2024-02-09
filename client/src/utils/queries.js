import { gql } from '@apollo/client';



export const QUERY_ME = gql`
query Me {
  me {
    listings {
      _id
      channel
      description
      priceRange
      listingId
    }
  }
}
`;
