import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const dataBaseName = "creative-space";
    const con = await mongoose.connect(
      `mongodb://127.0.0.1:27017/${dataBaseName}`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      }
    );
    console.log(`Database connected : ${con.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
