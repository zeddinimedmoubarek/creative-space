import User from "../models/user.model.js";

//GET APIs
export const getUsers = async (req, res) => {
  try {
    const allUsers = await User.find();
    res.status(200).json(allUsers);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getUser = async (req, res) => {
  try {
    //const user = await User.findById(req.params.id);
    const user = await User.findOne(req.body);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    //const user = await User.findOne(req.body);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getAllAdmins = async (req, res) => {
  try {
    const admins = await User.find({ isAdmin: true });
    res.status(200).json(admins);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//POST APIs
export const createUser = async (req, res) => {
  const newUser = new User({
    isAdmin: req.body.isAdmin ? req.body.isAdmin : false,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    userName: req.body.userName,
    password: req.body.password,
    email: req.body.email,
  });
  try {
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

//PUT APIs
export const updateUser = async (req, res) => {
  const user = req.body;

  try {
    await User.findByIdAndUpdate(req.params.id, user);
    res.status(200).json(user);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

//DELETE APIs
export const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndRemove(req.params.id);
    res.status(200).json("User deleted successfully");
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
