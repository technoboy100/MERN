const mongoose = require('mongoose')

const FoodShecma= new mongoose.Schema({
    foodId:
    {
        type : Number,
        required : true,
    },
    foodName: {
        type : String,
        required :true,
    },
    foodquantity:{
        type : Number,
        required : true,
    },
});

const Food = mongoose.model("Food",FoodShecma)
module.exports =Food