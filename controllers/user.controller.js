// controllers/user.controller.js
const User = require("../models/user.model");

exports.getAllUsers = function (req, res) {
  User.getAll(function (err, data) {
    if (err) res.status(500).send({ message: "Error retrieving users" });
    else res.send(data);
  });
};

exports.getUserById = function (req, res) {
  User.getById(req.params.id, function (err, data) {
    if (err) res.status(500).send({ message: "Error retrieving user" });
    else if (!data) res.status(404).send({ message: "User not found" });
    else res.send(data);
  });
};

exports.createUser = function (req, res) {
  const newUser = {
    name: req.body.name,
    email: req.body.email,
    age: req.body.age,
  };

  User.create(newUser, function (err, data) {
    if (err) res.status(500).send({ message: "Error creating user" });
    else res.status(201).send(data);
  });
};

exports.updateUser = function (req, res) {
  const updatedUser = {
    name: req.body.name,
    email: req.body.email,
    age: req.body.age,
  };

  User.update(req.params.id, updatedUser, function (err, data) {
    if (err) res.status(500).send({ message: "Error updating user" });
    else res.send(data);
  });
};

exports.deleteUser = function (req, res) {
  User.delete(req.params.id, function (err, data) {
    if (err) res.status(500).send({ message: "Error deleting user" });
    else res.send({ message: "User deleted successfully!" });
  });
};
