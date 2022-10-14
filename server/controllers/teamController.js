const User = require("../models/user");
const Team = require("../models/team");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.createTeam = async (req, res) => {
  try {
    const user_doc = await User.find({ department: department }).lean().exec();

    const member = new User
    const created = await Team.create({
      name: user_doc.department,
      description: "",
      members: [],
      messages: [],
      createdOn: Date.now(),
    });
  } catch (err) {}
};
