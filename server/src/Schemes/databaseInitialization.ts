import { Schema, model, connect, SchemaDefinitionProperty, Types } from 'mongoose';
import { insertuser } from './usersSchema';
import cellPhonesArray from '../data/cellPhoneData';
import refrigeratorsArray from '../data/refrigeratorData';
import washingMachinesArray from '../data/WashingMachineData';
import MicrowavesArray from '../data/MicrowavesData';
import SpeakersArray from '../data/SpeakersData';
import televisionsArray from '../data/televisionsData';
import VacuumCleanersArray from '../data/VacuumCleanersData';


interface Iproducts {
    name: string
    manufacturer: string
    model: string
    price: number
    rating: number
    date: SchemaDefinitionProperty<number, Iproducts> | undefined
    // categoryID?: Types.ObjectId,
    color: string;
    dimensions?: {
        height: number;
        length: number;
        width: number;
        weight: number;
    };
    quantity: number;
    description: string;
    image: string;
    addresses: string[];
    categoryDetails: string
    categoryType: string
}

interface Icategories {
    name: string
    rating: number
    image: string
    product: Types.ObjectId
}

export interface IorderItem {
    productId: Types.ObjectId
    quantity: number
    price: number
};

interface Iorder {
    userId: Types.ObjectId
    date: SchemaDefinitionProperty<number, Iproducts> | undefined
    totalPrice: number
    items: Types.ObjectId
};

const orderItemSchema = new Schema<IorderItem>({
    productId: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true }
});

const orderSchema = new Schema<Iorder>({
    userId: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    date: { type: Date, required: true },
    totalPrice: { type: Number, required: true },
    items: [{ type: Schema.Types.ObjectId, ref: 'Product', required: true }]
})


const categoriesSchema = new Schema<Icategories>({
    name: { type: String, required: true },
    rating: { type: Number, default: 0, required: true },
    product: [{ type: Schema.Types.ObjectId, ref: 'Product', required: true }],
    image: { type: String, default: "https://tinyurl.com/22brmde9", required: true }
})

const productsSchema = new Schema<Iproducts>({
    name: { type: String, required: true },
    manufacturer: { type: String, required: true },
    model: { type: String, required: false },
    price: { type: Number, required: true },
    rating: { type: Number, default: 0, required: true },
    date: { type: Date, default: Date.now },
    // categoryID: { type: Schema.Types.ObjectId, ref: 'Category' }
    color: { type: String, required: false },
    quantity: { type: Number, required: true },
    description: { type: String, required: true },
    image: { type: String, required: false },
    addresses: { type: [String], required: true },
    dimensions: {
        type: Schema.Types.Mixed,
        default: {},
    },
    categoryType: {
        type: String,
        required: true,
        enum: ['cellPhone', 'refrigerator', 'washingMachine',
            'television', 'microwave', 'speaker', 'vacuumCleaner'],
    },
});

const arrayCategories = ['cellPhone', 'refrigerator', 'washingMachine',
    'television', 'microwave', 'speaker', 'vacuumCleaner']

const arrayProducts = [televisionsArray, MicrowavesArray, VacuumCleanersArray,
    SpeakersArray, washingMachinesArray, refrigeratorsArray, cellPhonesArray
]


export const Product = model<Iproducts>('Product', productsSchema);

export const category = model<Icategories>('Category', categoriesSchema);

export const order = model<Iorder>('Order', orderSchema);

// export const orderItem = model<IorderItem>('Category', orderItemSchema);

const cellPhoneDetailsSchema = new Schema({
    dimensions: {
        height: { type: Number, required: true },
        length: { type: Number, required: true },
        width: { type: Number, required: true },
        weight: { type: Number, required: true },
    },
    // screenSize: { type: Number, required: false },
});

const refrigeratorsDetailsSchema = new Schema({
    dimensions: {
        height: { type: Number, required: true },
        width: { type: Number, required: true },
        depth: { type: Number, required: true },
        weight: { type: Number, required: true },
    },
    freezerLocation: { type: String, required: false },
});

const washingMachinesDetailsSchema = new Schema({
    energyRating: { type: String, required: true },
});

export async function DatabaseInitializationForProducts() {

    arrayProducts.forEach(async (arrayOfOneproduct) => {
        arrayOfOneproduct.forEach(async (oneProduct) => {
            const nameOfcategorie = await category.find({ name: oneProduct.categoryType }, `${oneProduct.categoryType}._id`).exec()
            const product = new Product({
                ...oneProduct,
                category: nameOfcategorie, 
                dimensions: oneProduct.dimensions,
                    // screenSize: phone.screenSize,
            });
            await product.save();
        })

    });

}

export async function DatabaseInitializationForCategories() {

    arrayCategories.forEach(async (newCategorie) => {
        const nameOfproduct = await Product.find({ categoryType: newCategorie }, "_id")
        const setCategorie = new category({
            name: newCategorie,
            product: nameOfproduct
        })
        await setCategorie.save();

    })
}

