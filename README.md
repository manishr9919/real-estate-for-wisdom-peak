# 🏠 Real Estate Backend API - Mini Project

A **Node.js + Express backend** simulating a **real estate search and recommendation system**.  
Supports **property listing**, **search**, **pagination**, and **recommendations**.

This project is designed to demonstrate **scalable RESTful APIs** with clean code and middleware integration.

---

## 🔧 Tech Stack

- **Backend:** Node.js, Express.js  
- **Database:** MongoDB + Mongoose (or in-memory JSON for testing)  
- **Middleware:** helmet, cors, morgan, express.json()  
- **Environment Variables:** dotenv  

---

## 🏗 Project Structure

---
```
real-estate-backend/
├─ package.json
├─ .env
├─ server.js # App bootstrap
├─ src/
│ ├─ config/
│ │ └─ db.js # MongoDB connection
│ ├─ models/
│ │ └─ property.model.js
│ ├─ routes/
│ │ └─ properties.routes.js
│ ├─ controllers/
│ │ └─ properties.controller.js
│ ├─ services/
│ │ └─ property.service.js
│ ├─ utils/
│ │ ├─ cache.js
│ │ └─ paginate.js
│ ├─ middlewares/
│ │ ├─ errorHandler.js
│ │ └─ notFound.js
│ └─ seed/
│ └─ seed.js # Database seeding
└─ README.md

```
----

> Note: You can also run the project as a **single-file backend** without folders using `server.js`.

---

## 🚀 Features

- ✅ Fetch all properties with **pagination** (`GET /properties`)  
- ✅ Fetch property by **ID** (`GET /properties/:id`)  
- ✅ **Search** properties by keyword, BHK, and location (`GET /properties/search/query`)  
- ✅ Get **recommendations** based on location + BHK (`GET /properties/recommendations/:id`)  
- ✅ Middleware for security (`helmet`), logging (`morgan`), and CORS (`cors`)  
- ✅ Handles 404 endpoints and global errors  
- ✅ Optional seed script for MongoDB to populate 20 sample properties  

---

## 🌐 API Endpoints

| Method | Endpoint | Description | Query Params |
|--------|----------|-------------|--------------|
| GET    | `/` | Health check | - |
| GET    | `/properties` | Fetch all properties | `page`, `limit` |
| GET    | `/properties/:id` | Fetch a property by ID | - |
| GET    | `/properties/search/query` | Search properties | `query`, `bhk`, `location` |
| GET    | `/properties/recommendations/:id` | Get 3 similar properties | - |

---

## 🧪 Example Requests

**1️⃣ Health Check**


```
 http://localhost:5000/
```
**2️⃣ Get All Properties (with pagination)**
```
GET http://localhost:5000/properties?page=1&limit=5
```
**3️⃣ Get Property By ID**
```
http://localhost:5000/properties/<property_id>

```
**4️⃣ Search Properties**
```
 http://localhost:5000/properties/search/query?query=flat&bhk=2&location=Gurgaon

```


**5️⃣ Get Recommendations**
```
http://localhost:5000/properties/recommendations/
<property_id>
```

---

## 🛠️ Installation Guide

### Step 1: Clone the repository

```bash
git clone <your-repo-url>
cd real-estate-backend
```
### Step 2: Install dependencies**
```
npm install express cors helmet morgan dotenv mongoose uuid

```

### Step 3: Create .env file
```
PORT=5000
MONGO_URI=mongodb://localhost:27017/realestate
DATA_SOURCE=mongo
NODE_ENV=development

```
### Step 4: Start the server Development (with nodemon)
```
npm run dev

```
### Production:
```
npm start

```
Server will run at: http://localhost:5000










