import  Mongoose  from "mongoose";

const userSchema = new Mongoose.Schema({
    email:{
        type:String,
        required: true,
        unique:true
    },
    password:{
        type: String,
        required: true

    },
    name:{
        type:String,
        required:true
    },
    lastlogin:{
        type:Date,
        default:Date.now
    },
    isverified:{

        type: Boolean,
        default: false

    },

    resetPasswordToken: String,
    resetpasswordExpiresAt: Date,
    verificationToken: String,
    verificationTokenExpiresAt: Date,
},{timestamps: true});


export const User= Mongoose.model('User', userSchema);