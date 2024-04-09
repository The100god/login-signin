import React from "react";
import "./Settings.css";
import userImg from "../../assert/user.jpg";
import camera from "../../assert/camera.svg";

const Settings = () => {
  
  const name = localStorage.getItem("signinNameValue");
  const email = localStorage.getItem("signinEmailValue");
  const handleChangeImage=(e)=>{
    var image = document.getElementById('output');
	  localStorage.setItem("userImageUrl",URL.createObjectURL(e.target.files[0]));
    image.src = URL.createObjectURL(e.target.files[0]);
  }
  
  // const user = localStorage.getItem("userImageUrl");
  
  return (
    <div className="setting">
      <div className="heading">Account Settings</div>

      <div className="profile">
        <div className="profileInfo">
          <div className="profilePic">
            <img className="userProfilePic" src={userImg} alt={userImg} id="output" />
            <label htmlFor="fileInput"><img className="uplogeImg" src={camera} alt="" />
          </label>
            <input
          type="file"
          id="fileInput"
          style={{
            display: "none",
          }}
          
          onChange={handleChangeImage}
        />
            {/* <img className="uplogeImg" src={camera} alt="" /> */}
          </div>
          <div className="userInfo">
            <h3>{name}</h3>
            <p>{email}</p>
          </div>
        </div>
        <div className="profileDisc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, quos
          error dicta repudiandae omnis ratione cupiditate asperiores tempore a
          nesciunt cumque officia quam!
        </div>
      </div>
    </div>
  );
};

export default Settings;
