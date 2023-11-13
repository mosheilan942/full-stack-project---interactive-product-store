import mongoose from "mongoose";

// const dbUrl = `mongodb+srv://${process.env.MONGODB_NAME}:${process.env.MONGODB_PASSWORD}@cluster0.ikepj5m.mongodb.net/?retryWrites=true&w=majority`;
const dbUrl = 'mongodb://127.0.0.1:27017/DB/test'

// אופציות החיבור
// const connectOptions: mongoose.ConnectOptions = {
//   // useNewUrlParser: true,
//   // useUnifiedTopology: true
// };

// מתחברים לבסיס הנתונים
export const connectDB = async () => {
return await mongoose.connect(dbUrl)
}
