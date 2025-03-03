import {asyncHandler} from "../utils/asyncHandler.js";
import {User} from "../models/user.model.js";

const getAllUsers = asyncHandler(async(req,res)=>{
    try {
        const users = await User.find({});
        if (users) {
         return res.json({data : users})
        }else {
            res.status(404).json({message : "Users in Admin Side Not Found"})
        }
    } catch (error) {
          res.status(400).json({message:"Error while fetching users", error})
    }
})
/*
const deleteUser = asyncHandler(async(req, res)=>{
try {
    const {userId} = req.body;
    const user = await User.findByIdAndDelete(userId)
    if (!user) {
        return res.status(400).json({message : "User Id not found while deleting the user"})
    }else{
        res.send("User deleted Successfully from the Admin Side")
        // window.location.reload()
    }
} catch (error) {
    res.status(500).json({message : "Server Errror while deleting the User"})
}
})

export {getAllUsers, deleteUser}
*/
const deleteUser = asyncHandler(async(req, res) => {
    try {
        const { userId } = req.body;
        if (!userId) {
            return res.status(400).json({ message: "User ID is required" });
        }
        
        const user = await User.findByIdAndDelete(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.json({ message: "User deleted successfully", userId });
    } catch (error) {
        res.status(500).json({ message: "Server error while deleting user", error });
    }
});

export {getAllUsers, deleteUser}