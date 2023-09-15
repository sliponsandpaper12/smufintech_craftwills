const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({ // this is how mongo works, create a schema this way
    phone: {// can actually just write phone: String but then this one got other specification
        type: String, // declare the data type
        required:true, //declare that it must be filled -- not null in sql
        unique: true // must be unique -- primary key ish
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

const User = mongoose.model('User', userSchema)

module.exports = User;