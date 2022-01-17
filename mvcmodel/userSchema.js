import mongoose from "mongoose"

const userSechma = new mongoose.Schema({
    firstname : {
        type : String,
        required : true,
        trim : true,
        min : 5,
        max : 20,
    },
    lastname : {
        type : String,
        required : true,
        trim : true,
        min : 5,
        max : 20,
    },
    username : {
        type : String,
        required : true,
        unique : true,
        trim : true,
        index : true,
        lowercase : true,
    },
    email : {
        type : String,
        required : true,
        trim : true,
        unique : true,
        lowercase : true,
    },
    password : {
        type : String,
        required : true,
    },
    phone : {
        type : String,
    }
});

 const User = mongoose.model('user', userSechma);
 export default User;