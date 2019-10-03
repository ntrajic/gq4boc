const { gql } = require('apollo-server');

const typeDefs = gql`
type Query {
  trips: [Trip]
  trip(id: String!): Trip
  imgs: [Img]
  img(id: String!): Img
}

type Trip {
  id: ID!
  tdest: String
  tdate: Int
  tlead: String
  treport: String
  tphotos: [Img]
}
type Img {
  imgfile: String!
}
`

module.exports = typeDefs;

// trips(pageSize: Int, after: String): TripConnection!
/*  // this is change needed for pagination, so we divide # of items in the cursor to be displayed per page - see resolver.js
type TripConnection {
  cursor: String!
  hasMore: Boolean!
  trips: [Trip]!
}
*/
