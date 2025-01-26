import express from "express";
import mongoose from "mongoose"; 
import cors from "cors";

// Define the Company schema and model
const companySchema = new mongoose.Schema({
  name: String,
  salary: Number,
});

const Company = mongoose.model("Company", companySchema);

const app = express();
app.use(express.json());
app.use(cors());

const port = 3000;

// Start the server and connect to the database
const start = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/Company", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected");
  } catch (e) {
    console.error("Error connecting to the database", e);
  }
};

start();

// Utility function to get a random element from an array
const getRandom = (arr) => {
  if (arr.length === 0) return null;
  const index = Math.floor(Math.random() * arr.length);
  return arr[index];
};

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/put", async (req, res) => {
  const randomNames = ["Aniket", "Sayak", "Raj", "Rahul"];
  const randomSalaries = [12000, 56333, 66764, 57673];

  try {
    const results = [];
    for (let i = 0; i < 10; i++) {
      const newCompany = new Company({
        name: getRandom(randomNames),
        salary: getRandom(randomSalaries),
      });
      const savedCompany = await newCompany.save();
      results.push(savedCompany);
    }
    res.send(results); // Send all results at once
  } catch (error) {
    res.status(500).send("Error creating companies: " + error.message);
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
