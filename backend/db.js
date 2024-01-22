const mongoose=require("mongoose");

mongoose.connect("mongodb+srv://pritam12f:PpyVCO133CJ5805u@cluster0.w5m2bxm.mongodb.net/");

const userSchema=mongoose.Schema({
    username: {
        type: String,
        required: true,
        maxLength: 30,
        minLength: 6,
        trim: true,
        unique: true,
        lowercase: true
    },
    password : {
        type: String,
        required: true,
        minLength: 6
    },
    firstName : {
        type: String,
        trim: true,
        required: true,
        maxLength: 50,
    },
    lastName : {
        type: String,
        trim: true,
        required: true,
        maxLength: 50,
    }
});

const User = mongoose.model("User", userSchema);

module.exports={User}