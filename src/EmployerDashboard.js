import React, { useState, useEffect} from "react";
import './Employer.css';
import './Buttons.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import logo from "./TDA Logo.jpg";
import Table from 'react-bootstrap/Table'

function EmployerDashboard(props) {
  const [profiles, cProfiles] = useState([]);
  const [unfilter, unfilterProfiles] = useState([]);
  const [current, cCurrent] = useState(undefined);

  const refreshList = () => {
    // console.log(props.client.getProfiles())
    props.client.getProfiles().then((response) => {
    cProfiles(response.data)
    unfilterProfiles(response.data)
    })
  };

  // the filter needs to be able to deal with missing

  useEffect(() => {
    refreshList();
  }, []);

const filters = (tech) => {
    cProfiles (profiles.filter(profiles => {
    console.log(profiles.skills)
    return profiles.skills.includes(tech);
      }
  ))
};

const unfilters = () => {
  cProfiles (unfilter)
};

const section1 = () => {
  
    return profiles.map((current) => {      

      return (
        <Table> 
        <div key={current._id}>
        <div className = "gradCard1">
                  
          <tb className = "fieldSpace"><strong>Full Name:  </strong>   {current.fullName}</tb>  <br />
          <tb className = "fieldSpace"><strong>Course Title:  </strong>   {current.courseTitle}</tb>    <br /> 
          <tb className = "fieldSpace"><strong>Email:  </strong> {current.email}</tb> <br />
          <tb className = "fieldSpace"><strong>Contact Number:  </strong>   {current.contactNumber}</tb> <br />  
          <tb className = "fieldSpace"><strong>City:</strong>   {current.city}</tb>
          <br /><tb className = "fieldSpace"><strong>Full Bio:</strong> {current.bio}</tb><br />
          <tb className = "fieldSpace"><strong>List of Skills:</strong> {current.skills}</tb>   <br />       
          <tb className = "fieldSpace"><strong>Hired?:</strong> {current.employed}</tb> 
               
          <a href={current.linkedIn} target="_blank" rel="noopener noreferrer"><strong>LinkedIn:</strong> {current.linkedIn} </a> <br />          
          <a href={current.gitHub} target="_blank" rel="noopener noreferrer"><strong>GitHub:</strong> {current.gitHub} </a>   <br />           
          <a href={current.portfolio} target="_blank" rel="noopener noreferrer"><strong>Portfolio:</strong> {current.portfolio} </a>  <br />
          <a href={current.cv} target="_blank" rel="noopener noreferrer"><strong>C.V:</strong> {current.cv} </a>                      
          <br></br>         
          <br></br>
        </div>
        </div>
        </Table>
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
    
      <div className = " row  col-md-8">

        <h1>Graduate Search</h1>

        <input type="checkbox" name="Clear Filters" onChange={() => unfilters("Clear Filters")}/><label for="Clear Filters">Clear Filters</label>

        <form>
            <p>Please slecet the skills you are looking for:</p>

            {/* <input type="checkbox" name="Teamwork" onChange={() => filters("Teamwork")}/> */}

            <input type="checkbox" name="Teamwork" onChange={() => filters("Teamwork")}/><label for="Teamwork">Teamwork</label>
            <input type="checkbox" name="GitHub" onChange={() => filters("GitHub")}/><label for="GitHub">GitHub</label>
            <input type="checkbox" name="HTML" onChange={() => filters("HTML")}/><label for="HTML">HTML</label>
            <input type="checkbox" name="Javascript" onChange={() => filters("Javascript")}/><label for="Javascript">Javascript</label>
            <input type="checkbox" name="CSS" onChange={() => filters("CSS")}/><label for="CSS">CSS</label>
            <input type="checkbox" name="Bootstrap" onChange={() => filters("Bootstrap")}/><label for="Bootstrap">Bootstrap</label>
            <input type="checkbox" name="PHP" onChange={() => filters("PHP")}/><label for="PHP">PHP</label>
            <input type="checkbox" name="Flexbox" onChange={() => filters("Flexbox")}/><label for="Flexbox">Flexbox</label>
            <input type="checkbox" name="OOP" onChange={() => filters("OOP")}/><label for="OOP">OOP</label>
            <input type="checkbox" name="Paired_Programming" onChange={() => filters("Paired Programming")}/><label for="Paired Programming">Paired Programming</label>
            <input type="checkbox" name="TDD" onChange={() => filters("TDD")}/><label for="TDD">TDD</label><br></br>
            <input type="checkbox" name="MongoDB" onChange={() => filters("MongoDB")}/><label for="MongoDB">MongoDB</label>
            <input type="checkbox" name="SASS" onChange={() => filters("SASS")}/><label for="SASS">SASS</label>
            <input type="checkbox" name="Agile" onChange={() => filters("Agile")}/><label for="Agile">Agile</label>
            <input type="checkbox" name="REST_API" onChange={() => filters("REST API")}/><label for="REST API">REST API</label>
            <input type="checkbox" name="Express" onChange={() => filters("Express")}/><label for="Express">Express</label>
            <input type="checkbox" name="Regular_Expressions" onChange={() => filters("Regular Expressions")}/><label for="Regular Expressions">Regular Expressions</label>
            <input type="checkbox" name="Node.JS" onChange={() => filters("Node.JS")}/><label for="Node.JS">Node.JS</label>
            <input type="checkbox" name="Debugging" onChange={() => filters("Debugging")}/><label for="Debugging">Debugging</label>
            <input type="checkbox" name="Project Management" onChange={() => filters("Project Management")}/><label for="Project Management">Project Management</label>
           
        </form>

        <br></br>
        <br></br>

          <Container className = "row col-md-8">
            
            <div className = "column2Section2 col-md-8" id = "outputForm">
           
               <div className = "cols">
                <Row className="col1 col-md-2">
                  <Col>{section1()}</Col>
                </Row>
              </div>

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


