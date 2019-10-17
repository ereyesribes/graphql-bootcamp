"use strict";

import { GraphQLServer } from 'graphql-yoga';


// Demo users
const users = [
  {
    id: '1',
    name: 'Javier Reyes',
    email: 'jreyesribes@gmail.com'
  },
  {
    id: '2',
    name: 'Pepe',
    email: 'pepe@example.com',
    age: 20
  },
  {
    id: '3',
    name: 'Mike',
    email: 'mike@example.com'
  }
];

// Demo posts

const posts = [
  {
    id: '1',
    title: 'First post test',
    body: '',
    published: false
  },
  {
    id: '2',
    title: 'Second post test',
    body: 'Content of my second post',
    published: true
  },
  {
    id: '3',
    title: 'Third post',
    body: 'Content of the third post',
    published: true
  },
]


// Schema
const typeDefs = `
  type Query {
    greeting(name:String): String!
    me: User!
    post: Post!
    add(nums: [Float!]!): Float!
    users(query: String): [User!]!
    posts(query: String): [Post!]!
  }

  type User {
    id: ID!
    name: String!
    email: String!
    age: Int
  }

  type Post {
    id: ID!
    title: String!
    body: String!
    published: Boolean!
  }
`;



// Resolvers
const resolvers = {
  Query: {
    greeting(parent, args, ctx, info) {
      if (args.name) {
        return `Hello, ${args.name}!`;
      } else {
        return "hello";
      }
    },
    me() {
      return {
        id: "123098",
        name: "Mike",
        email: "mike@example.com",
        age: 28
      };
    },
    post() {
      return {
        id: "473912",
        title: "Titulo del post",
        body: "Cuerpo del post",
        published: true
      };
    },
    add(parent, args, ctx, info) {
      if (args.num.length > 0) {
        return args.num.reduce((accum, curr) => {
          return accum + curr;
        });
      } else {
        return 0;
      }
    },

    users(parent, args, ctx, info) {
      if (!args.query) {
        return users;
      }

      return users.filter((user) => {
        return user.name.toLowerCase().includes(args.query);
      });
    },

    posts(parent, args, ctx, info) {
      if (!args.query) {
        return posts;
      }

      return posts.filter((post) => {
        return post.title.toLowerCase().includes(args.query);
      });
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
