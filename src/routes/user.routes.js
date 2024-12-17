import {Router} from "express";
import {registerUser} from "../controllers/userRegister.controller.js"
import {loginUser} from "../controllers/userLogin.controller.js"

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
export default router;