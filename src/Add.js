import React, { Profiler, useState, useEffect } from "react";
import Card from "react-bootstrap/Card"
import MultiSelect from "react-multiple-select-dropdown-lite";
import "react-multiple-select-dropdown-lite/dist/index.css";

function Add(props) {
  const [disabled, cDisabled] = useState(false);
  // const [userName, setuserName] = useState(false);

  const [img, setImg] = useState();
  const [cvfile, setFile] = useState();

  // Allow a user to insert an image of themsleves
  const onImageChange = (e) => {
    const img = e.target.files;
    setImg(e.target.files[0].name);
  };

  const onFileChange = (e) => {
    const cvfile = e.target.files;
    setFile(e.target.files[0].name);
  };

  // const onUserChange = (e) => {
  //   const userName = e.target.userName;
  //   setFile(e.target.userName.value);
  // };



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
        e.target.portfolio.value,
        img,
        cvfile);
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
        e.target.portfolio.value,
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
        alert("error occurred -incorrect input format, please try again");
        cDisabled(false);
      });
  };

  const [value, setvalue] = useState("");

  const handleOnchange = (value) => setvalue(value);

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

  // const [visible, setVisible] = useState(true);

  return (
    <>

      {props.currentProfile ? "Update" : ""}
      <br />

      <div className="Card">
        <div className="Card-body">
         <Card>
          <Card-Body>              

          {/* window.location.reload(true) */}

          {/* {visible &&  */}
          
      <form onSubmit={(e) => {submitHandler(e); /*setVisible();*/ }} id="addForm">

        <div className="form-col-one">
              Username:
              <br />
                 <input type="text" defaultValue={props.currentProfile?.userName} name="uName" disabled={disabled}/>       
              <br />
              <br />     

              Course Title: 
              <br />
                <input type="text" defaultValue={props.currentProfile?.courseTitle} name="cTitle" disabled={disabled}/>       
              <br />
              <br />  

              Full Name: 
              <br />
                <input type="text" defaultValue={props.currentProfile?.fullName} name="fName" disabled={disabled}/>
              <br /> 
              <br />   

              Email: 
              <br />    
                <input type="text" defaultValue={props.currentProfile?.email} name="email" disabled={disabled}/>     
              <br />
              <br />  

              Contact Number:
              <br />
                <input type="text" defaultValue={props.currentProfile?.contactNumber} name="cNumber" disabled={disabled}/>
              <br /> 
              <br />  

              City:
              <br />       
                <input type="text" defaultValue={props.currentProfile?.city} name="city" disabled={disabled}/>     
              <br />
              <br />  
        </div>
      

        <div className="form-col-one">
          <div className="sub-entry">
              Personal Bio: 
              <br />     
                <input type="text" defaultValue={props.currentProfile?.bio} name="bio" disabled={disabled}/>     
              <br />
              <br />  

              Skills: 
              <br />    
             
              <div>
                <label></label>
                  <MultiSelect
                    // className="multi-select"
                    onChange={handleOnchange}
                    options={options}                 
                  />
                  <br />

                  <div>
                    <b>Skills Selected: </b>
                    {/* {value} */}
                  </div>
                </div> 

                <input type="text" defaultValue={value} name="skills" disabled={disabled}/>     
              <br />
              <br />    

              linkedIn: 
              <br />      
                <input type="text" defaultValue={props.currentProfile?.linkedIn} name="linkedIn" disabled={disabled} />     
              <br />
              <br />    

              gitHub: 
              <br />    
                <input type="text" defaultValue={props.currentProfile?.gitHub} name="gitHub"  disabled={disabled} />     
              <br />
              <br />    

              portfolio: 
              <br />      
                <input type="text" defaultValue={props.currentProfile?.portfolio}  name="portfolio" disabled={disabled}/>     
              <br />
              <br />  
          

              Image: 
              <br /> 
              <input type="file" onChange={onImageChange}  />    
              {/* <input type="text" defaultValue={props.currentProfile?.[file]}  name="image" disabled={disabled}/>      */}
              {/* <input type="text" defaultValue={[file]}  disabled={disabled}/>        */}
                          
              <br />
              <br />  
        
        
              cv: 
              <br />   
              <input type="file" onChange={onFileChange}  />       
                {/* <input type="text" defaultValue={props.currentProfile?.cv}  name="cv" disabled={disabled}/>      */}
              <br />
              <br />  
              </div>

                  
              <div className = "add-submit">
                <button className = "login-submit" type="submit" disabled={disabled}>
                  {" "}Submit{" "}
                </button>
              </div>

        </div> 
 
      </form>

      </Card-Body>
      </Card>
      </div> 
     </div> 
    </>
  );
}

export default Add;

