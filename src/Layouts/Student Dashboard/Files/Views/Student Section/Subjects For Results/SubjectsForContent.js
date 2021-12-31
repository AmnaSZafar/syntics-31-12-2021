import React, { useState, useEffect, useRef } from 'react'
import { Formik, FormikConsumer, useFormik } from 'formik'
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { useRouteMatch, useHistory, useLocation, Link, useParams } from "react-router-dom";
//import { getClasses } from '../../Apis/apiForClasses';
import { getRegisterationStudentsById } from '../../../Apis/apiForRegistrations';
//import "../../../SubjectCard.scss"

function SubjectsForContent() {
    let {id} = useParams()
    const [subjects, setSubjects] = useState()
    const location = useLocation();
    const history = useHistory()

    useEffect(() => {
      const fetchItems = async function() {
        const listOfSubjects = await getRegisterationStudentsById(id)
        setSubjects(listOfSubjects)
       
      }
      fetchItems()
    }, [])
    const handleOnClick = (e) => {
      history.push({
          pathname:`/student/answer-list/${id}`,
          state: e.target.value
      })
    }
    return (
      <div className="container-fluid">
      <div>
          
  <>
<div>
 {/* Content Wrapper */}
<div id="content-wrapper" className="d-flex flex-column mt-5 pt-4">
{/* Main Content */}
<div id="content">
{/* Begin Page Content */}
<div className="containerBlackDashboard-fluid mt-5">
{/* Page Heading */}
<h1 className='text-center display-4 my-3' style={{ color:'rgba(55, 64, 85, 0.9)', fontWeight:'900' }}>List of Subjects</h1>

{/* DataTales Example */}
<div className="card align-middle justify-content-center m-auto shadow-sm  col-xl-10 col-lg-9 col-md-8  border-0 mb-4">
<div className="my-3" style = {{color : "rgba(55, 64, 85, 0.9)"}}>
<h5 className="mb-2 lead display-5 text-center" style={{ color:'rgba(55, 64, 85, 0.9)', fontWeight:'900' }}>Select A Subject</h5>
</div>
<div className="card-body">
<Row className="mt-3">
    <Col md="3">
    <div className="containerCard mt-3 mb-3">
                            <button className="btn m-2 shadow-sm  btn-outline-muted" style = {{fontWeight : "bold", height : "100px", width : "100px" }} value = "English" onClick = {(e) => handleOnClick(e)} >
                              English
                            </button>
                          </div>
      </Col>
      <Col md="3">
    <div className="containerCard mt-3 mb-3">
                            <button className="btn m-2 shadow-sm  btn-outline-muted" style = {{fontWeight : "bold", height : "100px", width : "100px" }} value = "Urdu" onClick = {(e) => handleOnClick(e)} >
                              Urdu
                            </button>
                          </div>
      </Col>
      <Col md="3">
    <div className="containerCard mt-3 mb-3">
                            <button className="btn m-2 shadow-sm  btn-outline-muted" style = {{fontWeight : "bold", height : "100px", width : "100px" }} value = "Math" onClick = {(e) => handleOnClick(e)} >
                              Math
                            </button>
                          </div>
      </Col>
      <Col md="3">
    <div className="containerCard mt-3 mb-3">
                            <button className="btn m-2 shadow-sm  btn-outline-muted" style = {{fontWeight : "bold", height : "100px", width : "100px" }} value = "Science" onClick = {(e) => handleOnClick(e)} >
                              Science
                            </button>
                          </div>
      </Col>
      </Row>
      <Row className="mt-3">
    <Col md="3">
    <div className="containerCard mt-3 mb-3">
                            <button className="btn m-2 shadow-sm  btn-outline-muted" style = {{fontWeight : "bold", height : "100px", width : "100px" }} value = "Computer Science" onClick = {(e) => handleOnClick(e)} >
                             Computer Science 
                            </button>
                          </div>
      </Col>
      <Col md="3">
    <div className="containerCard mt-3 mb-3">
                            <button className="btn m-2 shadow-sm  btn-outline-muted" style = {{fontWeight : "bold", height : "100px", width : "100px" }} value = "Islamiyat" onClick = {(e) => handleOnClick(e)} >
                              Islamiyat
                            </button>
                          </div>
      </Col>
      <Col md="3">
    <div className="containerCard mt-3 mb-3">
                            <button className="btn m-2 shadow-sm  btn-outline-muted" style = {{fontWeight : "bold", height : "100px", width : "100px" }} value = "Social Studies" onClick = {(e) => handleOnClick(e)} >
                              Social Studies
                            </button>
                          </div>
      </Col>
      <Col md="3">
    <div className="containerCard mt-3 mb-3">
                            <button className="btn m-2 shadow-sm  btn-outline-muted" style = {{fontWeight : "bold", height : "100px", width : "100px" }} value = "Art" onClick = {(e) => handleOnClick(e)} >
                              Art
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


      </div>
  </div>
  
    )
}

export default SubjectsForContent
