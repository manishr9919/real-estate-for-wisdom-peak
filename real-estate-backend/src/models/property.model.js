import mongoose from "mongoose";

const propertySchema = new mongoose.Schema({
  title: String,
  location: String,
  price: Number,
  bhk: Number,
  type: String,
  description: String,
});

const Property = mongoose.model("Property", propertySchema);

export default Property;
