/*
import { v4 as uuidv4 } from 'uuid';
import { asyncHandler } from "../utils/asyncHandler.js";
import Stripe from 'stripe';
import { Order } from '../models/order.model.js';

const stripe = new Stripe('sk_test_51QchcRGGeAneMG7eNmRPPFNbYDKdkygegYUiv4LCyjfAp8u7HRUhkzbxLEW7zP8qiMIhN8qzcaNbJ4rvePOX6dfC00ZrMlsEZW');

const payments = asyncHandler(async(req,res)=>{
// const {token,cartItems, currentUser, subTotal} = req.body
const { paymentMethodId, amount,currentUser,cartItems } = req.body;

const customer = await stripe.customers.create({
    email : token.email,
    source : token.id
})

const paymentIntent = await stripe.paymentIntents.create({
    amount: Math.round(amount * 100), // Stripe requires the amount in the smallest currency unit
    currency: "pkr",
    payment_method: paymentMethodId,
    confirm: true,
    
  });
  if (paymentIntent) {
    res.status(200).json({ success: true, paymentIntent });
    {
        const order = new Order({
           userId:currentUser._id,
           name:currentUser.name,
           email:currentUser.email,
           orderItems:cartItems,
           shippingAddress:{
            address:token.card.address_line1,
            city:token.card.address_city,
            postalCode:token.card.address_zip,
            
           },
           orderAmount:amount,
           transactionId:paymentIntent.source.id,
           isDelivered:false
        })
        order.save(error=>{
            if (error) {
                return res.status(400).json({message:"Something went wrong while placing order"})
            }
            else{
                res.send('Order placed Successfully')
            }
        })
    }
} else {
    console.error("Payment error:", error);
res.status(400).json({ success: false, error: error.message });
}

// const paymentIntent = await stripe.paymentIntents.create({
// amount : subTotal,
// currency : 'PKR',
// customer : customer.id,
// receiptEmail : token.email
// },{
//     idempotencykey: uuidv4()
// })

// if (payment) {
//     res.send("Payment Successful")
// }
// else {
//     res.status(400).json({message : "Payment Failed"})
// }
})

export {payments}
*/

import { asyncHandler } from "../utils/asyncHandler.js";
import Stripe from "stripe";
import { Order } from "../models/order.model.js";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
// const stripe = new Stripe('sk_test_51QchcRGGeAneMG7eNmRPPFNbYDKdkygegYUiv4LCyjfAp8u7HRUhkzbxLEW7zP8qiMIhN8qzcaNbJ4rvePOX6dfC00ZrMlsEZW');
/*
const payments = asyncHandler(async (req, res) => {
  const { paymentMethodId, amount, currentUser, cartItems } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100),
      currency: "pkr",
      payment_method: paymentMethodId,
      confirm: true,
    });
   if (paymentIntent) {
    const order = new Order({
      userId: currentUser._id,
      name: currentUser.name,
      email: currentUser.email,
      orderItems: cartItems,
      shippingAddress: {
        address: "Sample Address", // Replace with actual address if available
        city: "Sample City",
        postalCode: 12345,
        country: "Pakistan",
      },
      orderAmount: amount,
      transactionId: paymentIntent.id,
      isDelivered: false,
    });

    // await order.save();
    try {
      await order.save();
      res.status(200).json({ message: "Order placed successfully" });
    } catch (error) {
      console.error("Error saving order to database:", error.message);
      res.status(500).json({ message: "Failed to save order", error: error.message });
    }
    
    
   }
    
    res.status(200).json({ message: "Order placed successfully" });
  } catch (error) {
    console.error("Error in payments controller:", error.message);
    res.status(500).json({ message: "Payment or Order Placement Failed", error: error.message });
  }
  console.log("Payment controller hit with data:", req.body);
});
*/
const payments = asyncHandler(async (req, res) => {
  const { paymentMethodId, amount, currentUser, cartItems } = req.body;

  try {
      const paymentIntent = await stripe.paymentIntents.create({
          amount: Math.round(amount * 100),
          currency: "pkr",
          payment_method: paymentMethodId,
          confirm: true,
      });

      if (paymentIntent) {
          const order = new Order({
              userId: currentUser._id,
              name: currentUser.name,
              email: currentUser.email,
              orderItems: cartItems,
              shippingAddress: {
                  address: "Sample Address",
                  city: "Sample City",
                  postalCode: 12345,
                  country: "Pakistan",
              },
              orderAmount: amount,
              transactionId: paymentIntent.id,
              isDelivered: false,
          });

          // Save order to MongoDB
          await order.save();
      }

      res.status(200).json({ message: "Order placed successfully" });
  } catch (error) {
      console.error("Error in payments controller:", error.message);
      res.status(500).json({ message: "Payment or Order Placement Failed", error: error.message });
  }
});

/*
const userOrders = asyncHandler(async (req,res) => {
  const userId = req.body.userId
 await Order.find({userId:userId}, (error,docs)=>{
    if (error) {
      return res.status(400).json({message:"Something went wrong while getting orders by User Id"})
    }
    else {
      res.send(docs)
    }
  })
})
*/

const userOrders = async (req, res) => {
  try {
      const { userId } = req.body; // Ensure the frontend sends this
      if (!userId) {
          return res.status(400).json({ message: 'User ID is required to get orders by user id' });
      }

      const orders = await Order.find({ user: userId });
      res.status(200).json(orders);
  } catch (error) {
      console.error('Database error:', error);
      res.status(500).json({ message: 'Error fetching user orders' });
  }
};

const ordersByOrderId = async (req, res) => {
  try {
      const { orderId } = req.body; // Ensure the frontend sends this
      if (!orderId) {
          return res.status(400).json({ message: 'Order ID is required to get orders by user id' });
      }

      const orders = await Order.find({ _id: orderId });
      res.status(200).json(orders);
  } catch (error) {
      console.error('Database error:', error);
      res.status(500).json({ message: 'Error fetching orders by Order Id' });
  }
};


export { payments, userOrders, ordersByOrderId };
