import React, { useState } from "react";

function Add(props) {
  const [disabled, cDisabled] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    cDisabled(true);
    let result;
    if (props.currentProfile) {
      result = props.client.updateProfile(
        props.currentProfile._id,
        e.target.uName.value,
        e.target.cTitle.value,
        e.target.fName.value,
        e.target.email.value,
        e.target.cNumber.value,
        e.target.city.value,
        e.target.bio.value,
        e.target.skills.value,
        e.target.linkedIn.value,
        e.target.gitHub.value,
        e.target.portfolio.value);
    } else {
      result = props.client.addProfile(
        e.target.uName.value,
        e.target.cTitle.value,
        e.target.fName.value,
        e.target.email.value,
        e.target.cNumber.value,
        e.target.city.value,
        e.target.bio.value,
        e.target.skills.value,
        e.target.linkedIn.value,
        e.target.gitHub.value,
        e.target.portfolio.value);
    }
    result
      .then(() => {
        cDisabled(false);
        document.getElementById("addForm").reset();
        props.refreshList();
      })
      .catch(() => {
        alert("error occured -incorrect input format, please try again");
        cDisabled(false);
      });
  };

  return (
    <>
      {props.currentProfile ? "Update" : ""}
      <br />

      <form onSubmit={(e) => submitHandler(e)} id="addForm">
        Username: <br />
        <input type="text" defaultValue={props.currentProfile?.userName} name="uName" disabled={disabled}/>       
        <br />
        Course Title: <br />
        <input type="text" defaultValue={props.currentProfile?.courseTitle} name="cTitle" disabled={disabled}/>       
        <br />
        Full Name: <br />
        <input type="text" defaultValue={props.currentProfile?.fullName} name="fName" disabled={disabled}/>
        <br />  
        Email:     
        <input type="text" defaultValue={props.currentProfile?.email} name="email" disabled={disabled}/>     
         <br />
         Contact Number:
        <input type="text" defaultValue={props.currentProfile?.contactNumber} name="cNumber" disabled={disabled}/>
        <br />  
        City:       
        <input type="text" defaultValue={props.currentProfile?.city} name="city" disabled={disabled}/>     
         <br />
        Personal Bio:      
        <input type="text" defaultValue={props.currentProfile?.bio} name="bio" disabled={disabled}/>     
         <br />
        Skills:      
        <input type="text" defaultValue={props.currentProfile?.skills} name="skills" disabled={disabled}/>     
         <br />  
         linkedIn:       
        <input type="text" defaultValue={props.currentProfile?.linkedIn} name="linkedIn" disabled={disabled} />     
         <br />  
         gitHub:     
        <input type="text" defaultValue={props.currentProfile?.gitHub} name="gitHub"  disabled={disabled} />     
        <br />  
        portfolio:       
        <input type="text" defaultValue={props.currentProfile?.portfolio}  name="portfolio" disabled={disabled}/>     
        <br />
        <div className = "add-submit">
          <button className = "login-submit" type="submit" disabled={disabled}>
            {" "}
            Submit{" "}
          </button>
        </div>
      </form>
    </>
  );
}

export default Add;
