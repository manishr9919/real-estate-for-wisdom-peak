import propertyService from "../services/property.service.js";

export const getAllProperties = async (req, res, next) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const result = await propertyService.getAll(page, limit);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

export const getPropertyById = async (req, res, next) => {
  try {
    const property = await propertyService.getById(req.params.id);
    // console.log(req.params.id)
    if (!property) return res.status(404).json({ error: "Property not found" });
    res.json(property);
  } catch (error) {
    next(error);
  }
};

export const searchProperties = async (req, res, next) => {
  try {
    const { query, bhk, location } = req.query;
    const results = await propertyService.search(query, bhk, location);
    res.json(results);
  } catch (error) {
    next(error);
  }
};

export const getRecommendations = async (req, res, next) => {
  try {
    const recommendations = await propertyService.recommend(req.params.id);
    console.log(req.params.id)
    res.json(recommendations);
  } catch (error) {
    res.json("id not found")
    next(error);
  }
};
