import React, { useState, useEffect, useRef } from 'react'
import { Formik, FormikConsumer, useFormik } from 'formik'
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { useRouteMatch, useHistory, useLocation, Link, useParams } from "react-router-dom";
import { getClasses } from '../../Apis/apiForClasses';
//import { getRegisterationStudentsById } from '../../Apis/apiForRegistrations';
//import "../../../SubjectCard.scss"

function GradeCategoryForAdminForStudent() {
    let {id} = useParams()
    const location = useLocation();
    const history = useHistory()


    const handleOnClick = (e) => {
      //location.state.subjectChoosenForApplication = e.target.value
      formik.values.classesGrade = e.target.value
      console.log(formik.values)
          history.push({
            pathname: `/admin/gender-category-student/${id}`,
            state: formik.values
          })
    }
    const formik = useFormik({
      initialValues: {
        classesGrade: '',
        cvReference: '',
        imgReference: '',
        vidReference:'',
        discription: ''

      },
      
      //4 Make onSubmit propert to handle what happens to data on form submisison
  })

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
      <h1 className='text-center display-4 my-3' style={{ color:'rgba(55, 64, 85, 0.9)', fontWeight:'900' }}>List of Grades for Subject Content</h1>
      
      {/* DataTales Example */}
      <div className="card align-middle justify-content-center m-auto shadow-sm  col-xl-10 col-lg-9 col-md-8  border-0 mb-4">
      <div className="my-3" style = {{color : "rgba(55, 64, 85, 0.9)"}}>
      <h5 className="mb-2 lead display-5 text-center" style={{ color:'rgba(55, 64, 85, 0.9)', fontWeight:'900' }}>Select A Grade</h5>
      </div>
      <div className="card-body">
      <Row className="mt-3">
          <Col md="4">
          <div >
                                  <button className="btn m-2 shadow-sm  btn-outline-muted" style = {{fontWeight : "bold" }} value = "1" onClick = {(e) => handleOnClick(e)} >
                                    Grade 1
                                  </button>
                                </div>
            </Col>
            <Col md="4">
            <div >
                                  <button className="btn m-2 shadow-sm  btn-outline-muted" style = {{fontWeight : "bold" }} value = "2" onClick = {(e) => handleOnClick(e)} >
                                    Grade 2
                                  </button>
                                </div>
            </Col>
            <Col md="4">
            <div >
                                  <button className="btn m-2 shadow-sm  btn-outline-muted" style = {{fontWeight : "bold" }} value = "3" onClick = {(e) => handleOnClick(e)} >
                                    Grade 3
                                  </button>
                                </div>
            </Col>
            </Row>
            <Row className="mt-3">
          <Col md="4">
          <div >
                                  <button className="btn m-2 shadow-sm  btn-outline-muted" style = {{fontWeight : "bold" }} value = "4" onClick = {(e) => handleOnClick(e)} >
                                    Grade 4
                                  </button>
                                </div>
            </Col>
            <Col md="4">
            <div >
                                  <button className="btn m-2 shadow-sm  btn-outline-muted" style = {{fontWeight : "bold" }} value = "5" onClick = {(e) => handleOnClick(e)} >
                                    Grade 5
                                  </button>
                                </div>
            </Col>
            <Col md="4">
            <div >
                                  <button className="btn m-2 shadow-sm  btn-outline-muted" style = {{fontWeight : "bold" }} value = "6" onClick = {(e) => handleOnClick(e)} >
                                    Grade 6
                                  </button>
                                </div>
            </Col>
            </Row>
            <Row className="mt-3">
          <Col md="4">
          <div >
                                  <button className="btn m-2 shadow-sm  btn-outline-muted" style = {{fontWeight : "bold" }} value = "7" onClick = {(e) => handleOnClick(e)} >
                                    Grade 7
                                  </button>
                                </div>
            </Col>
            <Col md="4">
            <div >
                                  <button className="btn m-2 shadow-sm  btn-outline-muted" style = {{fontWeight : "bold" }} value = "8" onClick = {(e) => handleOnClick(e)} >
                                    Grade 8
                                  </button>
                                </div>
            </Col>
            <Col md="4">
            <div >
                                  <button className="btn m-2 shadow-sm  btn-outline-muted" style = {{fontWeight : "bold" }} value = "9" onClick = {(e) => handleOnClick(e)} >
                                    Grade 9
                                  </button>
                                </div>
            </Col>
            </Row>
            <Row className="mt-3">
          <Col md="4">
          <div >
                                  <button className="btn m-2 shadow-sm  btn-outline-muted" style = {{fontWeight : "bold" }} value = "10" onClick = {(e) => handleOnClick(e)} >
                                    Grade 10
                                  </button>
                                </div>
            </Col>
            <Col md="4">
            <div >
                                  <button className="btn m-2 shadow-sm  btn-outline-muted" style = {{fontWeight : "bold" }} value = "11" onClick = {(e) => handleOnClick(e)} >
                                    Grade 11
                                  </button>
                                </div>
            </Col>
            <Col md="4">
            <div >
                                  <button className="btn m-2 shadow-sm  btn-outline-muted" style = {{fontWeight : "bold" }} value = "12" onClick = {(e) => handleOnClick(e)} >
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

export default GradeCategoryForAdminForStudent
