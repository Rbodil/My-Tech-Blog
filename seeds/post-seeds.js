const { Post } = require('../models');

const postdata = [
  {
    title: 'Donec posuere metus vitae ipsum.',
    post_text: `How much wood would a woodchuck chuck if a wood chuck could chuck wood? The truth is the woodchuck would chuck as much wood as a woodchuck could chuck.
    Run run run, as fast as you can, you can't catch me I'm the gingerbread man. Kramer, what is going on in there? We're contemplating the orb Jerry.
    Rule number 1) No killing, ever.  Rule 2) Label everything in the refrigerator.`,
    user_id: 4
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    post_text: `How much wood would a woodchuck chuck if a wood chuck could chuck wood? The truth is the woodchuck would chuck as much wood as a woodchuck could chuck.
    Run run run, as fast as you can, you can't catch me I'm the gingerbread man. Kramer, what is going on in there? We're contemplating the orb Jerry.
    Rule number 1) No killing, ever.  Rule 2) Label everything in the refrigerator.`,
    user_id: 5
  },
  {
    title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    post_text: `How much wood would a woodchuck chuck if a wood chuck could chuck wood? The truth is the woodchuck would chuck as much wood as a woodchuck could chuck.
    Run run run, as fast as you can, you can't catch me I'm the gingerbread man. Kramer, what is going on in there? We're contemplating the orb Jerry.
    Rule number 1) No killing, ever.  Rule 2) Label everything in the refrigerator.`,
    user_id: 6
  },
  {
    title: 'Nunc purus.',
    post_text: `How much wood would a woodchuck chuck if a wood chuck could chuck wood? The truth is the woodchuck would chuck as much wood as a woodchuck could chuck.
    Run run run, as fast as you can, you can't catch me I'm the gingerbread man. Kramer, what is going on in there? We're contemplating the orb Jerry.
    Rule number 1) No killing, ever.  Rule 2) Label everything in the refrigerator.`,
    user_id: 7
  },
  {
    title: 'Pellentesque eget nunc.',
    post_text: `How much wood would a woodchuck chuck if a wood chuck could chuck wood? The truth is the woodchuck would chuck as much wood as a woodchuck could chuck.
    Run run run, as fast as you can, you can't catch me I'm the gingerbread man. Kramer, what is going on in there? We're contemplating the orb Jerry.
    Rule number 1) No killing, ever.  Rule 2) Label everything in the refrigerator.`,
    user_id: 8
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    post_text: `How much wood would a woodchuck chuck if a wood chuck could chuck wood? The truth is the woodchuck would chuck as much wood as a woodchuck could chuck.
    Run run run, as fast as you can, you can't catch me I'm the gingerbread man. Kramer, what is going on in there? We're contemplating the orb Jerry.
    Rule number 1) No killing, ever.  Rule 2) Label everything in the refrigerator.`,
    user_id: 9
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post_text: `How much wood would a woodchuck chuck if a wood chuck could chuck wood? The truth is the woodchuck would chuck as much wood as a woodchuck could chuck.
    Run run run, as fast as you can, you can't catch me I'm the gingerbread man. Kramer, what is going on in there? We're contemplating the orb Jerry.
    Rule number 1) No killing, ever.  Rule 2) Label everything in the refrigerator.`,
    user_id: 1
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    post_text: `How much wood would a woodchuck chuck if a wood chuck could chuck wood? The truth is the woodchuck would chuck as much wood as a woodchuck could chuck.
    Run run run, as fast as you can, you can't catch me I'm the gingerbread man. Kramer, what is going on in there? We're contemplating the orb Jerry.
    Rule number 1) No killing, ever.  Rule 2) Label everything in the refrigerator.`,
    user_id: 2
  },
  {
    title: 'Duis ac nibh.',
    post_text: `How much wood would a woodchuck chuck if a wood chuck could chuck wood? The truth is the woodchuck would chuck as much wood as a woodchuck could chuck.
    Run run run, as fast as you can, you can't catch me I'm the gingerbread man. Kramer, what is going on in there? We're contemplating the orb Jerry.
    Rule number 1) No killing, ever.  Rule 2) Label everything in the refrigerator.`,
    user_id: 3
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
