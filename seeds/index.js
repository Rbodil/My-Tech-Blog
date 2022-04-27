const seedUsers = require('../../Code Snapshot/seeds/user-seeds');
const seedPosts = require('../../Code Snapshot/seeds/post-seeds');
const seedComments = require('./comment-seeds');
const seedVotes = require('../../Code Snapshot/seeds/vote-seeds');

const sequelize = require('../../Code Snapshot/config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');
  await seedUsers();
  console.log('--------------');

  await seedPosts();
  console.log('--------------');

  await seedComments();
  console.log('--------------');

  await seedVotes();
  console.log('--------------');

  process.exit(0);
};

seedAll();
