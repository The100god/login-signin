import React from "react";
import "./CreateAccount.css";
import { useNavigate } from "react-router-dom";

const CreateAccount = () => {
    const navigate = useNavigate()
    const handleCreateAccount=()=>{
        navigate("/signin")
    }

    const handleVisitLogin=()=>{
        navigate("/login")
    }
  return (
    <div className="createAccount">
      <div className="accountCont">
        <div className="title">
          <h2 className="accountTitle">Welcome to PopX</h2>
          <p className="accountSubtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit,</p>
        </div>
        <button className="btn1 btn" onClick={handleCreateAccount}>Create Account</button>
        <button className="btn2 btn" onClick={handleVisitLogin}>Already Registered? Login</button>
      </div>
    </div>
  );
};

export default CreateAccount;
