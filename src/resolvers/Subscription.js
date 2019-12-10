
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
  }
};

export { Subscription as default };
