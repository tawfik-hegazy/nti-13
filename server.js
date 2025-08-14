const express = require('express');
const courseRouter = require('./routes/course.routes');
const connectDB = require('./config/db');
const PORT = 5000;
const app = express();
app.use(express.json());
app.use('/courses', courseRouter);
connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
