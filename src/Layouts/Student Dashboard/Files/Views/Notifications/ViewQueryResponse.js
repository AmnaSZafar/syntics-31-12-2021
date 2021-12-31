import React, { useState, useEffect, useRef } from 'react'
import { Editor } from '@tinymce/tinymce-react';
import { Formik, FormikConsumer, useFormik } from 'formik'
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { useRouteMatch, useHistory, useLocation, Link, useParams } from "react-router-dom";

function ViewQueryResponseForStudent() {
    let {id} = useParams()
    const location = useLocation();
    const editorRef = useRef(null);
    const history = useHistory()

    const handleClick = (e) => {
      history.push(`/student/notifications-category-students/${id}`)
    }
    return (
        <> 
      <div>
        <div className = "mt-5 pt-4">
                      {/* Content Wrapper */}
        <div id="content-wrapper" className="d-flex flex-column">
        {/* Main Content */}
        <div id="content">
          {/* Begin Page Content */}
          <div className="containerBlackDashboard-fluid mt-5">
            {/* Page Heading */}
            <h1 className='text-center display-4 my-3' style={{ color:'rgba(55, 64, 85, 0.9)', fontWeight:'900' }}>Query Answer Panel</h1>
            {/* DataTales Example */}
            <div className="card align-middle justify-content-center m-auto shadow-sm  col-xl-10 col-lg-9 col-md-8  border-0 mb-4 text-center">
              <div className="my-3" style = {{color : "rgba(55, 64, 85, 0.9)"}}>
                <h5 className="mb-2 lead display-5 text-center" style={{ color:'rgba(55, 64, 85, 0.9)', fontWeight:'900' }}>Query</h5>
              </div>
              <div className="card-body">
                <div>
                <div className = "mt-4">
                        <div class="p-3 mb-2 bg-dark text-white">
                            <label >Query Title</label>
                        </div>
                        <div class="p-3 mb-2 bg-light text-dark">
                        {location.state.notificationTitle}
                        </div>
                        <hr />
                    </div>
                    <div className = "mt-4">
                        <div class="p-3 mb-2 bg-dark text-white">
                            <label >Query Content</label>
                        </div>
                        <div class="p-3 mb-2 bg-light text-dark">
                        {location.state.notificationContent}
                        </div>
                        <hr />
                    </div>
        
                </div>
              </div>
            </div>
            <div className="card align-middle justify-content-center m-auto shadow-sm  col-xl-10 col-lg-9 col-md-8  border-0 mb-4 text-center">
              <div className="my-3" style = {{color : "rgba(55, 64, 85, 0.9)"}}>
                <h5 className="mb-2 lead display-5 text-center" style={{ color:'rgba(55, 64, 85, 0.9)', fontWeight:'900' }}>Create Query Answer</h5>
              </div>
              <div className="card-body">
                <div>
                <div className = "mt-4">
                          <div class="p-3 mb-2 bg-dark text-white">
                              <label >Query's Response Title</label>
                          </div>
                          <div class="p-3 mb-2 bg-light text-dark">
                          {location.state.responseTitle}
                          </div>
                          <hr />
                      </div>
                      <div className = "mt-4">
                          <div class="p-3 mb-2 bg-dark text-white">
                              <label >Query Content</label>
                          </div>
                          <div class="p-3 mb-2 bg-light text-dark">
                          {location.state.responseContent}
                          </div>
                          <hr />
                      </div>
                      <div className="buttonNewTheme mt-3 mb-3">
                                      <button  type="submit" className="btn m-2 shadow-sm  btn-outline-muted" style = {{fontWeight : "bold", width: "115px", height: "115px"}} onClick = {(e) => handleClick(e)}>
                                        Query Category
                                      </button>
                        </div>
                </div>
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
      </>
      )

}

export default ViewQueryResponseForStudent
