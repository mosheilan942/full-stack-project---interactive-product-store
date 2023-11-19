import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import React from 'react'


const initialOptions = {
  clientId: "test",
  currency: "ILS",
  intent: "capture",
};


function Paypal() {
  return (
    <>
    <PayPalScriptProvider options={initialOptions}>
    <PayPalButtons/>
    </PayPalScriptProvider>
    </>
  )
}

export default Paypal
