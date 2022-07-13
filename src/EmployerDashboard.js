import React, { useState, useEffect, Link, Route } from "react";
import './App.css';
import './Login.css';
import './Navigation.css';
import './Buttons.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Add from './Add';
import Login from './Login';
import Card from 'react-bootstrap/Card'
import {Button} from 'react-bootstrap';
import logo from "./TDA Logo.jpg";
import LinkedIn from "./LinkedInLogo.png";
import CV from "./CV Logo3.png";
import GitHub from "./GitHub Logo.png";
import WebPort from "./webport.png";


function EmployerDashboard(props) {
  const [profiles, cProfiles] = useState([]);
  const [current, cCurrent] = useState(undefined);
  const [img, setImg] = useState();
  const [file, setFile] = useState();

  // Allow a user to insert an image of themsleves
  const onImageChange = (e) => {
    const [file] = e.target.files;
    setImg(URL.createObjectURL(file));
  };

  const onFileChange = (e) => {
    const [file] = e.target.files;
    setFile(URL.createObjectURL(file));
  };

  // const onFileChange = event => { 
  //   // Update the state 
  //   this.setState({ selectedFile: event.target.files[0] }); 
  // }; 


  const refreshList = () => {
    props.client.getProfiles().then((response) => cProfiles(response.data));
  };

  const removeProfile = (id) => {
    props.client.removeProfile(id).then(() => refreshList());
  };

  const updateProfile = (profile) => {
    cCurrent(profile);
  };

  useEffect(() => {
    refreshList();
  }, []);


  const linkedIn = () => {
    return profiles.map((current) => {
      return (
        <div key={current._id}>
            <a href={current.linkedIn} target="_blank"> {current.linkedIn} </a>
       </div>
       );
     });
   };

   const gitHub = () => {
    return profiles.map((current) => {
      return (
        <div key={current._id}>
            <a href={current.gitHub} target="_blank"> {current.gitHub} </a>
       </div>
       );
     });
   };

   const personalPortfolio = () => {
    return profiles.map((current) => {
      return (
        <div key={current._id}>
            <a href={current.portfolio} target="_blank"> {current.portfolio} </a>
       </div>
       );
     });
   };

  //  const email = () => {
  //   return profiles.map((current) => {
  //     return (
  //       <div key={current._id}>
  //           <a href={current.email} target="_blank"> {current.email} </a>
  //      </div>
  //      );
  //    });
  //  };


//   const section = () => {
//     return profiles.map((current) => {
//       return (
//         <div key={current._id}>
//           <Card className = "col-md-8">
//             <div>
              {/* <div className = "fieldSpace"><strong>Username:</strong>  {current.userName}</div> */}
              {/* <div className = "fieldSpace"><strong>Course Title:</strong>   {current.courseTitle}</div> */}
            {/* </div>
            </Card>
        </div>
      );
    });
  }; */}

  const section1 = () => {
    return profiles.map((current) => {
      return (
        <div key={current._id}>
          <Card className = "col-md-2">
            <div>
              {/* <div className = "fieldSpace"><strong>Username:</strong>  {current.userName}</div>
              <div className = "fieldSpace"><strong>Course Title:</strong>   {current.courseTitle}</div> */}
              <div className = "fieldSpace"><strong>Full Name:</strong>   {current.fullName}</div>
              <div className = "fieldSpace"><strong>Course Title:</strong>   {current.courseTitle}</div>
              <div className = "fieldSpace"><strong>Email:</strong> {current.email}</div>
              <div className = "fieldSpace"><strong>Contact Number:</strong>   {current.contactNumber}</div>
              <div className = "fieldSpace"><strong>City:</strong>   {current.city}</div>
            </div>
            </Card>
        </div>
      );
    });
  };
  
  const Media = () => {
    return profiles.map((current) => {
      return (
        <div key={current._id}>
          <Card className = "col-md-2">
            <div>             
              <div className = "fieldSpace"><img src={LinkedIn} width="50" height="50" alt="LinkedIn Logo"/><strong>LinkedIn:</strong> {linkedIn()}</div>              
              <div className = "fieldSpace"> <img src={GitHub} width="50" height="50" alt="TDA logo"/><strong>gitHub:</strong> {gitHub()}</div>
              <div className = "fieldSpace"> <img src={WebPort} width="50" height="50" alt="TDA logo"/><strong>Personal Portfolio:</strong> {personalPortfolio()}</div>             
            </div>
           </Card>
        </div>
      );
    });
  };


  const section2 = () => {
    return profiles.map((current) => {
      return (
        <div key={current._id}>
          <Card className = "col-md-2">
            <div>
              <div className = "fieldSpace"><strong>Full Bio:</strong> {current.bio}</div>
              <div className = "fieldSpace"><strong>List of Skills:</strong> {current.skills}</div>          
              {/* <div className = "fieldSpace"><img src={LinkedIn} width="50" height="50" alt="LinkedIn Logo"/><strong>LinkedIn Account:</strong> {linkedIn()}</div>              
              <div className = "fieldSpace"> <img src={GitHub} width="50" height="50" alt="TDA logo"/><strong>gitHub Link:</strong> {gitHub()}</div>
              <div className = "fieldSpace"> <img src={WebPort} width="50" height="50" alt="TDA logo"/><strong>Personal Portfolio Link:</strong> {personalPortfolio()}</div> */}
              <div className = "fieldSpace"><strong>Hired?:</strong> {current.employed}</div>
            </div>
           </Card>
        </div>
      );
    });
  };

  const [visibleOutput, setVisibleOutput] = useState(false);
  const [visibleInput, setVisibleInput] = useState(true);


  const section3 = () => {
    return profiles.map((current) => {
      return (
        <div key={current._id}>
          <Card className = "">
              <div className = "add-submit">
                <button className = "login-submit2"  onClick={() => removeProfile (current._id)}> remove</button>
                <button className = "login-submit2"  onClick={() => {updateProfile(current); setVisibleInput(true); setVisibleOutput(true)}}> update</button>
                {/* <button className = "login-submit2"  onClick={() => updateProfile(current)}> update</button> */}
              </div>
            </Card>
        </div>
      );
    });
  };

  return (
    <>


{/* /****Navigation Bar****************************************************************************************************************************/}
    

<Navbar  className = "header col-md-12">
  <Container >
    <Navbar.Brand href="#home">
      <img
        src={logo}
        width="140"
        height="140"
        // className="d-inline-block align-top"
        alt="TDA logo"
      />
    </Navbar.Brand>
  </Container>
</Navbar>



{/* /****Main Container*********************************************************************************************************************************/}

<Container fluid className = " row mainContainer col-md-12">

    
      {/* /****Column 1 - Image and links***************************************************************************************************************/}
    
    {/* this will be visable when the graduate name is clicked */}
      <div className =" column1 col-md-4">
        
        <br></br> 
          <img className = "image" src={img} alt="" width = "150px" height = "150px"/>

        <br></br> 
          <input type="file" onChange={onImageChange} />
        <br></br> 
        <br></br> 


        {/* CV */}
        <div className = "socialSpacing">        
            <img src={CV} width="50" height="50" alt="TDA logo"/>
            {/* <input type="text" placeholder ="Upload your CV"/> */}
            <input type="file" onChange={onFileChange} /> 
            <button> 
              Upload
            </button> 
        </div>
        

        {/* All Media Links */}
        <div className = "socialMedia">
            {Media()}
        </div>

      </div>



      {/* /****Column 2 - Name, details and 2 tabs***************************************************************************************************************/}      
    
      <div className = " row  col-md-8">

        <h1>Graduate Search</h1>

        <form>
            <p>Please slecet the skills you are looking for:</p>
            <input type="radio" name="Teamwork" value="Teamwork"></input><label for="Teamwork">Teamwork</label>
            <input type="radio" name="GitHub" value="GitHub"></input><label for="GitHub">GitHub</label>
            <input type="radio" name="HTML" value="HTML"></input><label for="HTML">HTML</label>
            <input type="radio" name="Javascript" value="Javascript"></input><label for="Javascript">Javascript</label>
            <input type="radio" name="CSS" value="CSS"></input><label for="CSS">CSS</label>
            <input type="radio" name="Bootstrap" value="Bootstrap"></input><label for="Bootstrap">Bootstrap</label>
            <input type="radio" name="PHP" value="PHP"></input><label for="PHP">PHP</label>
            <input type="radio" name="Flexbox" value="Flexbox"></input><label for="Flexbox">Flexbox</label>
            <input type="radio" name="OOP" value="OOP"></input><label for="OOP">OOP</label>
            <input type="radio" name="Paired_Programming" value="Paired Programming"></input><label for="Paired Programming">Paired Programming</label>
            <input type="radio" name="TDD" value="TDD"></input><label for="TDD">TDD</label><br></br>
            <input type="radio" name="MongoDB" value="MongoDB"></input><label for="MongoDB">MongoDB</label>
            <input type="radio" name="SASS" value="SASS"></input><label for="SASS">SASS</label>
            <input type="radio" name="Agile" value="Agile"></input><label for="Agile">Agile</label>
            <input type="radio" name="REST_API" value="REST API"></input><label for="REST API">REST API</label>
            <input type="radio" name="Express" value="Express"></input><label for="Express">Express</label>
            <input type="radio" name="Regular Expressions" value="Regular Expressions"></input><label for="Regular Expressions">Regular Expressions</label>
            <input type="radio" name="Node.JS" value="Node.JS"></input><label for="Node.JS">Node.JS</label>
            <input type="radio" name="Debugging" value="Debugging"></input><label for="Debugging">Debugging</label>
            <input type="radio" name="Project Management" value="Project Management"></input><label for="Project Management">Project Management</label>
        </form>

        

            {/* <Row className="column2 col-md-2">
              <Col>{section()}</Col>
            </Row> */}


          {/* /****Column 2/1 - User Input form***************************************************************************************************************/}  
          <Container className = "row col-md-8">

          {visibleOutput && 

            <Row className = "row column2Section1 col-md-4" id = "inputForm">
          
                <Col className = "addForm">
                  <Add
                    client={props.client}
                    refreshList={() => {
                      refreshList();
                      cCurrent(undefined);
                    }}
                    currentProfile={current}
                  />
                </Col>
            </Row> }


            {/* /****Column 2/2 - Profile Display table***************************************************************************************************************/}    
            <div className = "column2Section2 col-md-4" id = "outputForm">

            {visibleInput &&  

             <div className = "cols">

                <Row className="col1 col-md-2">
                  <Col>{section1()}</Col>
                </Row>

                <Row className="col2 col-md-2">
                  <Col>{section2()}</Col>
                </Row>

              </div>
              } 


              <Row className="row3 col-md-4">
                <div>{section3()}</div>
              </Row>

              </div>     
            
          </Container>
     </div>
  
{/* /********************************************************************************************************************************/}      
    </Container>
      
{/* /**********************************************************************************************************************/}
    </>
  );
}

export default EmployerDashboard;


