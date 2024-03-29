var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new LibrarySchema object
// This is similar to a Sequelize model
var MileageSchema = new Schema({
  Mileage: Number,
  date: Date, 
});

// This creates our model from the above schema, using mongoose's model method
var Mileage = mongoose.model("Mileage", MileageSchema);

// Export the Book model
module.exports = Mileage;
