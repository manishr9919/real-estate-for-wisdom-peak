import mongoose from "mongoose";
import dotenv from "dotenv";
import Property from "../models/property.model.js";

dotenv.config();

const properties =[
  {
    "_id": "68d6a5aca8ae0273f44c2101",
    "title": "2BHK Flat in Gurgaon 1",
    "location": "Gurgaon",
    "price": 45000,
    "bhk": 2,
    "type": "Apartment",
    "description": "Modern 2BHK apartment near Cyberhub."
  },
  {
    "_id": "68d6a5aca8ae0273f44c2102",
    "title": "2BHK Flat in Gurgaon 2",
    "location": "Gurgaon",
    "price": 46000,
    "bhk": 2,
    "type": "Apartment",
    "description": "Spacious 2BHK apartment with parking."
  },
  {
    "_id": "68d6a5aca8ae0273f44c2103",
    "title": "2BHK Flat in Gurgaon 3",
    "location": "Gurgaon",
    "price": 47000,
    "bhk": 2,
    "type": "Apartment",
    "description": "Cozy 2BHK near MG Road."
  },
  {
    "_id": "68d6a5aca8ae0273f44c2104",
    "title": "3BHK Villa in Noida 1",
    "location": "Noida",
    "price": 90000,
    "bhk": 3,
    "type": "Villa",
    "description": "Luxury villa in Sector 62."
  },
  {
    "_id": "68d6a5aca8ae0273f44c2105",
    "title": "3BHK Villa in Noida 2",
    "location": "Noida",
    "price": 92000,
    "bhk": 3,
    "type": "Villa",
    "description": "Spacious villa near Noida City Center."
  },
  {
    "_id": "68d6a5aca8ae0273f44c2106",
    "title": "3BHK Villa in Noida 3",
    "location": "Noida",
    "price": 94000,
    "bhk": 3,
    "type": "Villa",
    "description": "Premium villa with garden view."
  },
  {
    "_id": "68d6a5aca8ae0273f44c2107",
    "title": "1BHK Studio in Bangalore 1",
    "location": "Bangalore",
    "price": 25000,
    "bhk": 1,
    "type": "Studio",
    "description": "Affordable 1BHK studio in Whitefield."
  },
  {
    "_id": "68d6a5aca8ae0273f44c2108",
    "title": "1BHK Studio in Bangalore 2",
    "location": "Bangalore",
    "price": 26000,
    "bhk": 1,
    "type": "Studio",
    "description": "Compact 1BHK near Electronic City."
  },
  {
    "_id": "68d6a5aca8ae0273f44c2109",
    "title": "1BHK Studio in Bangalore 3",
    "location": "Bangalore",
    "price": 27000,
    "bhk": 1,
    "type": "Studio",
    "description": "Studio apartment near Koramangala."
  },
  {
    "_id": "68d6a5aca8ae0273f44c2110",
    "title": "3BHK Apartment in Mumbai 1",
    "location": "Mumbai",
    "price": 75000,
    "bhk": 3,
    "type": "Apartment",
    "description": "Sea-facing 3BHK apartment in Bandra."
  },
  {
    "_id": "68d6a5aca8ae0273f44c2111",
    "title": "3BHK Apartment in Mumbai 2",
    "location": "Mumbai",
    "price": 76000,
    "bhk": 3,
    "type": "Apartment",
    "description": "Modern 3BHK in Andheri."
  },
  {
    "_id": "68d6a5aca8ae0273f44c2112",
    "title": "3BHK Apartment in Mumbai 3",
    "location": "Mumbai",
    "price": 77000,
    "bhk": 3,
    "type": "Apartment",
    "description": "Spacious 3BHK near Juhu Beach."
  },
  {
    "_id": "68d6a5aca8ae0273f44c2113",
    "title": "2BHK House in Pune 1",
    "location": "Pune",
    "price": 40000,
    "bhk": 2,
    "type": "House",
    "description": "Peaceful 2BHK house near Hinjewadi."
  },
  {
    "_id": "68d6a5aca8ae0273f44c2114",
    "title": "2BHK House in Pune 2",
    "location": "Pune",
    "price": 42000,
    "bhk": 2,
    "type": "House",
    "description": "Cozy 2BHK near Kharadi IT Park."
  },
  {
    "_id": "68d6a5aca8ae0273f44c2115",
    "title": "2BHK House in Pune 3",
    "location": "Pune",
    "price": 43000,
    "bhk": 2,
    "type": "House",
    "description": "2BHK house near Pune Station."
  },
  {
    "_id": "68d6a5aca8ae0273f44c2116",
    "title": "3BHK Apartment in Hyderabad 1",
    "location": "Hyderabad",
    "price": 55000,
    "bhk": 3,
    "type": "Apartment",
    "description": "Modern apartment in Gachibowli."
  },
  {
    "_id": "68d6a5aca8ae0273f44c2117",
    "title": "3BHK Apartment in Hyderabad 2",
    "location": "Hyderabad",
    "price": 56000,
    "bhk": 3,
    "type": "Apartment",
    "description": "Luxury 3BHK near HITEC City."
  },
  {
    "_id": "68d6a5aca8ae0273f44c2118",
    "title": "3BHK Apartment in Hyderabad 3",
    "location": "Hyderabad",
    "price": 57000,
    "bhk": 3,
    "type": "Apartment",
    "description": "3BHK apartment with parking."
  },
  {
    "_id": "68d6a5aca8ae0273f44c2119",
    "title": "2BHK Flat in Chennai 1",
    "location": "Chennai",
    "price": 38000,
    "bhk": 2,
    "type": "Apartment",
    "description": "Comfortable 2BHK in Velachery."
  },
  {
    "_id": "68d6a5aca8ae0273f44c2120",
    "title": "2BHK Flat in Chennai 2",
    "location": "Chennai",
    "price": 39000,
    "bhk": 2,
    "type": "Apartment",
    "description": "Modern 2BHK near Adyar."
  }
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
