import mongoose from "mongoose";


const infoschema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    phone: Number,
    remarks: String
})

const Info = mongoose.model("Info", infoschema);

export default Info;