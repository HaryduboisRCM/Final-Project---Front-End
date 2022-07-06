import React, { useState } from "react";

function Add(props) {
  const [disabled, cDisabled] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    cDisabled(true);
    let result;
    if (props.currentEvent) {
      result = props.client.updateEvent(
        props.currentEvent._id,
        e.target.uName.value,
        e.target.cTitle.value,
        e.target.fName.value,
        e.target.email.value,
        e.target.cNumber.value
      );
    } else {
      result = props.client.addEvent(
        e.target.uName.value,
        e.target.cTitle.value,
        e.target.fName.value,
        e.target.email.value,
        e.target.cNumber.value);
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
      {props.currentEvent ? "Update" : ""}
      <br />

      <form onSubmit={(e) => submitHandler(e)} id="addForm">
        Username: <br />
        <input
          type="text"
          defaultValue={props.currentEvent?.userName}
          name="uName"
          disabled={disabled}
        />       
        <br />
        Course Title: <br />
        <input
          type="text"
          defaultValue={props.currentEvent?.courseTitle}
          name="cTitle"
          disabled={disabled}
        />       
        <br />
        Full Name: <br />
        <input
          type="text"
          defaultValue={props.currentEvent?.fullName}
          name="fName"
          disabled={disabled}
        />
        <br />  
        Email:
         <br />        
        <input
          type="text"
          defaultValue={props.currentEvent?.email}
          name="email"
          disabled={disabled}
        />     
         <br />
         Contact Number:
        <br />
        <input
          type="text"
          defaultValue={props.currentEvent?.contactNumber}
          name="cNumber"
          disabled={disabled}
        />
        <br />
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
