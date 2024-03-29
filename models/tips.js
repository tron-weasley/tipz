var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new LibrarySchema object
// This is similar to a Sequelize model
var TipsSchema = new Schema({
  Tips: Number,
  date: Date, 
});

// This creates our model from the above schema, using mongoose's model method
var Tips = mongoose.model("Tips", TipsSchema);

// Export the Book model
module.exports = Tips;
