const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;

// Create and Save a new User
//exports.create = (req, res) => {};

// Retrieve all Users from the database.
//exports.findAll = (req, res) => {};

// Find a single User with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    User.findByPk(id).then(data => {
        if (data) {
            //We don't want to pass passwords or ipaddresses through the api
            const user = {
                id: data.id,
                username: data.username,
                active: data.active,
                priv: data.priv,
                type: data.type,
                first_login: data.first_login,
                last_active: data.last_active,
                added: data.added,
            };
            res.send(user);
        } else {
            res.status(404).send({
                message: `Cannot find User with id=${id}.`
            });
        }
    }).catch(err => {
        res.status(500).send({
            message: "Error retrieving User with id=" + id
        });
    });
};

// Update a User by the id in the request
//exports.update = (req, res) => {};

// Delete a User with the specified id in the request
//exports.delete = (req, res) => {};

// Delete all Users from the database.
//exports.deleteAll = (req, res) => {};

// Find by email (username)
exports.findByEmail = (req, res) => {
    User.findOne({ where: { username: req.params.email } })
      .then(data => {
        res.send({
            id: data.id
        });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving users."
        });
      });
  };