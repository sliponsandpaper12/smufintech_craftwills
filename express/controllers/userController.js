const User = require('../models/userModel');

exports.registerUser = async(req, res) => {// express.js all the req need async to prevent long queue in front of server
    try{ // this is to scan to see which ever parts fail // this allows u to see when to return error message
    const reqPhone = req.body.phone; //.body is becasue all requests comes with content or body // so need .body
    const reqPassword = req.body.password;

    // aft importing the usermodel, we can start creating newuser:
    const newUser = new User({
        phone: reqPhone,
        password: reqPassword
    })

    // now save it into the database:
    await newUser.save() // cus this is an async function, is like getting a queue number. await is like waiting for ur queue
        // now create a response // usually supposed to give toke but we only set up user now so we will just give the entire user info
        res.status(200).json(newUser);
}catch(error){ 
    res.status(500).json({error: error.message});
}
}