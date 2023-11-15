import mongoose, { Schema, Document, Model, Types } from 'mongoose';
import type { IorderItem } from './databaseInitialization' 


export interface User {
  name: string;
  email: string;
  password: string;
  cart: IorderItem[] | []
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
    cart: [{
      productId: {type: Schema.Types.ObjectId, default: null, ref: 'Product', required: true},
      quantity: {type: Number, default:0, required: true},
      price: {type: Number, default:0, required: true}
    }]
  },
  {
    timestamps: true,
  }
);

export const UserModel = mongoose.model<User>('User', userSchema);


export const insertuser = async () => {
  const user = {
    name: 'moshe he poch',
    email: 'hyhnhy@gmail.com',
    password: 'sthnring;'
  }
  try {
    const newuser = new UserModel(user)
    newuser.save();
  } catch (err) {
    throw err
  }
}
