import mongoose, { Schema, Document } from 'mongoose';
import type Refrigerator from "../types/refrigerators";
import refrigerators from "../data/refrigeratorData";

// Create a Mongoose schema
const refrigeratorSchema: any = new Schema<Refrigerator>({
    name: String,
    brand: String,
    model: String,
    category: String,
    color: String,
    price: Number,
    freezerLocation: String,
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
export const RefrigeratorModel = mongoose.model<Refrigerator & Document>('Refrigerator', refrigeratorSchema)

// data
const refrigeratorsData: Refrigerator[] = refrigerators

// Connect to MongoDB
async function connectToDatabase() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/fullstack');
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}
// connectToDatabase();

// Insert data into MongoDB
async function insertData() {
    try {
      // Use a loop to insert each document
      for (const refrigerator of refrigeratorsData) {
        await RefrigeratorModel.create(refrigerator);
      }
      
    console.log('Refrigerators data inserted successfully.');
    } catch (error) {
        console.error('Error inserting refrigerators data:', error);
    } finally {
      // Close the connection after insertion
      mongoose.disconnect();
    }
  }
  
  // Call the function to insert data
  insertData();