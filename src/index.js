"use strict";

import { GraphQLServer } from 'graphql-yoga';


// Schema
const typeDefs = `
  type Query {
    title: String!
    price: Float!
    releaseYear: Int
    rating: Float
    inStock: Boolean!
  }
`;



// Resolvers
const resolvers = {
  Query: {
    title() {
      return 'War of the Worlds';
    },
    price() {
      return 19.99;
    },
    releaseYear() {
      return 1953;
    },
    rating() {
      return 5.0;
    },
    inStock() {
      return true;
    }
  }
};


const server = new GraphQLServer({
  typeDefs,
  resolvers
});


server.start(() => {
  console.log('Server status: UP');
});
