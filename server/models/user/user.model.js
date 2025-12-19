import mongoose from "mongoose";

const userSchema= mongoose.Schema({
    firstname:{
        type:String,
    },
    lastname:{
        type:String,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:false
    },
    provider:{
        type:String,
        enum:["email", "google"],
        default:"email",
        required:true
    },
    googleId:String,
    isVerified:{
        type:Boolean,
        default:false
    },
    avatat:String
});

const User= mongoose.model("user", userSchema);
export default User;