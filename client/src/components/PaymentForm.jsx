// import React, { useState } from "react";
// import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
// import axios from "axios";

// function PaymentForm({ amount }) {
//   const stripe = useStripe();
//   const elements = useElements();
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setLoading(true);

//     const cardElement = elements.getElement(CardElement);
//     const { error, paymentMethod } = await stripe.createPaymentMethod({
//       type: "card",
//       card: cardElement,
//     });

//     if (error) {
//       console.error(error);
//       setLoading(false);
//       return;
//     }

//     try {
//       const response = await axios.post("/api/v1/placeorder", {
//         paymentMethodId: paymentMethod.id,
//         amount,
//       });
//       alert("Payment successful!");
//     } catch (err) {
//       console.error("Payment failed:", err);
//       alert("Payment failed. Please try again.");
//     }

//     setLoading(false);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <CardElement />
//       <button type="submit" disabled={!stripe || loading}>
//         {loading ? "Processing..." : "Pay Now"}
//       </button>
//     </form>
//   );
// }

// export default PaymentForm;
// 2
// import React, { useState } from "react";
// import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
// import axios from "axios";

// function PaymentForm({ amount }) {
//   const stripe = useStripe();
//   const elements = useElements();
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setLoading(true);

//     const cardElement = elements.getElement(CardElement);
//     const { error, paymentMethod } = await stripe.createPaymentMethod({
//       type: "card",
//       card: cardElement,
//     });

//     if (error) {
//       console.error(error);
//       setLoading(false);
//       return;
//     }

//     try {
//       const response = await axios.post("/api/v1/placeorder", {
//         paymentMethodId: paymentMethod.id,
//         amount,
//       });
//       alert("Payment successful!");
//     } catch (err) {
//       console.error("Payment failed:", err);
//       alert("Payment failed. Please try again.");
//     }

//     setLoading(false);
//   };

//   return (
//     <div>
//       <h2>Payment Form</h2>
//       <p>
//         <strong>Use the following test card details for testing:</strong>
//         <ul>
//           <li>Card Number: <code>4242 4242 4242 4242</code></li>
//           <li>Expiry Date: Any future date (e.g., <code>12/34</code>)</li>
//           <li>CVC: Any 3 digits (e.g., <code>123</code>)</li>
//         </ul>
//       </p>
//       <form onSubmit={handleSubmit}>
//         <CardElement />
//         <button type="submit" disabled={!stripe || loading}>
//           {loading ? "Processing..." : "Pay Now"}
//         </button>
//       </form>
//     </div>
//   );
// }

// export default PaymentForm;

// 3rd

import React, { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";
import { validate } from "uuid";

// const CARD_ELEMENT_OPTIONS = {
//   style: {
//     base: {
//       color: "#32325d",
//       fontFamily: "Arial, sans-serif",
//       fontSmoothing: "antialiased",
//       fontSize: "16px",
//       "::placeholder": { color: "#aab7c4" },
//     },
//     invalid: { color: "#fa755a", iconColor: "#fa755a" },
//   },
// };

function PaymentForm({ amount }) {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // setLoading(true);
    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });
// console.log(token);

    if (error) {
      setPaymentError(error.message);
    } else {
      console.log("Payment successful:", paymentMethod);
      const paymentMethodId = paymentMethod.id
      setPaymentSuccess(true);
  }

    // try {
    //   const response = await axios.post("/api/v1/placeorder", {
    //     paymentMethodId: paymentMethod.id,
    //     amount,
    //   });
    //   alert("Payment successful!");
    // } catch (err) {
    //   console.error("Payment failed:", err);
    //   alert("Payment failed. Please try again.");
    // }

    // setLoading(false);
  };
