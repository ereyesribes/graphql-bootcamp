"use strict";

import { GraphQLServer } from 'graphql-yoga';


// Schema
const typeDefs = `
  type Query {
    id: ID!
    name: String!
    age: Int!
    employed: Boolean!
    gpa: Float
  }
`;



// Resolvers
const resolvers = {
  Query: {
    id() {
      return 'abc123';
    },
    name() {
      return 'Javier Reyes'
    },
    age() {
      return 23;
    },
    employed() {
      return true;
    },
    gpa() {
      return null;
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
