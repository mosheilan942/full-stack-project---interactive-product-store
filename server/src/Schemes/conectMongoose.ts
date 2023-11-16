import mongoose from "mongoose";

const dbUrl = `mongodb+srv://chezkin:chezkiN1234@cluster0.ikepj5m.mongodb.net/fullstack?retryWrites=true&w=majority`;
// const dbUrl = `mongodb://127.0.0.1:27017/fullstack`;

// אופציות החיבור
// const connectOptions: mongoose.ConnectOptions = {
//   // useNewUrlParser: true,
//   // useUnifiedTopology: true
// };

// מתחברים לבסיס הנתונים
export const connectDB = () => {
return mongoose.connect(dbUrl)
}
