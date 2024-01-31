// const mongoose = require("mongoose");

// const DB = process.env.DATABASE ||8005

// mongoose.connect(DB).then(() => console.log("data base connected")).catch((error) => console.log("error" + error.message))
const mongoose = require("mongoose");

const DB = process.env.DATABASE;

mongoose.connect(DB,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>console.log("connection is successfully done")).catch((error)=>console.log("error hai" + error.message))