function validate (){
  if (!localStorage.getItem('currentUser')) {
    window.location.href="/login"
  }
}
/*
const handleSubmit = async (event) => {
  event.preventDefault();

  if (!stripe || !elements) return; // Ensure Stripe and Elements are loaded

  const cardElement = elements.getElement(CardElement);

  try {
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      setPaymentError(error.message);
      setPaymentSuccess(false);
    } else {
      console.log("Payment successful:", paymentMethod);

      // Replace token with paymentMethod.id
      const paymentMethodId = paymentMethod.id;

      // Call backend API to process the payment
      const response = await axios.post("/api/orders/placeorder", {
        paymentMethodId, // Use the ID of the created payment method
        amount,
      });

      if (response.status === 200) {
        setPaymentSuccess(true);
        setPaymentError(null);
      } else {
        setPaymentError("Payment failed. Please try again.");
        setPaymentSuccess(false);
      }
    }
  } catch (err) {
    console.error("Error processing payment:", err);
    setPaymentError("An error occurred while processing your payment.");
    setPaymentSuccess(false);
  }
};
*/
  return (
    <div>
      <h2>Payment Form</h2>
      
      <form onSubmit={handleSubmit}>
      <CardElement />
        {/* <button type="submit" onClick={validate} disabled={!stripe}> */}
        <button type="submit" onClick={validate} >
        Pay {amount} PKR
        </button>
      </form>
      {paymentError && <p style={{ color: "red" }}>{paymentError}</p>}
      {paymentSuccess && <p style={{ color: "green" }}>Payment Successful!</p>}
    </div>
  );
}

export default PaymentForm;


// 4th
/*
const handleSubmit = async (event) => {
  event.preventDefault();

  if (!stripe || !elements) return; // Ensure Stripe and Elements are loaded

  const cardElement = elements.getElement(CardElement);

  try {
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      setPaymentError(error.message);
      setPaymentSuccess(false);
    } else {
      console.log("Payment successful:", paymentMethod);

      // Replace token with paymentMethod.id
      const paymentMethodId = paymentMethod.id;

      // Call backend API to process the payment
      const response = await axios.post("/api/orders/placeorder", {
        paymentMethodId, // Use the ID of the created payment method
        amount,
      });

      if (response.status === 200) {
        setPaymentSuccess(true);
        setPaymentError(null);
      } else {
        setPaymentError("Payment failed. Please try again.");
        setPaymentSuccess(false);
      }
    }
  } catch (err) {
    console.error("Error processing payment:", err);
    setPaymentError("An error occurred while processing your payment.");
    setPaymentSuccess(false);
  }
};
*/

// 5th
/*
import React, { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";

const handleSubmit = async (event) => {
  event.preventDefault();

  if (!stripe || !elements) return; // Ensure Stripe and Elements are loaded

  const cardElement = elements.getElement(CardElement);

  try {
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      setPaymentError(error.message);
      setPaymentSuccess(false);
    } else {
      console.log("Payment successful:", paymentMethod);

      // Replace token with paymentMethod.id
      const paymentMethodId = paymentMethod.id;

      // Call backend API to process the payment
      const response = await axios.post("/api/orders/placeorder", {
        paymentMethodId, // Use the ID of the created payment method
        amount,
      });

      if (response.status === 200) {
        setPaymentSuccess(true);
        setPaymentError(null);
      } else {
        setPaymentError("Payment failed. Please try again.");
        setPaymentSuccess(false);
      }
    }
  } catch (err) {
    console.error("Error processing payment:", err);
    setPaymentError("An error occurred while processing your payment.");
    setPaymentSuccess(false);
  }
};

return (
  <div>
    <h2>Payment Form</h2>
    
    <form onSubmit={handleSubmit}>
    <CardElement />
      <button type="submit" disabled={!stripe}>
      Pay {amount} PKR
      </button>
    </form>
    {paymentError && <p style={{ color: "red" }}>{paymentError}</p>}
    {paymentSuccess && <p style={{ color: "green" }}>Payment Successful!</p>}
  </div>
);


export default PaymentForm;
*/