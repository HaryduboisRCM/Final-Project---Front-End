import React, { useState } from "react";
import Card from "react-bootstrap/Card"
import MultiSelect from "react-multiple-select-dropdown-lite";
import "react-multiple-select-dropdown-lite/dist/index.css";
import { PickerDropPane  } from 'filestack-react';
import './Add.css';

function Add(props) {
  const [disabled, cDisabled] = useState(false);
  const [fields, setFields] = useState(false);

  const [img, setImg] = useState();
  const [cvfile, setFile] = useState();

  // Allow a user to insert an image of themsleves
  const handleChange = (e) => {
    console.log(e.target.value)
    const newState = {...fields}
    newState[e.target.name] = e.target.value;
    setFields(newState);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    cDisabled(true);
    let result;
    if (props.currentProfile) {
      console.log(fields,img,cvfile)
      result = props.client.updateProfile(
        props.currentProfile._id,
        // fields.uName,
        fields.cTitle,
        fields.fName,
        fields.email,
        fields.cNumber,
        fields.city,
        fields.bio,
        fields.skills,
        fields.linkedIn,
        fields.gitHub,
        fields.portfolio,
        fields.employed,
        img,
        cvfile);
    } else {
      result = props.client.addProfile(
        // fields.uName,
        fields.cTitle,
        fields.fName,
        fields.email,
        fields.cNumber,
        fields.city,
        fields.bio,
        fields.skills,
        fields.linkedIn,
        fields.gitHub,
        fields.portfolio,
        fields.employed,
        img,
        cvfile);
    }

    result
      .then(() => {
        cDisabled(false);
        document.getElementById("addForm").reset();
        props.refreshList();
      })
      .catch(() => {
        console.error("error occurred -incorrect input format, please try again");
        cDisabled(false);
        props.refreshList();
      });
  };

  const [value, setvalue] = useState("");

  const handleOnchange = (value) => {setvalue (value) 
   const newState = {...fields}
   console.log(newState)
   newState['skills'] = value;
   setFields(newState);
  };

  const options = [
    { label: "Teamwork", value: "Teamwork" },
    { label: "GitHub", value: "GitHub" },
    { label: "HTML", value: "HTML" },
    { label: "Javascript", value: "Javascript" },
    { label: "CSS", value: "CSS" },
    { label: "Bootstrap", value: "Bootstrap" },
    { label: "PHP", value: "PHP" },
    { label: "Flexbox", value: "Flexbox" },
    { label: "OOP", value: "OOP" },
    { label: "Paired Programming", value: "Paired Programming" },
    { label: "TDD", value: "TDD" },
    { label: "MongoDB", value: "MongoDB" },
    { label: "SASS", value: "SASS" },
    { label: "Agile", value: "Agile" },
    { label: "REST APIs", value: "REST APIs" },
    { label: "Express", value: "Express" },
    { label: "Regular Expressions", value: "Regular Expressions" },
    { label: "Node.JS", value: "Node.JS" },
    { label: "Debugging", value: "Debugging" },
    { label: "Project Management", value: "Project Management" },
  ];

  const [visible, setVisible] = useState(true);


  return (
    <>
   
      {props.currentProfile ? "" : ""}
      <br />

      {/* <div className="Card">
        <div className="Card-body">
         <Card>
          <Card-Body>               */}

          {/* window.location.reload(true) */}

          {visible && 
          
      <form onSubmit={(e) => {submitHandler(e); setVisible() }} id="addForm">

        <div className = "addForm">

            <div className="form-col-one">
                Course Title:&nbsp;&nbsp;              
                  <textarea className = "inputForm" type="text" cols="30" rows="1" defaultValue={props.currentProfile?.courseTitle} name="cTitle" onChange={(e) => handleChange(e)} disabled={disabled}/>       
                <br />
                <br /> 
                <br />   

                Full Name:&nbsp;&nbsp;
                  <textarea className = "inputForm" type="text" cols="30" rows="1" defaultValue={props.currentProfile?.fullName} name="fName" onChange={(e) => handleChange(e)} disabled={disabled}/>
                <br />
                <br />   
                <br />  

                Email:&nbsp;&nbsp;  
                  <textarea className = "inputForm" type="text" cols="30" rows="1" defaultValue={props.currentProfile?.email} name="email" onChange={(e) => handleChange(e)} disabled={disabled}/>     
                <br />
                <br />  
                <br />  

                Contact Number:&nbsp;&nbsp;
                  <textarea className = "inputForm" type="text" cols="30" rows="1" defaultValue={props.currentProfile?.contactNumber} name="cNumber" onChange={(e) => handleChange(e)} disabled={disabled}/>
                <br /> 
                <br />  
                <br />  

                City:&nbsp;&nbsp;      
                  <textarea className = "inputForm" type="text" cols="30" rows="1" defaultValue={props.currentProfile?.city} name="city" onChange={(e) => handleChange(e)} disabled={disabled}/>  
                <br /> 
                <br />  
                <br />  

                Personal Bio:
                <br></br>  
                  <textarea className = "inputForm" type="text" cols="30" rows="10" contenteditable defaultValue={props.currentProfile?.bio} name="bio" onChange={(e) => handleChange(e)} disabled={disabled}/>   
                <br /> 
                <br />   

                CV:&nbsp;&nbsp;
                <div className="fileUploadC">
                  <PickerDropPane 
                    apikey={'AmYEocDZSRbOwoISVx42lz'}
                    onSuccess={(res) => setFile(res.filesUploaded[0].url)}
                    onUploadDone={(res) => console.log(res)}
                    /> </div> 
            </div> 

      
      

            <div className="form-col-two">
              linkedIn:&nbsp;&nbsp;      
                <textarea className = "inputForm" type="text" cols="30" rows="1" defaultValue={props.currentProfile?.linkedIn} name="linkedIn" onChange={(e) => handleChange(e)} disabled={disabled} />     
              <br />
              <br />    
              <br /> 

              gitHub:&nbsp;&nbsp;   
                <textarea className = "inputForm" type="text" cols="30" rows="1" defaultValue={props.currentProfile?.gitHub} name="gitHub" onChange={(e) => handleChange(e)} disabled={disabled} />     
              <br />
              <br />    
              <br /> 

              portfolio:&nbsp;&nbsp;      
                <textarea className = "inputForm" type="text" cols="30" rows="1" defaultValue={props.currentProfile?.portfolio}  name="portfolio" onChange={(e) => handleChange(e)} disabled={disabled}/>     
              <br />
              <br />  
              <br /> 

              Employed: Yes/No:&nbsp;&nbsp;
                <textarea className = "inputForm" type="text" cols="30" rows="1" defaultValue={props.currentProfile?.employed}  name="employed" onChange={(e) => handleChange(e)} disabled={disabled}/>     
              <br />
              <br /> 
              <br /> 

              Skills:&nbsp;&nbsp;        
                  <MultiSelect
                    className="multi-select"
                    onChange={handleOnchange}
                    options={options}                 
                  />
               <br />   
              Skills Selected:  
              <br></br>
              <textarea type="text" className = "inputForm" cols="45" rows="10" value={value} name="skills" onChange={(e) => handleChange(e)} disabled={disabled}/>     
              <br />
              <br />    

              Image: 
              <div className="fileUploadI">
                <PickerDropPane 
                  apikey={'AmYEocDZSRbOwoISVx42lz'}
                  onSuccess={(res) => setImg(res.filesUploaded[0].url)}
                  onUploadDone={(res) => console.log(res)}
                  />
              </div>
      
            </div>

            </div>

            <div className = "add-submit">
              <button className = "login-submit" id="submit" type="submit" disabled={disabled}>{" "}Submit{" "}</button>
            </div>

 </form>
}
      {/* </Card-Body>
      </Card>
      </div> 
     </div>  */}
    </>
  );
}

export default Add;

