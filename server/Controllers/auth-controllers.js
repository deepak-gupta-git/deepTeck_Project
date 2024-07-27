const User = require("../Models/user-model")
const bcrypt = require('bcrypt');

// home
const home = async (req, res) =>{
    try {
    res.status(200).send("hello from controllers")
    } catch (error) {
        console.log(error)
    }
}

// register
const register = async (req, res) =>{
    try {
        // console.log(req.body)
        // res.status(200).json({msg: "welcome to registration page"})
        // console.log(req.body)
        const {username, email, password, phone} = req.body;

        const userExist = await User.findOne({email});

        if(userExist) {
            return res.status(400).json({msg: "email already exist"});
        };

        const userCreated = await User.create({username, email, phone, password});
        res.status(200).json({msg : userCreated , token : await userCreated.generateToken()});

    } catch (error) {
        console.log(req.body)
        next(error)
    }
}



// login
const login = async (req, res) => {
    try {
       const {email, password} = req.body;
       const userExist = await User.findOne ({email})

       if(!userExist) {
        return res.status(200).json({msg : "Invalid Credentials"})
       }


       const isMatch = await bcrypt.compare(password, userExist.password);
        //  const user = await userExist.comparePassword(password);

       if(isMatch){
        res.status(200).json({msg : "Login Succesfully!" ,
            token: await userExist.generateToken(),
            userId: await userExist._id.toString(),
        })
       } else {
        res.status(400).json({msg : "Invalid Email or Password"})
       }


    } catch (error) {
        console.log(error);
        res.status(500).json({msg : "Server Error"});
      
    }
}


// user

const user = async (req, res) => {
   try {
    const userData = req.user;
    console.log(userData);
    return res.status(200).json({msg : "hello from user"})
   } catch (error) {
    console.log(error)
   }
}


module.exports = {register, home, login ,user};