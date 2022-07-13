import React, { useState } from "react";
import Card from "react-bootstrap/Card"
import MultiSelect from "react-multiple-select-dropdown-lite";
import "react-multiple-select-dropdown-lite/dist/index.css";

function Add(props) {
  const [disabled, cDisabled] = useState(false);
  // const [uName, setuName] = useState();

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
        alert("error occurred -incorrect input format, please try again");
        cDisabled(false);
      });
  };

  const [value, setvalue] = useState("");

  const handleOnchange = (value) => setvalue(value);

  console.log (handleOnchange)

  const options = [
    { label: "Option 1", value: "Option 1" },
    { label: "Option 2", value: "Option 2" },
    { label: "Option 3", value: "Option 3" },
    { label: "Option 4", value: "Option 4" }
  ];

 
  // const [visible, setVisible] = useState(true);

  return (
    <>
      {props.currentProfile ? "Update" : ""}
      <br />

      <div class="Card">
        <div class="Card-body">
         <card>
          <card-body>              


          {/* {visible &&  */}
          
      <form onSubmit={(e) => submitHandler(e)} id="addForm">

        <div class="form-col-one">
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
      

        <div class="form-col-one">
          <div class="sub-entry">
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
                    {value}
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
      </card-body>
      </card>
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

