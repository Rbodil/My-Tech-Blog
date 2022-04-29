const { Post } = require('../models');

const postdata = [
  {
    title: 'REEEEEEEEE',
    post_text: `How much wood would a woodchuck chuck if a wood chuck could chuck wood? The truth is the woodchuck would chuck as much wood as a woodchuck could chuck.`,
    user_id: 4
  },
  {
    title: 'RREEEEEEEEE',
    post_text: `How much wood would a woodchuck chuck if a wood chuck could chuck wood? The truth is the woodchuck would chuck as much wood as a woodchuck could chuck.`,
    user_id: 5
  },
  {
    title: 'RRREEEEEEEEEE',
    post_text: `How much wood would a woodchuck chuck if a wood chuck could chuck wood? The truth is the woodchuck would chuck as much wood as a woodchuck could chuck.`,
    user_id: 6
  },
  {
    title: 'Mi Primera Status',
    post_text: `Run run run, as fast as you can, you can't catch me I'm the gingerbread man. Kramer, what is going on in there? We're contemplating the orb Jerry.`,
    user_id: 7
  },
  {
    title: 'Mi Segunda Status',
    post_text: `Run run run, as fast as you can, you can't catch me I'm the gingerbread man. Kramer, what is going on in there? We're contemplating the orb Jerry.`,
    user_id: 8
  },
  {
    title: 'Mi Tercera Status',
    post_text: `Run run run, as fast as you can, you can't catch me I'm the gingerbread man. Kramer, what is going on in there? We're contemplating the orb Jerry.`,
    user_id: 9
  },
  {
    title: 'My First Post',
    post_text: `Rule number 1) No killing, ever.  Rule 2) Label everything in the refrigerator.`,
    user_id: 1
  },
  {
    title: 'My Second Post.',
    post_text: `Rule number 1) No killing, ever.  Rule 2) Label everything in the refrigerator.`,
    user_id: 2
  },
  {
    title: 'My third post',
    post_text: `Rule number 1) No killing, ever.  Rule 2) Label everything in the refrigerator.`,
    user_id: 3
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
