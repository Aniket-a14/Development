import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import Info from "./models/info.js";
const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

const start = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/Information");
    console.log("Database connected");
  } catch (e) {
    console.error("Error connecting to the database", e);
  }
};

start();

app.post("/", async (req, res) => {
  try {
    const { firstName, lastName, phone, remarks } = req.body;
    const newInfo = new Info({
      firstName: firstName,
      lastName: lastName,
      phone: phone,
      remarks: remarks || "",
    });
    await newInfo.save();
    res.status(201).json({ message: "Data saved successfully" });
  } catch (error) {
    res.status(404).json({ message: "Error occured from the database" });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
