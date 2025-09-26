import mongoose from "mongoose";
import dotenv from "dotenv";
import Property from "../models/property.model.js";

dotenv.config();

const properties =[
  { "title": "2BHK Flat in Cyberhub", "location": "Gurgaon", "price": 45000, "bhk": 2, "type": "Apartment", "description": "Modern 2BHK apartment near Cyberhub." },
  { "title": "Luxury Villa in Noida", "location": "Noida", "price": 90000, "bhk": 4, "type": "Villa", "description": "Spacious 4BHK villa with garden." },
  { "title": "1BHK Studio in Bangalore", "location": "Bangalore", "price": 25000, "bhk": 1, "type": "Studio", "description": "Affordable 1BHK studio in Whitefield." },
  { "title": "3BHK Apartment in Mumbai", "location": "Mumbai", "price": 75000, "bhk": 3, "type": "Apartment", "description": "Sea-facing 3BHK apartment in Bandra." },
  { "title": "2BHK House in Pune", "location": "Pune", "price": 40000, "bhk": 2, "type": "House", "description": "Peaceful 2BHK house near Hinjewadi." },
  { "title": "3BHK Penthouse in Hyderabad", "location": "Hyderabad", "price": 85000, "bhk": 3, "type": "Penthouse", "description": "Luxury penthouse with skyline view." },
  { "title": "1BHK Flat in Delhi", "location": "Delhi", "price": 30000, "bhk": 1, "type": "Apartment", "description": "Compact 1BHK flat in South Delhi." },
  { "title": "4BHK Villa in Gurgaon", "location": "Gurgaon", "price": 120000, "bhk": 4, "type": "Villa", "description": "Premium villa with private pool." },
  { "title": "2BHK Apartment in Noida", "location": "Noida", "price": 35000, "bhk": 2, "type": "Apartment", "description": "Budget-friendly 2BHK near Sector 62." },
  { "title": "3BHK Independent House in Chennai", "location": "Chennai", "price": 60000, "bhk": 3, "type": "House", "description": "Spacious independent house in Adyar." },
  { "title": "2BHK Flat in Bangalore", "location": "Bangalore", "price": 42000, "bhk": 2, "type": "Apartment", "description": "Cozy 2BHK near Electronic City." },
  { "title": "5BHK Luxury Villa in Mumbai", "location": "Mumbai", "price": 200000, "bhk": 5, "type": "Villa", "description": "Ultra-luxury villa in Juhu." },
  { "title": "Studio Apartment in Pune", "location": "Pune", "price": 18000, "bhk": 1, "type": "Studio", "description": "Compact studio near Koregaon Park." },
  { "title": "3BHK Apartment in Hyderabad", "location": "Hyderabad", "price": 55000, "bhk": 3, "type": "Apartment", "description": "Modern apartment in Gachibowli." },
  { "title": "2BHK Flat in Kolkata", "location": "Kolkata", "price": 32000, "bhk": 2, "type": "Apartment", "description": "Well-connected flat in Salt Lake." },
  { "title": "4BHK Villa in Bangalore", "location": "Bangalore", "price": 95000, "bhk": 4, "type": "Villa", "description": "Spacious villa in Indiranagar." },
  { "title": "1BHK Flat in Gurgaon", "location": "Gurgaon", "price": 28000, "bhk": 1, "type": "Apartment", "description": "Affordable 1BHK near MG Road." },
  { "title": "3BHK Apartment in Pune", "location": "Pune", "price": 50000, "bhk": 3, "type": "Apartment", "description": "Modern apartment near Kharadi IT Park." },
  { "title": "2BHK House in Chennai", "location": "Chennai", "price": 38000, "bhk": 2, "type": "House", "description": "Comfortable house in Velachery." },
  { "title": "Luxury Penthouse in Delhi", "location": "Delhi", "price": 150000, "bhk": 4, "type": "Penthouse", "description": "Premium penthouse with city views." }
]


mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    await Property.deleteMany();
    await Property.insertMany(properties);
    console.log("✅ Database seeded successfully!");
    process.exit();
  })
  .catch((err) => {
    console.error("❌ Seeding failed:", err);
    process.exit(1);
  });
