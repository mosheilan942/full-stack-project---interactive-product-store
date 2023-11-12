import mongoose, { Schema, Document } from 'mongoose';
import type WashingMachine from "../types/washingMachines"
import washingMachines from "../data/WashingMachineData";

// Create a Mongoose schema
const washingMachineSchema: any = new Schema<WashingMachine>({
  name: String,
  brand: String,
  model: String,
  color: String,
  price: Number,
  category: String,
  energyRating: String,
  dimensions: {
    height: Number,
    width: Number,
    depth: Number,
    weight: Number,
  },
  quantity: Number,
  description: String,
  image: String,
  addresses: [String],
});

// Create a Mongoose model
const WashingMachineModel = mongoose.model<WashingMachine & Document>('WashingMachine', washingMachineSchema);

// Connect to MongoDB
async function connectToDatabase() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/fullstack');
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}
connectToDatabase();

// data
const washingMachinesData: WashingMachine[] = washingMachines


// Insert data into MongoDB
async function insertData() {
  try {
    // Use a loop to insert each document
    for (const washingMachine of washingMachinesData) {
      await WashingMachineModel.create(washingMachine);
    }
    console.log('Washing machines data inserted successfully.');
  } catch (error) {
    console.error('Error inserting washing machines data:', error);
  } finally {
    // Close the connection after insertion
    mongoose.disconnect();
  }
}

// Call the function to insert data
insertData();
