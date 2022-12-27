const mongoose = require("mongoose");

module.exports = () => {
  const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  try {
    mongoose.connect(process.env.DB, connectionParams);
    console.log("MongoDB Database connected");
  } catch (error) {
    console.log(error);
    console.log("Couldn't connect MongoDB Database");
  }
};
