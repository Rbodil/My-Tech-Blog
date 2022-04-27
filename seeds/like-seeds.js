const { Like } = require('..//models');

const likedata = [
  {
    user_id: 1,
    post_id: 4
  },
  {
    user_id: 1,
    post_id: 5
  },
  {
    user_id: 1,
    post_id: 6
  },
  {
    user_id: 2,
    post_id: 7
  },
  {
    user_id: 2,
    post_id: 8
  },
  {
    user_id: 2,
    post_id: 9
  },
  {
    user_id: 3,
    post_id: 1
  },
  {
    user_id: 3,
    post_id: 2
  },
  {
    user_id: 3,
    post_id: 3
  }
];

const seedLikes = () => Like.bulkCreate(likedata);

module.exports = seedLikes;
