const { users } = require("../model/index");
const bcrypt = require("bcryptjs");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the email is registered
    const userFound = await users.findAll({
      where: {
        email: email,
      },
    });

    // If no user is found, send an error response
    if (userFound.length === 0) {
      return res.status(400).send("Invalid email or password");
    }

    const databasePassword = userFound[0].password;

    // Compare the provided password with the stored password
    const isPasswordCorrect = bcrypt.compareSync(password, databasePassword);

    // If the passwords match, send a success response
    if (isPasswordCorrect) {
      return res.status(200).send("Login Successful");
    } else {
      return res.status(400).send("Invalid email or password");
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error: "Internal server error" });
  }
};

module.exports = {
  login,
};
