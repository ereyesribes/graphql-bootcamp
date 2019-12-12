
const Subscription = {
  count: {
    subscribe(psrents, args, { pub_sub }, info) {
      let count = 0;

      setInterval(() => {
        count++;
        pub_sub.publish('count', {
          count
        });
      }, 1000);

      return pub_sub.asyncIterator('count');
    }
  },
  comment: {
    subscribe(parent, { postId }, { db, pub_sub }, info) {
      const post = db.posts.find((post) => post.id === postId && post.published);

      if (!post) {
        throw new Error("Post not found!");
      }

      return pub_sub.asyncIterator(`comment ${postId}`);
    }
  }
};

export { Subscription as default };
