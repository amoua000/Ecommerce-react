import React, { useState, useEffect } from "react";
import Useform from './Useform';
import validate from './Validateinfo';
import './Form.css';



const FormSignup = () => {
          const {handleChange, values, handleSubmit, errors} = Useform(validate);
  


  return (
    <>
      <article>
        <form className="form-contain" onSubmit={handleSubmit}>
          <div className="form-control">
            <h1> Sign up with us!</h1>
            <label className="form-label" htmlFor="firstName"> Name : </label>
            <input 
            type="text" 
            id="firstName" 
            name="firstName" 
            className= "form-input"
            placeholder="Enter your name.." 
            value={values.firstName} 
            onChange={handleChange}
            />
            {errors.firstName && <p>{errors.firstName}</p>}

            <div className="form-control">
              <label className="form-label" htmlFor="email">Email : </label>
              <input 
              type="email" 
              id="email" 
              name="email" 
              className= "form-input"
              placeholder="Enter an email.." 
              value={values.email} 
              onChange={handleChange}
              />
                 {errors.email && <p>{errors.email}</p>}
            </div>

            <div className="form-control">
              <label className="form-label" htmlFor="Comments">Comments: </label>
              <input 
              type="text" 
              id="comments" 
              name="comments" 
              className= "form-input"
              placeholder="Enter any comments.." 
              value={values.comments} 
              onChange={handleChange}
              />
               {errors.comments && <p>{errors.comments}</p>}
            </div>

            <button className="submit-btn" type="submit" onClick={handleSubmit}>Submit</button>


          </div>
        </form>
      </article>
    </>
  );
};

export default FormSignup;
