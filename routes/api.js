// Here we will store the routes for the back end

// Require the models and express router
const router = require("express").Router();
const { Workout } = require("../models");

// Post the information of the model
// Create the method so the user can create their workouts
router.post("/api/workout", ({ body }, res) => {
    Workout.create(body)
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  module.exports = router;

  // Create: POST
  // READ: GET
  // UPDATE: PUT OR PATCH OR (POST)
  // DELATE: DELATE
  