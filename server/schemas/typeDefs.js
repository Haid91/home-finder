const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    password: String
    listings: [Listing]
  }

  type Listing {
    _id: ID
    channel: String
    description: String
    priceRange: String
    listingId: ID
  }


  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addListing(channel: String!, description: String!, priceRange: String!, listingId: String!): User
    removeListing(listingId: ID!): User
   
  }
`;

module.exports = typeDefs;

