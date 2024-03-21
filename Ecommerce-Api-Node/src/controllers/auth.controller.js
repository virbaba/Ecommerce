const userService = require("../services/user.service.js");
const jwtProvider = require("../config/jwtProvider.js");
const bcrypt = require("bcrypt");
const cartService = require("../services/cart.service.js");

const register = async (req, res) => {
  try {
    // Check if user with provided email already exists
    const existingUser = await userService.getUserByEmail(req.body.email);

    if (existingUser) {
      return res
        .status(400)
        .send({ message: "User with this email already exists" });
    }

    // If user doesn't exist, create a new user
    const user = await userService.createUser(req.body);
    const jwt=jwtProvider.generateToken(user._id);
    
    await cartService.createCart(user);

    return res.status(200).send({ jwt, message: "Registration successful" });
  } catch (error) {
    return res.status(500).send({ error: "error in registration" });
  }
};
const login = async (req, res) => {
  const { password, email } = req.body;
  try {
    const user = await userService.getUserByEmail(email);
    // console.log(user)

    if (!user) {
      return res
        .status(404)
        .json({ message: "User not found With Email ", email });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid password" });
    }

    const jwt = jwtProvider.generateToken(user._id);

    return res.status(200).send({ jwt, message: "login success" });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};
module.exports = { register, login };
