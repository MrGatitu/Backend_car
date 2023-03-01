import React,{useState} from "react";
import "../../styles/booking-form.css";
import { Form, FormGroup } from "reactstrap";


const BookingForm = (props) => {
  const [firstname,setFirstName]=useState("");
  const [lastname,SetLastname]=useState("");
  const [email,SetEmail]=useState("");
  const [number,SetNumber]=useState("")
  const [fromaddress,SetFromAddress]=useState("");
  const [toaddress,SetToAddress]=useState("");
  const [time,SetTime]=useState("");
  const [error,setError]=useState(false);

  const OnFirstnameChange=(event)=>{
    setFirstName(event.target.value)
  }
  const OnLastnameChange=(event)=>{
    SetLastname(event.target.value)
  }
  const OnNumberChange=(event)=>{
    SetNumber(event.target.value)
  }
  const OnEmailChange=(event)=>{
    SetEmail(event.target.value)
  }
  const OnFromAddressChange=(event)=>{
    SetFromAddress(event.target.value)
  }
  const OnToAddressChange=(event)=>{
    SetToAddress(event.target.value)
  }
  const OnTimeChange=(event)=>{
    SetTime(event.target.value)
  }
  
  const submitHandler = (event) => {
    event.preventDefault();
    if(
      firstname===""||
      lastname===""||
      email===""||
      number===""||
      fromaddress===""||
      toaddress===""||
      time===""
    
    ){
      setError(true)
      return;
    }
   
  };
   
  return ( 
    <Form onSubmit={submitHandler}>
      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="text" placeholder="First Name" required value={props.firstname}
        onChange={OnFirstnameChange}/>
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="text" placeholder="Last Name"  required value={props.lastname}
        onChange={OnLastnameChange} />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="email" placeholder="Email"  required value={props.email}
        onChange={OnEmailChange}/>
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="number" placeholder="Phone Number"  required value={props.number}
        onChange={OnNumberChange}/>
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="text" placeholder="From Address"  required value={props.fromaddress}
        onChange={OnFromAddressChange}/>
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="text" placeholder="To Address"  required value={props.toaddress}
        onChange={OnToAddressChange } />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <select name="" id="">
          <option value="1 person">1 Person</option>
          <option value="2 person">2 Person</option>
          <option value="3 person">3 Person</option>
          <option value="4 person">4 Person</option>
          <option value="5+ person">5+ Person</option>
        </select>
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <select name="" id="">
          <option value="1 luggage">1 luggage</option>
          <option value="2 luggage">2 luggage</option>
          <option value="3 luggage">3 luggage</option>
          <option value="4 luggage">4 luggage</option>
          <option value="5+ luggage">5+ luggage</option>
        </select>
      </FormGroup>

      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <select name="" id="">
          <option value="1 day">1 day</option>
          <option value="2 days">2 days</option>
          <option value="3 days">3 days</option>
          <option value="4 days">4 days</option>
          <option value="5+ days">5+ days</option>
        </select>
      </FormGroup>

      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <select name="" id="">
          <option value="1 luggage">Self Drive</option>
          <option value="2 luggage">With A Driver</option>
        </select>
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="date" placeholder="Journey Date" />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input
          type="time"
          placeholder="Journey Time"
          className="time__picker"
          required value={time}
          onChange={OnTimeChange }/>
      </FormGroup>

      <FormGroup>
        <textarea
          rows={5}
          type="textarea"
          className="textarea"
          placeholder="Write"
        ></textarea>
      </FormGroup>
    </Form >
  );
};


export default BookingForm 




