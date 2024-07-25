import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    message :{
        type : String,
        required : true
    }
})

export const Contact = mongoose.model("contact", ContactSchema)

