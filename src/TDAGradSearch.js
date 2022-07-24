import React, { useState, useEffect} from "react";
import './App.css';
import './Login.css';
import './Navigation.css';
import './Buttons.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Add from './Add';
import Card from 'react-bootstrap/Card'
import logo from "./TDA Logo.jpg";
import LinkedIn from "./LinkedInLogo.png";
import GitHub from "./GitHub Logo.png";
import WebPort from "./webport.png";


function TDAGradSearch(props) {
  const [profiles, cProfiles] = useState([]);
  const [current, cCurrent] = useState(undefined);
  const [unfilter, unfilterProfiles] = useState([]);

  const refreshList = () => {
    props.client.getProfiles().then((response) => {

    cProfiles(response.data)
    unfilterProfiles(response.data)             
  
    })
  };

  const filters = (tech) => {
    console.log(profiles)
    cProfiles (profiles.filter(profiles => {
      return profiles.fullName.toUpperCase().includes(tech);
        }
    ))
  };

  const unfilters = () => {
    cProfiles (unfilter);
    document.getElementById("search").value = "";
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
            <a href={current.linkedIn} target="_blank" rel="noopener noreferrer"> {current.linkedIn} </a>
       </div>
       );
     });
   };

   const gitHub = () => {
    return profiles.map((current) => {
      return (
        <div key={current._id}>
            <a href={current.gitHub} target="_blank" rel="noopener noreferrer"> {current.gitHub} </a>
       </div>
       );
     });
   };

   const personalPortfolio = () => {
    return profiles.map((current) => {
      return (
        <div key={current._id}>
            <a href={current.portfolio} target="_blank" rel="noopener noreferrer"> {current.portfolio} </a>
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



  const section1 = () => {
    return profiles.map((current) => {
      return (
        <div key={current._id}>
          <Card className = "col-md-2">
            <div>
              {/* <div className = "fieldSpace"><strong>Username:</strong>  {current.userName}</div> */}
              <div className = "fieldSpace"><strong>Course Title:</strong>   {current.courseTitle}</div>
              <div className = "fieldSpace"><strong>Full Name:</strong>   {current.fullName}</div>       
              <div className = "fieldSpace"><strong>Email:</strong> {current.email}</div>
              <div className = "fieldSpace"><strong>Contact Number:</strong>   {current.contactNumber}</div>              
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

              <div ><img src={LinkedIn} width="50" height="50" alt="LinkedIn Logo"/> {linkedIn()}

                    <img src={GitHub} width="50" height="50" alt="TDA logo"/>{gitHub()}
              
              <img src={WebPort} width="50" height="50" alt="TDA logo"/><strong>Personal Portfolio:</strong> {personalPortfolio()}</div>  
              
              <button className = "login-submit2"  onClick={() => {updateProfile(current); setVisibleInput(false); setVisibleOutput(true)}}> Edit Graduate Profile</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  
              <button className = "login-submit2"  onClick={() => removeProfile (current._id)}> Remove Graduate Profile</button>      
          
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
              <div className = "fieldSpace"><strong>City:</strong>   {current.city}</div>
              <div className = "fieldSpace"><strong>Full Bio:</strong> {current.bio}</div>
              <div className = "fieldSpace"><strong>List of Skills:</strong> {current.skills}</div>          
              <div className = "fieldSpace"><strong>Hired?:</strong> {current.employed}</div>
            </div>
           </Card>
        </div>
      );
    });
  };

  const [visibleOutput, setVisibleOutput] = useState(false);
  const [visibleInput, setVisibleInput] = useState(true);


  // const section3 = () => {
  //   return profiles.map((current) => {
  //     return (
  //       <div key={current._id}>
  //         <Card className = "">
  //             <div className = "add-submit">
                /* <button className = "login-submit2"  onClick={() => removeProfile (current._id)}> remove</button>
                <button className = "login-submit2"  onClick={() => {updateProfile(current); setVisibleInput(true); setVisibleOutput(true)}}> update</button>                */
              /* </div>
            </Card>
        </div>
      );
    });
  }; */

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
    
      <div className =" column1 col-md-2">
        {/* <br></br> 
          <img className = "image" src={img} alt="" width = "150px" height = "150px"/>
        <br></br> 
          <input type="file" onChange={onImageChange} />
        <br></br> 
        <br></br>  */}

        {/* CV */}
        {/* <div className = "socialSpacing">        
            <img src={CV} width="50" height="50" alt="TDA logo"/> */}
            {/* <input type="text" placeholder ="Upload your CV"/> */}
            {/* <input type="file" onChange={onFileChange} /> 
            <button> 
              Upload
            </button> 
        </div> */}
        

        {/* LinkedIn  */}
       <div className = "socialMedia">

       
       <Row>
        <h1> the 
        <br></br>DEVELOPER 
        <br></br>Academy</h1>

            {/*create a new Gradute */}
            <p>Create a new Graduate Profile</p>
            <br></br>
            <button className = "login-submit2"  onClick={() => {updateProfile(current); setVisibleInput(false); setVisibleOutput(true)}}> Create New Gradute</button>

            <br></br>
            <br></br>
            <br></br>

            <p>Search for a Graduate by Full Name</p>
            <input type="text" id="search" onChange={() => filters(document.getElementById("search").value.toUpperCase())}/>

            <br></br>
            <br></br>

            <button onClick={() =>  unfilters("Clear Filters")}> 
                Clear Filter               
            </button>

          </Row>
        <br></br>

      </div>

      </div>



      {/* /****Column 2 - Name, details and 2 tabs***************************************************************************************************************/}      
    
      <div className = "row  col-md-10">

        

        {/* <Row className="column2 col-md-2">
            <Col>{section()}</Col>
        </Row> */}

          {/* /****Column 2/1 - User Input form***************************************************************************************************************/}  
          <Container className = "row col-md-10">

          {visibleOutput && 

            <Row className = "row column2Section1 col-md-5" id = "inputForm">
          
                <Col className = "addForm">
                  <Add
                    client={props.client}
                    refreshList={() => {
                      refreshList();
                      cCurrent(undefined);
                      window.location.reload(true) 
                    }}
                    currentProfile={current}
                  />
                </Col>
            </Row> }


            {/* /****Column 2/2 - Profile Display table***************************************************************************************************************/}    
            <div className = "column2Section2 col-md-5" id = "outputForm">

            {visibleInput &&  

             <div className = "cols">

                <Row className="col1 col-md-2.5">
                  <Col>{section1()}</Col>
                </Row>

                <Row className="col2 col-md-2.5">
                  <Col>{section2()}</Col>
                </Row>

                {Media()}

              </div>
              } 

              {/* <Row className="row3 col-md-4">
                <div>{section3()}</div>
              </Row> */}

              </div>     
            
          </Container>
     </div>
  
{/* /********************************************************************************************************************************/}      
    </Container>
      
{/* /**********************************************************************************************************************/}
    </>
  );
}

export default TDAGradSearch;


