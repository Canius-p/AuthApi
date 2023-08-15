const db = require("../model/index");
const User = db.users;
const bcrypt = require("bcryptjs");
//create user login
const createUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send({ error: "internal server error" });
  }
};

module.exports = {
  createUser,
};
