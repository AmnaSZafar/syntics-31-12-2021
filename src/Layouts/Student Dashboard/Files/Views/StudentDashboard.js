import React, { useState, useEffect }  from 'react'
import { useRouteMatch, useHistory, useLocation, useParams } from "react-router-dom";
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";

function StudentDashboard() {
   
    const location = useLocation();
    
    return (
        <div>
      <div>
       {/* Content Wrapper */}
<div id="content-wrapper" className="d-flex flex-column mt-5 pt-4">
{/* Main Content */}
<div id="content">
{/* Begin Page Content */}
<div className="containerBlackDashboard-fluid mt-5">
  {/* Page Heading */}
  <h1 className='text-center display-4 my-3' style={{ color:'rgba(55, 64, 85, 0.9)', fontWeight:'900' }}></h1>
  
  {/* DataTales Example */}
  <div className="card align-middle justify-content-center m-auto shadow-sm  col-xl-10 col-lg-9 col-md-8  border-0 mb-4">
    <div className="my-3" style = {{color : "rgba(55, 64, 85, 0.9)"}}>
      <h5 className="m-0 font-weight-bold text-center text-white"> Welcome {location.state.name}!</h5>
    </div>
  </div>
</div>

{/* /.containerBlackDashboard-fluid */}
</div>
{/* End of Main Content */}
{/* Footer */}

{/* End of Footer */}
</div>
{/* End of Content Wrapper */}
{/* End of Page Wrapper */}
      </div>
        </div>
    )
}

export default StudentDashboard
