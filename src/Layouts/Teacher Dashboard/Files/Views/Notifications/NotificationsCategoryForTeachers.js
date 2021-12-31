import React, { useState, useEffect } from 'react'
import { Row, Col } from "reactstrap";
import {BrowserRouter as Router, Switch, Link, Route, useHistory, useParams} from 'react-router-dom' 
import { CDBBtn, CDBContainer } from "cdbreact";
//import "../../../ResultCategory.scss"

function NotificationsCategoryForTeachers() {
    let {id} = useParams()
    const history = useHistory()

    const handleClick = (e) => {
      e.preventDefault(e)
      history.push({
          pathname: `/teacher/notification-list/${id}`,
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
        <h1 className='text-center display-4 my-3' style={{ color:'rgba(55, 64, 85, 0.9)', fontWeight:'900' }}>List of Grades for Query</h1>
        
        {/* DataTales Example */}
        <div className="card align-middle justify-content-center m-auto shadow-sm  col-xl-10 col-lg-9 col-md-8  border-0 mb-4">
        <div className="my-3" style = {{color : "rgba(55, 64, 85, 0.9)"}}>
        <h5 className="mb-2 lead display-5 text-center" style={{ color:'rgba(55, 64, 85, 0.9)', fontWeight:'900' }}>Select A Grade</h5>
        </div>
        <div className="card-body">
        <Row className="mt-3">
            <Col md="4">
            <div className="containerCard mt-3 mb-3">
                                    <button className="btn m-2 shadow-sm  btn-outline-muted" style = {{fontWeight : "bold" }} value = "1" onClick = {(e) => handleClick(e)} >
                                      Grade 1
                                    </button>
                                  </div>
              </Col>
              <Col md="4">
              <div className="containerCard mt-3 mb-3">
                                    <button className="btn m-2 shadow-sm  btn-outline-muted" style = {{fontWeight : "bold" }} value = "2" onClick = {(e) => handleClick(e)} >
                                      Grade 2
                                    </button>
                                  </div>
              </Col>
              <Col md="4">
              <div className="containerCard mt-3 mb-3">
                                    <button className="btn m-2 shadow-sm  btn-outline-muted" style = {{fontWeight : "bold" }} value = "3" onClick = {(e) => handleClick(e)} >
                                      Grade 3
                                    </button>
                                  </div>
              </Col>
              </Row>
              <Row className="mt-3">
            <Col md="4">
            <div className="containerCard mt-3 mb-3">
                                    <button className="btn m-2 shadow-sm  btn-outline-muted" style = {{fontWeight : "bold" }} value = "4" onClick = {(e) => handleClick(e)} >
                                      Grade 4
                                    </button>
                                  </div>
              </Col>
              <Col md="4">
              <div className="containerCard mt-3 mb-3">
                                    <button className="btn m-2 shadow-sm  btn-outline-muted" style = {{fontWeight : "bold" }} value = "5" onClick = {(e) => handleClick(e)} >
                                      Grade 5
                                    </button>
                                  </div>
              </Col>
              <Col md="4">
              <div className="containerCard mt-3 mb-3">
                                    <button className="btn m-2 shadow-sm  btn-outline-muted" style = {{fontWeight : "bold" }} value = "6" onClick = {(e) => handleClick(e)} >
                                      Grade 6
                                    </button>
                                  </div>
              </Col>
              </Row>
              <Row className="mt-3">
            <Col md="4">
            <div className="containerCard mt-3 mb-3">
                                    <button className="btn m-2 shadow-sm  btn-outline-muted" style = {{fontWeight : "bold" }} value = "7" onClick = {(e) => handleClick(e)} >
                                      Grade 7
                                    </button>
                                  </div>
              </Col>
              <Col md="4">
              <div className="containerCard mt-3 mb-3">
                                    <button className="btn m-2 shadow-sm  btn-outline-muted" style = {{fontWeight : "bold" }} value = "8" onClick = {(e) => handleClick(e)} >
                                      Grade 8
                                    </button>
                                  </div>
              </Col>
              <Col md="4">
              <div className="containerCard mt-3 mb-3">
                                    <button className="btn m-2 shadow-sm  btn-outline-muted" style = {{fontWeight : "bold" }} value = "9" onClick = {(e) => handleClick(e)} >
                                      Grade 9
                                    </button>
                                  </div>
              </Col>
              </Row>
              <Row className="mt-3">
            <Col md="4">
            <div className="containerCard mt-3 mb-3">
                                    <button className="btn m-2 shadow-sm  btn-outline-muted" style = {{fontWeight : "bold" }} value = "10" onClick = {(e) => handleClick(e)} >
                                      Grade 10
                                    </button>
                                  </div>
              </Col>
              <Col md="4">
              <div className="containerCard mt-3 mb-3">
                                    <button className="btn m-2 shadow-sm  btn-outline-muted" style = {{fontWeight : "bold" }} value = "11" onClick = {(e) => handleClick(e)} >
                                      Grade 11
                                    </button>
                                  </div>
              </Col>
              <Col md="4">
              <div className="containerCard mt-3 mb-3">
                                    <button className="btn m-2 shadow-sm  btn-outline-muted" style = {{fontWeight : "bold" }} value = "12" onClick = {(e) => handleClick(e)} >
                                      Grade 12
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

export default NotificationsCategoryForTeachers
