import React,{ useEffect, useState }  from "react";

import masterCard from "../../assets/all-images/master-card.jpg";
import mpesa from "../../assets/all-images/mpesa.png";
import "../../styles/payment-method.css";
import { sendtoDatabase } from "./BookingForm";

const PaymentMethod = () => {
  const [ selected, setSelected ] = useState('');

  function handleChange(e) {
    const { id } = e.target;
    setSelected(id);
  }
  setSelected("")

  
  useEffect(() => {
    if (selected) console.log(selected);
  }, [selected]);

  
  return (
    <>
      <div className="payment" id='1' onChange={handleChange}>
        <label htmlFor="" className="d-flex align-items-center gap-2">
          <input type="radio" /> Direct Bank Transfer
        </label>
      </div>

      <div className="payment mt-3" Id="2" onChange={handleChange}>
        <label htmlFor="" className="d-flex align-items-center gap-2">
          <input type="radio" /> Cheque Payment
        </label>
      </div>

      <div className="payment mt-3 d-flex align-items-center justify-content-between" onChange={handleChange}>
        <label htmlFor="" className="d-flex align-items-center gap-2" id="3">
          <input type="radio" /> Master Card
        </label>

        <img src={masterCard} alt="" />
      </div>

      <div className="payment mt-3 d-flex align-items-center justify-content-between"  id="4" onChange={handleChange}>
        <label htmlFor="" className="d-flex align-items-center gap-2">
          <input type="radio" /> M-Pesa
        </label>

        <img src={mpesa} alt="" />
      </div>
      <div className="payment text-end mt-5">
        <button>Reserve Now</button>
      </div>
    </>
  );
};




export default PaymentMethod;
