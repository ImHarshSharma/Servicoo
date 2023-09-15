const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/dynamicweb",{
   // useCreateIndex:true,
   useNewUrlParser: true,
   useUnifiedTopology : true
    }).then(() => {
        console.log("connection is sucessfull");
    }).catch((error) =>{
        console.log(error);
    })
 