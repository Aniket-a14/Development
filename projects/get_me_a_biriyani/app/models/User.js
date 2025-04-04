import mongoose from "mongoose";

const { Schema, model, models } = mongoose;

const UserSchema = new Schema({
  email: { type: String, required: true, unique: true }, // Ensuring email uniqueness
  name: { type: String },
  username: { type: String, required: true, unique: true }, // Prevent duplicate usernames
  profilepic: { type: String },
  coverpic: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const User = models.User || model("User", UserSchema);

export default User;
