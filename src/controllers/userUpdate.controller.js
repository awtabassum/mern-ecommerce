import { asyncHandler } from "../utils/asyncHandler.js";
import { User } from "../models/user.model.js";

// const updateUser = asyncHandler(async(req,res)=>{
// try {
//     const {userId, updatedUser} = req.body;
//     // User.findByIdAndUpdate({_id : userId},{
//         User.findByIdAndUpdate(userId,{
//         name:updateUser.name,
//         email:updateUser.email,
//         password:updateUser.password,
//     })
//     res.send("User details updated successfully")
// } catch (error) {
//     res.status(400).send("Something went wrong while updating the user data")
// }
// })
/*
const updateUser = async (req, res) => {
    try {
        const { id } = req.params; // Get userId from URL
        const { name, email, password } = req.body; // Get updated data

        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Update user fields
        if (name) user.name = name;
        if (email) user.email = email;
        if (password) user.password = password;

        await user.save();
        res.json({ message: "User updated successfully", user });
    } catch (error) {
        console.error("Error updating user:", error);
        res.status(500).json({ message: "Server Error" });
    }
    const updatedUser = await User.findById(userId);
res.json({
  _id: updatedUser._id,
  name: updatedUser.name,
  email: updatedUser.email,
});

};
*/

/*
const updateUser = async (req, res) => {
    try {
        const { userId, updatedUser } = req.body;

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Update user fields
        if (updatedUser.name) user.name = updatedUser.name;
        if (updatedUser.email) user.email = updatedUser.email;
        if (updatedUser.password) user.password = updatedUser.password;

        await user.save();

        // Return updated user data
        res.json({
            message: "User updated successfully",
            user: {
                _id: user._id,
                name: user.name,
                email: user.email,
            }
        });

    } catch (error) {
        console.error("Error updating user:", error);
        res.status(500).json({ message: "Server Error" });
    }
};

export { updateUser };

*/

const updateUser = async (req, res) => {
    try {
        const { userId, updatedUser } = req.body;

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Update user fields
        if (updatedUser.name) user.name = updatedUser.name;
        if (updatedUser.email) user.email = updatedUser.email;
        if (updatedUser.password) user.password = updatedUser.password; // Hash password before saving

        await user.save();
        
        res.json({ 
            message: "User updated successfully", 
            user: {
                _id: user._id,
                name: user.name,
                email: user.email
            } 
        });
    } catch (error) {
        console.error("Error updating user:", error);
        res.status(500).json({ message: "Server Error" });
    }
};
export { updateUser };