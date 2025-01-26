import mongoose from "mongoose";

const comschema = new mongoose.Schema({
    name: String,
    salary: Number, 
    
})

const Company = mongoose.model("Company", comschema)

export default Company;