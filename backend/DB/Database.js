import mongoose from "mongoose";
console.log("Connecting to MongoDB URI:", process.env.MONGO_URL);

export const connectDB = async (req, res) => {
    const db = process.env.MONGO_URL;

    const {connection} = await mongoose.connect(db, { useNewUrlParser: true });

    console.log(`MongoDB Connected to ${connection.host}`);

}