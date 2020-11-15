const express = require('express');
const connectDatabase = require('./config/db');

//first create server
const app = express();

//connect to database
connectDatabase();

//app port
const PORT = process.env.PORT || 4000;

//Import routes
app.use('/api/users', require('./routes/users'));

//run server
app.listen(PORT, () =>{
   console.log(`Server is current running on port  ${PORT}`);
});