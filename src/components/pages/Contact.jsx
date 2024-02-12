import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import '../assets/style/contact.css'


function Contact() {
  return (
    <>
     <div className='contact-container'>
       <div className='contact-info'>
       <h2> Check me out!</h2>
          <p1> Email: k.kierepka.a@gmail.com</p1> 
          <p1> (or you can use form below!)</p1>
          <p2>Mobile: 07930997665</p2>
          <a href='https://www.linkedin.com/in/klaudia-kierepka' target='blank' className='link'>LinkedIn</a> 
          <a href='https://github.com/klaudia102' target='blank' className='link' >GitHub</a>
          <a href='' target='blank' className='link'>Download my CV</a>
       </div>
        <div className='contact-form'>
          <form nameClass="row g-3 needs-validation" novalidate>
            <div nameClass="col-md-4 position-relative">
              <label for="validationTooltip01" nameClass="form-label">First name</label>
              <input type="text" nameClass="form-control" id="validationTooltip01" value="Mark" required />
              <div nameClass="valid-tooltip">
              </div>
            </div>
            <div nameClass="col-md-4 position-relative">
              <label for="validationTooltip02" nameClass="form-label">Last name</label>
              <input type="text" nameClass="form-control" id="validationTooltip02" value="Otto" required />
              <div nameClass="valid-tooltip">
              </div>
            </div>
            <div nameClass="col-md-4 position-relative">
              <label for="validationTooltipUsername" nameClass="form-label">Email</label>
              <div nameClass="input-group has-validation">
                <span nameClass="input-group-text" id="validationTooltipUsernamePrepend"></span>
                <input type="text" nameClass="form-control"
                  id="validationTooltipUsername" aria-describedby="validationTooltipUsernamePrepend" required />
                <div nameClass="invalid-tooltip">
                </div>
              </div>
            </div>
            <form nameClass="was-validated">
              <div nameClass="mb-3">
                <label for="validationTextarea" nameClass="form-label">Textarea</label>
                <textarea nameClass="form-control" id="validationTextarea" placeholder="Required example textarea" required></textarea>
                <div nameClass="invalid-feedback">
                  Please enter a message in the textarea.
                </div>
              </div>
            </form>
            <div nameClass="col-12">
              <button nameClass="btn btn-primary" type="submit">Submit form</button>
            </div>
          </form>
        </div>
     </div>
    </>
  );
}

export default Contact;
