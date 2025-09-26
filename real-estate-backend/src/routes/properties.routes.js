import express from "express";
import {
  getAllProperties,
  getPropertyById,
  searchProperties,
  getRecommendations,
} from "../controllers/properties.controller.js";

const router = express.Router();

router.get("/", getAllProperties);
router.get("/:id", getPropertyById);
router.get("/search/query", searchProperties);
router.get("/recommendations/:id", getRecommendations);

export default router;
