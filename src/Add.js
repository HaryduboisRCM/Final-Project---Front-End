import React, { Profiler, useState } from "react";
import Card from "react-bootstrap/Card"
import MultiSelect from "react-multiple-select-dropdown-lite";
import "react-multiple-select-dropdown-lite/dist/index.css";

function Add(props) {
  const [disabled, cDisabled] = useState(false);
  const [uName, setuName] = useState();

  const [img, setImg] = useState();
  const [file, setFile] = useState();

  // Allow a user to insert an image of themsleves
  const onImageChange = (e) => {
    console.log(e.target.files[0].name)
    setImg (e.target.files[0].name);
    // setImg(URL.createObjectURL(file));
  };

  // const onFileChange = (e) => {
  //   const [file] = e.target.files;
  //   setFile(URL.createObjectURL(file));
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
        e.target.cv.value);
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
        e.target.cv.value);
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


          {/* {visible &&  */}
          
      <form onSubmit={(e) => submitHandler(e)} id="addForm">

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
            
              {/* <input type="text" defaultValue={props.currentProfile?.image}  name="image" disabled={disabled}/>     */}
              <input type="file" onChange={onImageChange}  />     
              {/* <input type="text" defaultValue={[file]}  disabled={disabled}/>        */}
                          
              <br />
              <br />  
                
              cv: 
              <br />      
                <input type="text" defaultValue={props.currentProfile?.cv}  name="cv" disabled={disabled}/>     
              <br />
              <br />  
              </div>

                  
              <div className = "add-submit">
                <button className = "login-submit" type="submit" disabled={disabled}>
                  {" "}Submit{" "}
                </button>
              </div>

        </div> 
        {/* <div className = "add-submit">
          <button className = "login-submit" type="submit" disabled={disabled}>
            {" "}Submit{" "}
          </button>
        </div> */}
        
      </form>
      </Card-Body>
      </Card>
      </div> 
     </div> 
    </>
  );
}

export default Add;


   {/* <input type="text" defaultValue={props.currentProfile?.skills} name="skills" disabled={disabled}></input> */}

              {/* <label for="skills">Choose 5 Skills:</label>
              <select name="skills" id="skills" multiple>
              <option value="Teamwork">Teamwork</option>
              <option value="GitHub">GitHub</option>
              <option value="HTML">HTML</option> */}
               {/* <option value="Javascript">Javascript</option>
              <option value="CSS">CSS</option>
              <option value="Bootstrap">Bootstrap</option>
              <option value="PHP">PHP</option>
              <option value="Flexbox">Flexbox</option>
              <option value="OOP">OOP</option>
              <option value="Paired Programming">Paired Programming</option>
              <option value="TDD">TDD</option>
              <option value="MongoDB">MongoDB</option>
              <option value="SASS">SASS</option>
              <option value="Agile">Agile</option>
              <option value="API's">API's</option>
              <option value="Express">Express</option>
              <option value="Regular Expressions">Regular Expressions</option>
              <option value="Node.JS">Node.JS</option>
              <option value="Debugging">Debugging</option>
              <option value="Project Management">Project Management</option>
              </select>
              <br /> */}

