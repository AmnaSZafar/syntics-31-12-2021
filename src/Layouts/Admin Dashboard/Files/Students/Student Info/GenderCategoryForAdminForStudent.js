import React, { useState, useEffect, useRef } from 'react'
import { Formik, FormikConsumer, useFormik } from 'formik'
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { useRouteMatch, useHistory, useLocation, Link, useParams } from "react-router-dom";


function GenderCategoryForAdminForStudent() {
  let {id} = useParams()
  const location = useLocation();
  const history = useHistory()
  
 
  const handleOnClick = (e) => {
    e.preventDefault(e)
    if(e.target.value == "Male"){
      history.push({
        pathname:`/admin/student-info-table/${id}`,
        state: "Male"
      })
    }
    else if(e.target.value == "Female"){
   
      history.push({
        pathname:`/admin/student-info-table/${id}`,
        state: "Female"
      })
    }
  }
    return (
     
  <>
<div>
 {/* Content Wrapper */}
<div id="content-wrapper" className="d-flex flex-column mt-5 pt-4">
{/* Main Content */}
<div id="content">
{/* Begin Page Content */}
<div className="containerBlackDashboard-fluid mt-5">
{/* Page Heading */}
<h1 className='text-center display-4 my-3' style={{ color:'rgba(55, 64, 85, 0.9)', fontWeight:'900' }}>Category of Gender</h1>

{/* DataTales Example */}
<div className="card align-middle justify-content-center m-auto shadow-sm  col-xl-10 col-lg-9 col-md-8  border-0 mb-4">
<div className="my-3" style = {{color : "rgba(55, 64, 85, 0.9)"}}>
<h5 className="mb-2 lead display-5 text-center" style={{ color:'rgba(55, 64, 85, 0.9)', fontWeight:'900' }}>Select A Category</h5>
</div>
<div className="card-body">
<Row className="mt-3">
    <Col md="6">
    <div className = "text-center" >
                            <button className="btn btn-primary text-cenm"  value = "Male" onClick={(e) => handleOnClick(e)}>
                            Male <br /> Students
                            </button>
                          </div>
      </Col>
      <Col md="6">
      <div className = "text-center">
                            <button className="btn m-2 shadow-sm  btn-outline-muted"   value = "Female" onClick={(e) => handleOnClick(e)}>
                            Female <br /> Students
                            </button>
                          </div>
      </Col>
      </Row>
      
</div>
</div>
</div>

{/* /.containerBlackDashboard-fluid */}
</div>
{/* End of Main Content */}
{/* Footer */}
<footer className="sticky-footer bg-transparent">
<div className="containerBlackDashboard my-auto">
<div className="copyright text-center my-auto">
<span></span>
</div>
</div>
</footer>
{/* End of Footer */}
</div>
{/* End of Content Wrapper */}
{/* End of Page Wrapper */}
</div>
</>
       
    )
}

export default GenderCategoryForAdminForStudent
