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
    published: false,
    author: '1'
  },
  {
    id: '2',
    title: 'Second post test',
    body: 'Content of my second post',
    published: true,
    author: '1'
  },
  {
    id: '3',
    title: 'Third post',
    body: 'Content of the third post',
    published: true,
    author: '2'
  },
];

// Demo comments.

const comments = [
  {
    id: '1',
    text: 'First comment'
  },
  {
    id: '2',
    text: 'Second comment'
  },
  {
    id: '3',
    text: 'Third comment'
  },
  {
    id: '4',
    text: 'Fourth comment'
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
    comments: [Comment!]!
  }

  type User {
    id: ID!
    name: String!
    email: String!
    age: Int
    posts: [Post!]!
  }

  type Post {
    id: ID!
    title: String!
    body: String!
    published: Boolean!
    author: User!
  }

  type Comment {
    id: ID!
    text: String!
    author: User!
    
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
        return user.name.toLowerCase().includes(args.query.toLowerCase());
      });
    },

    posts(parent, args, ctx, info) {
      if (!args.query) {
        return posts;
      }

      return posts.filter((post) => {
        const
          isTitleMatch = post.title.toLowerCase().includes(args.query.toLowerCase()),
          isBodyMatch = post.body.toLowerCase().includes(args.query.toLowerCase());

        return isTitleMatch || isBodyMatch;
      });
    },
    comments() {
      return comments;
    }
  },
  Post: {
    author(parent, args, ctx, info) {
      return users.find((user) => {
        return user.id === parent.author;
      });
    }
  },
  User: {
    posts(parent, args, ctx, info) {
      return posts.filter((post) => {
        return post.author === parent.id;
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
