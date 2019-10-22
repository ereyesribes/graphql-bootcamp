const Query = {
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

  users(parent, args, { db }, info) {
    if (!args.query) {
      return db.users;
    }

    return db.users.filter((user) => {
      return user.name.toLowerCase().includes(args.query.toLowerCase());
    });
  },

  posts(parent, args, { db }, info) {
    if (!args.query) {
      return db.posts;
    }

    return db.posts.filter((post) => {
      const
        isTitleMatch = post.title.toLowerCase().includes(args.query.toLowerCase()),
        isBodyMatch = post.body.toLowerCase().includes(args.query.toLowerCase());

      return isTitleMatch || isBodyMatch;
    });
  },
  comments(parent, args, { db }, info) {
    return db.comments;
  }
};


export { Query as default };
