const { Comment } = require("../models");

const commentdata = [
  {
    comment_text: "Wisdom is easily acquired when hiding under the bed with a saucepan on your head.",
    user_id: 1,
    post_id: 1,
  },
  {
    comment_text:
      "Tomatoes make great weapons when water balloons aren’t available.",
    user_id: 2,
    post_id: 2,
  },
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
