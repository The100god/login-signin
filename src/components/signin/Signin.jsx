import React, { useState } from "react";
import "./Signin.css";
import { useNavigate } from "react-router-dom";

const initialValue = {
  "name": "ram",
  "phone": 123456789,
  "email": "xyz@gmail.com",
  "password": "xyz",
  "company": "asdf",
}

const Signin = () => {
  const [values, setValues] = useState(initialValue);
  const navigate = useNavigate();
  const handleSigninSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("signinNameValue", values.name);
    localStorage.setItem("signinEmailValue", values.email);
    localStorage.setItem("signinPhoneValue", values.phone);
    localStorage.setItem("signinPasswordValue", values.password);
    localStorage.setItem("signinCompanyValue", values.company);
    navigate("/setting");
  };
  const handleOnChange = (e) => {
    console.log([e.target.name], e.target.value)
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="signin">
      <h2 className="signinTitle">Create your PopX account</h2>

      <form onSubmit={handleSigninSubmit} className="signinForm">
        <label htmlFor="name">
          Full Name<span>*</span>
        </label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={handleOnChange}
          placeholder="Enter Name"
          required
        />
        <label htmlFor="phone">
          Phone Number<span>*</span>
        </label>
        <input
          type="number"
          name="phone"
          id="phone"
          onChange={handleOnChange}
          placeholder="Enter your phone number"
          required
        />
        <label htmlFor="email">
          Email Address<span>*</span>
        </label>
        <input
          type="email"
          name="enail"
          id="email"
          onChange={handleOnChange}
          placeholder="Enter your Email"
          required
        />
        <label htmlFor="password">
          Password<span>*</span>
        </label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={handleOnChange}
          placeholder="Create Password"
          required
        />
        <label htmlFor="company">Company name</label>
        <input
          type="text"
          name="company"
          onChange={handleOnChange}
          id="company"
          placeholder="Enter Company name"
        />
        <div className="quary">
          <p>
            Are you an Agency<span>*</span>
          </p>
          <div className="radioIn">
            <input type="radio" name="yes" id="yes" />
            <label htmlFor="yes" className="yesRadio">
              Yes
            </label>
            <input type="radio" name="no" id="no" />
            <label htmlFor="no" className="noRadio">
              No
            </label>
          </div>
        </div>
        <button type="submit" className="signBtn">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default Signin;
