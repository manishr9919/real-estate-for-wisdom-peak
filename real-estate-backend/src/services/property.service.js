import Property from "../models/property.model.js";
import paginate from "../utils/paginate.js";

const propertyService = {
  getAll: async (page, limit) => {
    const total = await Property.countDocuments();
    const properties = await Property.find()
      .skip((page - 1) * limit)
      .limit(Number(limit));
    return paginate(properties, page, limit, total);
  },

  getById: async (id) => {
    return await Property.findById(id);
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

  recommend: async (id) => {
    const property = await Property.findById(id);
    if (!property) return [];

    return await Property.find({
      _id: { $ne: id },
      location: property.location,
      bhk: property.bhk,
    }).limit(3);
  },
};

export default propertyService;
