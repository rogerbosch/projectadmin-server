const mongoose = require('mongoose');
require('dotenv').config({path:'variables.env'});

const connectDatabase = async () =>{
    try {
        await mongoose.connect(process.env.DB_MONGO,
            {
                useNewUrlParser:true,
                useUnifiedTopology: true,
                useFindAndModify:false
            });
        console.log("Database connected");
    }catch (e) {
        console.log(e);
        process.exit(1);
    }
};

module.exports = connectDatabase;