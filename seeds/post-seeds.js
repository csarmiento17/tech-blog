const { Post } = require("../models");

const postdata = [
  {
    title: "The quick brown fox jumps over the lazy dog",
    description: "Jeff Fox",
    comment_id: 1,
    comment_text: "Comment ",
    user_id: 1,
  },
  {
    title: "Lorem ipsum",
    description: "French",
    comment_id: 1,
    comment_text: "Comment 2",
    user_id: 2,
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
