import mongoose from "mongoose";

// const dbUrl = `mongodb+srv://${process.env.MONGODB_NAME}:${process.env.MONGODB_PASSWORD}@cluster0.ikepj5m.mongodb.net/?retryWrites=true&w=majority`;
const dbUrl = `mongodb+srv://chezkin:4pAiUELpI0QXbM0j@cluster0.doywjhq.mongodb.net/fullstack?retryWrites=true&w=majority`;

// אופציות החיבור
const connectOptions: mongoose.ConnectOptions = {
  // useNewUrlParser: true,
  // useUnifiedTopology: true
};

// מתחברים לבסיס הנתונים
export const connectDB = () => {
return mongoose.connect(dbUrl, connectOptions)
}
