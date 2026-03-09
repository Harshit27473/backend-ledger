const mongoose = require('mongoose')

const userSchema =  mongoose.Schema({
    email:{
        type: String,
        required: [true,"email is required for creating user"],
        trim:true,
        lowercase:true,
        match:[/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,"Please provide a valid email address"],
        unique:[true,"email already exists, please use a different email"]
    },
    name:{
        type: String,
        required: [true,"name is required for creating user"],
    },
    password:{
        type: String,
        required: [true,"password is required for creating user"],
        minlength: [6,"password must be at least 6 characters long"],
        select: false
    }
},{
    timestamps: true
})

