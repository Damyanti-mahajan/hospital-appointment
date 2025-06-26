const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://damayantimahajan321:Gofood%23123456789@cluster0.nksfjn5.mongodb.net/gofoodmern?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected");
  } catch (err) {
    console.error("Connection error:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
