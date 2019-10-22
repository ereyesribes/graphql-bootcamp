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
    text: 'First comment',
    author: '1',
    post: '2'
  },
  {
    id: '2',
    text: 'Second comment',
    author: '1',
    post: '3'
  },
  {
    id: '3',
    text: 'Third comment',
    author: '2',
    post: '3'
  },
  {
    id: '4',
    text: 'Fourth comment',
    author: '3',
    post: '2'
  },
];


const db = {
  users,
  posts,
  comments
};


export {db as default};
