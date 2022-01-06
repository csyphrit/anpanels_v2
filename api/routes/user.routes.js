module.exports = app => {
    const users = require("../controllers/user.controller.js");
  
    var router = require("express").Router();
  
    // Create a new User
    //router.post("/", users.create);
  
    // Retrieve all Users
    //router.get("/", users.findAll);
  
    // Retrieve a single Users with id
    router.get("/:id", users.findOne);

    // Retrieve a singer User by Email Address
    //router.get("/:email", users.findByEmail);
  
    // Update a User with id
    //router.put("/:id", tutorials.update);
  
    // Delete a User with id
    //router.delete("/:id", tutorials.delete);

    app.use('/api/users', router);
  };