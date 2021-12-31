import React, { useState, useEffect }  from 'react'
import { Link, useHistory, useRouteMatch, useLocation,  useParams } from "react-router-dom";
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";

function ViewCurrentAnswerAdminAttachment() {
    let {id} = useParams()
    const location = useLocation();
    const history = useHistory()
    const onBackClick = (e) => {
        e.preventDefault()
        history.push(`/teacher/list-of-classes/${id}`)
    }
    
    const handlingAttachments = () => {
        if(location.state.answertype == "Drawing"){
            return(
                <div className = "mt-4">
                        <div class="p-3 mb-2 " style = {{color : "white", backgroundColor : "rgba(55, 64, 85, 0.9)"}}>
                            <label >Attachments</label>
                        </div>
                        <div class="p-3 mb-2 bg-light text-dark">
                            <img width="350" className = "text-dark" style={{textDecoration : "none", fontWeight: "bold",  boxShadow: "5px 5px #888888"}} src={`https://syntics.co/api/file/display/${location.state.questionReferenceName}`}>
                            </img>
                        </div>
                        <hr />
                    </div>
            )
        }
        else if(location.state.answertype == "Audio"){
            return(
                <div className = "mt-4">
                <div class="p-3 mb-2 " style = {{color : "white", backgroundColor : "rgba(55, 64, 85, 0.9)"}}>
                    <label >Attachments</label>
                </div>
                <div class="p-3 mb-2 bg-light text-dark">
                    <audio src={`https://syntics.co/api/file/display/${location.state.questionReferenceName}`}  controls="controls" className="" type="audio/mpeg"  />
                </div>
                <hr />
            </div> 
            )
        }
        else if(location.state.answertype == "Video"){
            return(
                <div className = "mt-4">
                        <div class="p-3 mb-2 " style = {{color : "white", backgroundColor : "rgba(55, 64, 85, 0.9)"}}>
                            <label >Attachments</label>
                        </div>
                        <div class="p-3 mb-2 bg-light text-dark">
                            <video controls width="400" src = {`https://syntics.co/api/file/display/${location.state.questionReferenceName}`}  type="video/webm" />
                        </div>
                        <hr />
                    </div>
            )
        }
        
    }
    const handlingAnswerAttachments = () => {
        if(location.state.answertype == "Drawing"){
            return(
            <div className = "mt-4">
            <div class="p-3 mb-2 " style = {{color : "white", backgroundColor : "rgba(55, 64, 85, 0.9)"}}>
                <label >Attachments</label>
            </div>
            <div class="p-3 mb-2 bg-light text-dark">
                <img width="350" className = "text-dark" style={{textDecoration : "none", fontWeight: "bold",  boxShadow: "5px 5px #888888"}} src={`https://syntics.co/api/file/display/${location.state.referenceName}`}>
                </img>
            </div>
            <hr />
        </div>
            )
        }
        else{
            return(
                <div className = "mt-4">
                <div class="p-3 mb-2 " style = {{color : "white", backgroundColor : "rgba(55, 64, 85, 0.9)"}}>
                    <label >Answer Content</label>
                </div>
                <div class="p-3 mb-2 bg-light text-dark">
                    {location.state.answerContent}
                </div>
                <hr />
            </div>
            )

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
  <h1 className='text-center display-4 my-3' style={{ color:'rgba(55, 64, 85, 0.9)', fontWeight:'900' }}>Content</h1>
  
  {/* DataTales Example */}
  <div className="card align-middle justify-content-center m-auto shadow-sm  col-xl-10 col-lg-9 col-md-8  border-0 mb-4">
    <div className="my-3" style = {{color : "rgba(55, 64, 85, 0.9)"}}>
      <h5 className="mb-2 lead display-5 text-center" style={{ color:'rgba(55, 64, 85, 0.9)', fontWeight:'900' }}>View Clicked Content</h5>
    </div>
    <div className="card-body">
    <div className = "mt-4">
                        <div class="p-3 mb-2 " style = {{color : "white", backgroundColor : "rgba(55, 64, 85, 0.9)"}}>
                            <label >Course Type</label>
                        </div>
                        <div class="p-3 mb-2 bg-light text-dark">
                            {location.state.coursetype}
                        </div>
                        <hr />
                    </div>
                   
                    <div className = "mt-4">
                        <div class="p-3 mb-2 " style = {{color : "white", backgroundColor : "rgba(55, 64, 85, 0.9)"}}>
                            <label >Answer Type</label>
                        </div>
                        <div class="p-3 mb-2 bg-light text-dark">
                            {location.state.answertype}
                        </div>
                        <hr />
                    </div>
                        
                    <div className = "mt-4">
                        <div class="p-3 mb-2 " style = {{color : "white", backgroundColor : "rgba(55, 64, 85, 0.9)"}}>
                            <label >Question Title</label>
                        </div>
                        <div class="p-3 mb-2 bg-light text-dark">
                            {location.state.questionTitle}
                        </div>
                        <hr />
                    </div>
                    <div className = "mt-4">
                        <div class="p-3 mb-2 " style = {{color : "white", backgroundColor : "rgba(55, 64, 85, 0.9)"}}>
                            <label >Question Content</label>
                        </div>
                        <div class="p-3 mb-2 bg-light text-dark">
                            {location.state.questionContent}
                        </div>
                        <hr />
                    </div>
                    {handlingAttachments()}
                    {handlingAnswerAttachments()}
                  <div className = "mt-4">
                        <div class="p-3 mb-2 " style = {{color : "white", backgroundColor : "rgba(55, 64, 85, 0.9)"}}>
                            <label >Total Marks</label>
                        </div>
                        <div class="p-3 mb-2 bg-light text-dark">
                            {location.state.totalMarks}
                        </div>
                        <hr />
                    </div>
                    <div className = "mt-4">
                        <div class="p-3 mb-2 " style = {{color : "white", backgroundColor : "rgba(55, 64, 85, 0.9)"}}>
                            <label >Marks Obtained</label>
                        </div>
                        <div class="p-3 mb-2 bg-light text-dark">
                            {location.state.marksObtained}
                        </div>
                        <hr />
                    </div>
                    <div className = "mt-4">
                        <div class="p-3 mb-2 " style = {{color : "white", backgroundColor : "rgba(55, 64, 85, 0.9)"}}>
                            <label >Teacher's Comment</label>
                        </div>
                        <div class="p-3 mb-2 bg-light text-dark">
                            {location.state.teacherRemarks}
                        </div>
                        <hr />
                    </div>
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

export default ViewCurrentAnswerAdminAttachment
