// models/user.model.js
const db = require("../config/db.config");

const User = {
  getAll: function (result) {
    db.query("SELECT * FROM users", function (err, res) {
      if (err) {
        console.error("Error fetching users:", err);
        result(err, null);
        return;
      }
      result(null, res);
    });
  },

  getById: function (id, result) {
    db.query("SELECT * FROM users WHERE id = ?", [id], function (err, res) {
      if (err) {
        console.error("Error fetching user:", err);
        result(err, null);
        return;
      }
      result(null, res[0]);
    });
  },

  create: function (newUser, result) {
    db.query("INSERT INTO users SET ?", newUser, function (err, res) {
      if (err) {
        console.error("Error creating user:", err);
        result(err, null);
        return;
      }
      result(null, { id: res.insertId, ...newUser });
    });
  },

  update: function (id, user, result) {
    db.query(
      "UPDATE users SET name = ?, email = ?, age = ? WHERE id = ?",
      [user.name, user.email, user.age, id],
      function (err, res) {
        if (err) {
          console.error("Error updating user:", err);
          result(err, null);
          return;
        }
        result(null, { id, ...user });
      }
    );
  },

  delete: function (id, result) {
    db.query("DELETE FROM users WHERE id = ?", id, function (err, res) {
      if (err) {
        console.error("Error deleting user:", err);
        result(err, null);
        return;
      }
      result(null, res);
    });
  },
};

module.exports = User;
