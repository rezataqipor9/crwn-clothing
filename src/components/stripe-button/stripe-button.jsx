import React from 'react';
import StripeCheckout from "react-stripe-checkout";
import {ReactComponent as ReactLogo} from '../../assets/logofotstripe.svg';
const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51IiFR2DOjugR6cxxQCRuIL5sUR2petDknCmzuvkM3KjrkTrBr1PATAuCPlHpHNraHR5Qv0jHwh2BKgjeia6bUTgS00P7zSWzPl";

 const onToken=(token)=>{
    console.log(token)
    alert('payment successful')
  }
  return (
   
    <StripeCheckout
     token={onToken}
      stripeKey={publishableKey}
      label='Pay Now'
      name="crw cloth"
      billingAddress
      shippingAddress   
      image={ReactLogo} 
      description={`your total is $${price}`}
      amount={priceForStripe}
      panelLabel='pay now'
      
    />
  );
};
export default StripeButton