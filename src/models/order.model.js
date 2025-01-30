import mongoose, {Schema} from "mongoose";

const orderSchema = new Schema({
    userId:{
        type:String,
        require:true
    },
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    orderItems:[{
        name:{type:String,require:true},
        quantity:{type:Number,require:true},
        _id:{type:String, require:true},
        price:{type:Number,require:true}
    }],
    shippingAddress:{
        address:{type:String,require:true},
        city:{type:String,require:true},
        postalCode:{type:Number,require:true},
        country:{type:String,require:true}
    },
    orderAmount:{
        type:Number,
        require:true
    },
    transactionId: {type:String,require:true},
    isDelivered: {type:Boolean, require:true}
},{timestamps:true})

export const Order = mongoose.model("orders", orderSchema); // Use singular name
