import {Router} from "express";
import {registerUser} from "../controllers/userRegister.controller.js"
import {loginUser} from "../controllers/userLogin.controller.js"
import {updateUser} from "../controllers/userUpdate.controller.js"
import {getAllUsers, deleteUser} from "../controllers/userAdmin.controller.js"
const router = Router();

// route for registering a new user
router.route("/register").post(registerUser)

// route for logging In a new user
router.route("/login").post(loginUser)

// route for logging Out a new user
router.post('/logout', (req, res) => {
    // res.clearCookie('token'); // Clear authentication cookie if used
    
    res.status(200).json({ message: 'Logged out successfully' });
});

// route for Updating the user
// router.route("/update").post(updateUser)
// router.put('/update/:id', updateUser);
router.put("/update", updateUser);

//  route for Updating the Admin
router.route("/getallusers").get(getAllUsers)

// route for deleting the User in Admin
router.route("/deleteuser").post(deleteUser)

export default router;