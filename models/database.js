const mongoose = require("mongoose");
mongoose.connect(process.env.URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}, (error)=>{
    if(error) return console.log(error);
    console.log("connected")
})