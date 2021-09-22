const sequelize = require("../config/connection");
const { User, Post } = require("../models");

const userdata = [
  {
    username: "jsarmiento",
    email: "jsarmiento@tech.ca",
    password: "password",
  },
  {
    username: "csarmiento",
    email: "csarmiento@tech.ca",
    password: "password",
  },
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;
