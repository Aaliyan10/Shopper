import React, { useState, useRef } from "react";
import "./Contact.css";
import Success from "./components/Success";

const Contact = () => {
  const initialValues = { user_name: "", user_email: "", message: "" };
  const [formData, setFormData] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setSubmit] = useState(false);
  const [width, setWidth] = useState(0);
  const form = useRef();
  const intervalId = useRef(null);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function changeSubmit() {
    setSubmit(false);
    setFormData(initialValues);
    clearInterval(intervalId.current);
    setWidth(0);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const errors = validateErrors(formData);
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      setSubmit(true);
      setTimeout(changeSubmit,3000);
      intervalId.current = setInterval(() => {
        setWidth((prevWidth) => {
          if (prevWidth < 100) {
            return prevWidth + 0.33;
          }
          clearInterval(intervalId.current);
          return 100;
        });
      }, 10); 
    }
  }

  function validateErrors(values) {
    const errors = {};
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!values.user_name) {
      errors.user_name = "Name is required";
    }
    if (!values.user_email) {
      errors.email = "Email is required";
    } else if (!emailRegex.test(values.user_email)) {
      errors.email = "A valid email is required";
    }
    if (!values.message) {
      errors.message = "A message is required";
    }

    return errors;
  }

  return (
    <div className="centered-content">
      {!isSubmit && (
        <form ref={form} onSubmit={handleSubmit}>
          <h1>Connect with Us!</h1>
          <div className="user_info">
            <div className="user_name">
              <label htmlFor="username_name">Name: </label>
              <input
                type="text"
                name="user_name"
                placeholder="Enter your name"
                value={formData.user_name}
                onChange={handleChange}
              />
              {formErrors.user_name && (
                <div className="errors">{formErrors.user_name}</div>
              )}
            </div>
            <div className="email">
              <label htmlFor="email">Email: </label>
              <input
                type="text"
                name="user_email"
                placeholder="Enter your email address"
                value={formData.user_email}
                onChange={handleChange}
              />
              {formErrors.email && (
                <div className="errors">{formErrors.email}</div>
              )}
            </div>
          </div>
          <div className="message">
            <label htmlFor="message">Message: </label>
            <textarea
              name="message"
              placeholder="Write your message here"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            {formErrors.message && (
              <div className="errors">{formErrors.message}</div>
            )}
          </div>
          <button type="submit">SUBMIT</button>
        </form>
      )}
      {isSubmit && (
        <Success width={width}/>
      )}
    </div>
  );
};

export default Contact;