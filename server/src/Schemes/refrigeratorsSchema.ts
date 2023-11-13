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
},
  {
    timestamps: true,
  }
);

// Create a Mongoose model
export const RefrigeratorModel = mongoose.model('Refrigerator', refrigeratorSchema)

// data
const refrigeratorsData: Refrigerator[] = refrigerators

// Insert data into MongoDB
export async function insertDataRefrigerator() {
  try {
    // Use a loop to insert each document
    for (const refrigerator of refrigeratorsData) {
      const newdata = new RefrigeratorModel(refrigerator);
      await newdata.save()
    }
    console.log('Refrigerators data inserted successfully.');
  } catch (error) {
    console.error('Error inserting refrigerators data:', error);
  }
}

// Call the function to insert data
