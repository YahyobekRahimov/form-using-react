import { useState } from "react"

export default function Form() {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    date: ''
  });

  return (
    <>
      <form className='form'>
          
          <div className="form-inputs-wrapper">
            <h3 className='form-title'>Contact details</h3>
            <p className='form-description'>
              Please fill your information so we can get in touch with you.
            </p>
            <hr />
            <label htmlFor="Name">
              <span>Name</span>
              <input type="text" name="name" id="name-input" placeholder='Name' />
            </label>
            <label htmlFor="phoneNumber">
              <span>Phone Number</span>
              <input type="number" name="phoneNumber" id="phoneNumber" placeholder='(123) 456 - 7890' />
            </label>
            <label htmlFor="email">
              <span>Email</span>
              <input type="email" name="email" id="email-input" placeholder='Your Mail ID' />
            </label>
            <label htmlFor="date">
              <span>Date</span>
              <input type="date" name="date" id="date-input" placeholder='dd -- mm - yyyy'/>
            </label>
          </div>
        </form>
        <input type="submit" value="Next" />
    </>
  )
}
