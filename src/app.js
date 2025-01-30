import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser"

const app = express();

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
    }))
    
    app.use(express.json({limit: "16kb"}))
    app.use(express.urlencoded({extended:true, limit:"16kb"}))
    app.use(express.static("public"))

    app.use(cookieParser())

    // routes import
import productRouter from "./routes/products.routes.js"
import userRouter from "./routes/user.routes.js"
import orderRouter from "./routes/order.routes.js"
// routes declaration
app.use("/api/v1",productRouter)
app.use("/api/v1",userRouter)
app.use("/api/v1",orderRouter)



// following code is to get error details after installing axios in frontend side
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});



export { app }
