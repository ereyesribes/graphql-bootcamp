"use strict";

import { GraphQLServer, PubSub } from 'graphql-yoga';
import db from './db';

import Query from './resolvers/Query.js';
import Mutation from './resolvers/Mutation.js';
import Subscription from './resolvers/Subscription.js';

import User from './resolvers/User.js';
import Post from './resolvers/Post.js';
import Comment from './resolvers/Comment.js';

const pubSub = new PubSub()


const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers: {
    Query,
    Mutation,
    Subscription,
    Post,
    User,
    Comment
  },
  context: {
    db,
    pubSub
  }
});


server.start(() => {
  console.log('Server status: UP');
});
