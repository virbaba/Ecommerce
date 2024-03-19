const mongoose = require("mongoose");

const mongoDbUrl =
  "mongodb+srv://virendersinghdev1:rJu0dClcFkzyI7ex@cluster0.w7aupoa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
  
const connectDb = () => {
  return mongoose.connect(mongoDbUrl);
};

module.exports = { connectDb };
