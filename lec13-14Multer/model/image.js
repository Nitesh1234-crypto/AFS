const mongoose = require("mongoose");

const imageSchema= new mongoose.Schema({
    imagename:String,
    path:String
})

module.exports= mongoose.model("Image",imageSchema);