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
const WashingMachineModel = mongoose.model('WashingMachine', washingMachineSchema);

// data
const washingMachinesData: WashingMachine[] = washingMachines


// Insert data into MongoDB
export async function insertDataWashingMachine() {
  try {
    // Use a loop to insert each document
    for (const washingMachine of washingMachinesData) {
      await WashingMachineModel.create(washingMachine);
    }
    console.log('Washing machines data inserted successfully.');
  } catch (error) {
    console.error('Error inserting washing machines data:', error);
  }
}

// Call the function to insert data

