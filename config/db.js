const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://TAWFIK_HEGAZY:XnI2NwDPFe2sYOqm@tawfik00hegazy.jzhcqo9.mongodb.net/4ucenter?retryWrites=true&w=majority'
    );
    console.log(' Database connection successful');
  } catch (error) {
    console.error(' Database connection failed:', error.message);
    process.exit(1);  }
};

module.exports = connectDB;
