import mongoose, { Schema, Document } from 'mongoose';
import type CellPhone from "../types/cellPhone"
import cellPhones from "../data/cellPhoneData"


// Create a Mongoose schema
const cellPhoneSchema: any = new Schema<CellPhone>({
  name: String,
  manufacturer: String,
  model: String,
  color: String,
  isKosher: Boolean,
  category: String,
  price: Number,
  screenSize: Number,
  dimensions: {
    height: Number,
    length: Number,
    width: Number,
    weight: Number,
  },
  quantity: Number,
  description: String,
  image: String,
  addresses: [String],
});

// Create a Mongoose model
export const CellPhoneModel = mongoose.model<CellPhone & Document>('CellPhone', cellPhoneSchema);

// Connect to MongoDB


// data
const cellPhonesData: CellPhone[] = cellPhones

// Insert data into MongoDB
async function insertData() {
  try {
    // Use a loop to insert each document
    for (const cellPhone of cellPhonesData) {
      await CellPhoneModel.create(cellPhone);
    }
    console.log('Data cellPhone inserted successfully.');
  } catch (error) {
    console.error('Error inserting cellPhone data:', error);
  } finally {
    // Close the connection after insertion
    mongoose.disconnect();
  }
}

// Call the function to insert data
insertData();