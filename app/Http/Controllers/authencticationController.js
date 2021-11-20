const asyncWrapper = require("../Exceptions/asyncWrapper");
const User = require('./../../Models/User')


//signup
const signUp = asyncWrapper(async (req, res, next) => {
    //pull out exactly what is needed from the request body
    const { firstName, lastName, email, phone, address, password, passwordConfirm} = req.body

    //create new user object
    const newUser = User.create({
        firstName,
        lastName,
        email,
        phone,
        address,
        password,
        passwordConfirm
    })

    if(!newUser) {

    }
})

//signin
const signIn = asyncWrapper(async (req, res, next) => {
    //pull out exactly what is needed from the request body
    const { email, password } = req.body

    //
})

//signout

//password reset request


//password reset processing


//email verification processing
