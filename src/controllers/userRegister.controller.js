
import {asyncHandler} from "../utils/asyncHandler.js";
import {User} from "../models/user.model.js";

const registerUser = asyncHandler(async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.send("User registered successfully");
    } catch (error) {
        res.status(400).send("Something went wrong while registering user");
    }
});
export {registerUser}
/*
const registerUser = asyncHandler(async(req,res)=>{
    const newuser = await new User(req.body)
    newuser.save(err => {
       if (!err) {
        res.send("User registered successfully")
       } else {
        res.send("Something went wrong while registering user")
       }
    })
})

export {registerUser}
*/
