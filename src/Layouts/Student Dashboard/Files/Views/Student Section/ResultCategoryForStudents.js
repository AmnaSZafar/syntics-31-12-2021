import React, { useState, useEffect } from 'react'
import { Row, Col } from "reactstrap";
import {BrowserRouter as Router, Switch, Link, Route, useHistory, useParams} from 'react-router-dom' 
import { CDBBtn, CDBContainer } from "cdbreact";
import "../../../ResultCategory.scss"


function ResultsCategoryForStudents() {
  let {id} = useParams()
  const history = useHistory()
  const onSubjectClick = (e) => {
    e.preventDefault(e)
    history.push(`/student/answer-list/${id}`)
  }

  const onTestClick = (e) => {
    e.preventDefault(e)
    history.push(`/student/answer-list-test/${id}`)
  }

  const onAssignmentClick = (e) => {
    e.preventDefault(e)
    history.push(`/student/answer-list-assignments/${id}`)
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
<h1 className='text-center display-4 my-3' style={{ color:'rgba(55, 64, 85, 0.9)', fontWeight:'900' }}>Category of Results</h1>

{/* DataTales Example */}
<div className="card align-middle justify-content-center m-auto shadow-sm  col-xl-10 col-lg-9 col-md-8  border-0 mb-4">
<div className="my-3" style = {{color : "rgba(55, 64, 85, 0.9)"}}>
<h5 className="mb-2 lead display-5 text-center" style={{ color:'rgba(55, 64, 85, 0.9)', fontWeight:'900' }}>Select A Category</h5>
</div>
<div className="card-body">
<Row className="mt-3">
    <Col md="4">
    <div className = "text-center">
                            <button className="btn m-2 shadow-sm  btn-outline-muted" style = {{fontWeight : "bold", }} onClick={(e) => onSubjectClick(e)}>
                            Results of  Subjects
                            </button>
                          </div>
      </Col>
      <Col md="4">
      <div className = "text-center">
                            <button className="btn lead m-2 shadow-sm  btn-outline-muted" style = {{fontWeight : "900", color:'rgba(55, 64, 85, 0.9)' }} onClick={(e) => onTestClick(e)}>
                            Results of  Tests
                            </button>
                          </div>
      </Col>
      <Col md="4">
      <div className = "text-center">
                            <button className="btn lead m-2 shadow-sm  btn-outline-muted" style = {{fontWeight : "900", color:'rgba(55, 64, 85, 0.9)' }} onClick={(e) => onAssignmentClick(e)}>
                            Results of  Assignments
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

export default ResultsCategoryForStudents
