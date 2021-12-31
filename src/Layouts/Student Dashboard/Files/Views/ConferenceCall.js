import React, {useRef } from 'react'
import {useHistory, useLocation,} from "react-router-dom";

function ConferenceCall() {
    const location = useLocation();
    const editorRef = useRef(null);
    const history = useHistory()
    const handleOnClick = (e) => {
      e.preventDefault()
      history.push("/student/conference-call/")
    }

    return (
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
  <h1 className='text-center display-4 my-3' style={{ color:'rgba(55, 64, 85, 0.9)', fontWeight:'900' }}>Conference Call</h1>
  
  {/* DataTales Example */}
  <div className="card align-middle justify-content-center m-auto shadow-sm  col-xl-10 col-lg-9 col-md-8  border-0 mb-4">
    <div className="my-3" style = {{color : "rgba(55, 64, 85, 0.9)"}}>
      <h5 className="m-0 font-weight-bold text-center text-white"> Click to join/host a conference call</h5>
    </div>
    <div className="card-body">
    <center>
                                <div className="">
                                  <button  type="submit" className="btn m-2 shadow-sm  btn-outline-muted" style = {{fontWeight : "bold" }} onClick={(e) => handleOnClick(e)}>
                                    Join/Host a Meeting
                                  </button>
                                </div>
                                </center>
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
    )
}

export default ConferenceCall
