import mongoose from "mongoose";

const mongoBDConnect = async () => {
  try {
    // connection check to server
    mongoose.connection.on("connected", () => {
      console.log(
        `Successfully connected to MongoDB server`.cyan.underline.bold
      );
    });

    // after connect if error happer show there
    mongoose.connection.on("error", (err) => {
      console.error(`Error in connecting in database.`.red.underline.bold, err);
    });

    // if connection ok connect to database
    const connect = await mongoose.connect(process.env.MONGO_URL);

    // database name
    console.log(
      `MongoDB connected to ${connect.connection.name}`.cyan.underline.bold
    );
  } catch (error) {
    console.error(`Failed to connect to database`.red.underline.bold, error);
    // if faild to connect stop server
    process.exit(1);
  }
};

export default mongoBDConnect;
