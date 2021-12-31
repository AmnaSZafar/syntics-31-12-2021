import React, { useState, useEffect } from 'react'
import { Row, Col } from "reactstrap";
import {BrowserRouter as Router, Switch, Link, Route, useHistory, useParams} from 'react-router-dom' 
import { CDBBtn, CDBContainer } from "cdbreact";
//import "../../../ResultCategory.scss"

function NotificationsCategoryForStudent() {
    let {id} = useParams()
    const history = useHistory()

    const onCreateClick = (e) => {
      e.preventDefault(e)
      history.push({
          pathname: `/student/notifications-subject-students/${id}`,
          state : e.target.value
        
        })
    }
  
    const onViewClick = (e) => {
      e.preventDefault(e)

      history.push({
        pathname: `/student/notifications-subject-students/${id}`,
        state : e.target.value
      
      })
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
  <h1 className='text-center display-4 my-3' style={{ color:'rgba(55, 64, 85, 0.9)', fontWeight:'900' }}>Category of Query</h1>
  
  {/* DataTales Example */}
  <div className="card align-middle justify-content-center m-auto shadow-sm  col-xl-10 col-lg-9 col-md-8  border-0 mb-4">
  <div className="my-3" style = {{color : "rgba(55, 64, 85, 0.9)"}}>
  <h5 className="mb-2 lead display-5 text-center" style={{ color:'rgba(55, 64, 85, 0.9)', fontWeight:'900' }}>Select A Category</h5>
  </div>
  <div className="card-body">
  <Row className="mt-3">
      <Col md="6">
      <div >
                              <button className="" style = {{fontWeight : "bold", height: "90px", width: "90px" }}
                              value = "Create" onClick={(e) => onCreateClick(e)}>
                                    Query <br /> List
                              </button>
                            </div>
        </Col>
        <Col md="6">
        <div >
                              <button className="" style = {{fontWeight : "bold", height: "90px", width: "90px" }} value = "View" onClick={(e) => onViewClick(e)}>
                                    Create Query
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

export default NotificationsCategoryForStudent
