// Here we will store all the mongoose models to seed them with the data

// Import monggose and mongoose schema
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Then pass a js object definign the schema of our model, here we will see how the data will look like

const WorkoutSchema = new Schema({
  // Here is the model defining the date of the workout it goes on the top of the model
  date: {
    type: Schema.Types.Date,
    unique: true,
  },
  // Define the excercises
  excercises: [
    {
      type: String,
      name: String,
      duration: Number,
      weight: Number,
      reps: Number,
      sets: Number,
      unique: true,
    },
  ],
});

// Add a constant to store the model name, and the schema of the model stored on WorkoutSchema
const Workout = mongoose.model("Workout", WorkoutSchema);

// Export the model file
module.exports = Workout;
