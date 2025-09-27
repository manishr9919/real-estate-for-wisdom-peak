
import paginate from "../utils/paginate.js";
import mongoose from "mongoose";
import Property from "../models/property.model.js";

const propertyService = {
  getAll: async (page, limit) => {
    const total = await Property.countDocuments();
    const properties = await Property.find()
      .skip((page - 1) * limit)
      .limit(Number(limit));
    return paginate(properties, page, limit, total);
  },

  getById: async (id) => {
    // handle both ObjectId and string
    if (mongoose.Types.ObjectId.isValid(id)) {
      return await Property.findById(id);
    }
    return await Property.findOne({ _id: id });
  },

  search: async (query, bhk, location) => {
    let filter = {};
    if (bhk) filter.bhk = bhk;
    if (location) filter.location = new RegExp(location, "i");

    let results = await Property.find(filter);

    if (query) {
      results = results.filter(
        (p) =>
          p.title.toLowerCase().includes(query.toLowerCase()) ||
          p.description.toLowerCase().includes(query.toLowerCase())
      );
    }
    return results;
  },

  recommend : async (id) => {
  let property;

  // Try ObjectId first
  if (mongoose.Types.ObjectId.isValid(id)) {
    property = await Property.findById(id);
  }

  // Fallback to string _id
  if (!property) {
    property = await Property.findOne({ _id: id });
  }

  // If property not found, return empty array
  if (!property) return [];

  // Find other properties with same location & bhk
  const recommendations = await Property.find({
    _id: { $ne: property._id },  // exclude the original property
    location: property.location,
    bhk: property.bhk
  }).limit(3);

  return recommendations;
}
};

export default propertyService;
