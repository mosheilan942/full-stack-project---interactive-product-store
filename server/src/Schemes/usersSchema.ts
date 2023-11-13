import { number } from 'joi';
import mongoose, { Schema, Document, Model } from 'mongoose';
import { Number } from 'mongoose';


export interface User  {
  name: string;
  email: string;
  password: string;
}


const userSchema = new Schema<User>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      minlength: 5,
      validate: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
    },
    password: {
      type: String,
      required: false,
      min: 7,
      max: 20
    },
  },
  {
    timestamps: true,
  }
);

export const UserModel = mongoose.model<User>('User', userSchema);


export const insertuser = async () => {
  const userr = {
      name: 'rhgr',
      email: 'hyhnhy@gmail.com',
      password: 'sthnring;'
  }
  try {
     const newr = new UserModel(userr)
     newr.save();
  } catch (err) {
     console.log('gfh');
      throw err
  }
}
