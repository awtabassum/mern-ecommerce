import {asyncHandler} from "../utils/asyncHandler.js";
import {User} from "../models/user.model.js";

const loginUser = asyncHandler(async (req, res) => {
  try {
      const user = await User.findOne({ email: req.body.email });
      if (!user) throw new Error("User not found");
    if (user) {
      const loggedUser = {
        _id:user._id,
        name:user.name,
        email:user.email
      }
      res.send(loggedUser)
    }
      // Check password logic here...

  } catch (error) {
      console.error("Error during login:", error.message);
      return res.status(500).json({ message: error.message });
  }
});



/*const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
      return res.status(404).send("User not found");
  }

  // Assuming passwords are hashed
  const isMatch = await bcrypt.compare(password, user.password);
  // if (!isMatch) {
  //     return res.status(401).send("Invalid credentials");
  // }

  res.status(200).json({ message: "Login Success", user });
});
*/


/*
const loginUser = asyncHandler(async (req,res)=> {
    try {
        User.find({email:req.body.email, password:req.body.password}, (err,docs)=> {
          if (docs.length > 0) {
            res.send("Login Success")
          }
          else {
           return res.status(404).send("Something went wrong while User Logging In")
          }
        })
    } catch (error) {
        return res.status(404).send("Something went wrong while User Tried to Login", error)
    }
})
*/
export {loginUser}