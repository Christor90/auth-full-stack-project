import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoBD Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log('Error  connection  to  MOngoDB: ', error.message);
    process.exit(1);
  }
};
