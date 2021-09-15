const sequelize = require("../config/connection");
const { User, Post } = require("../models");

const userdata = [
  {
    username: "jaysarmiento",
    email: "jsarmiento@tech.ca",
    password: "password123",
  },
  {
    username: "csarmiento",
    email: "csarmiento@tech.ca",
    password: "password123",
  },
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;
