import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";


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
