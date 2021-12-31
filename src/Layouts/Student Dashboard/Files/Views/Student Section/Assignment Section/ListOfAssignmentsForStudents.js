import React, { useState, useEffect }  from 'react'
import { useRouteMatch, useHistory, useLocation, Link, useParams } from "react-router-dom";
import axios from 'axios';
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { getAssignmentPlannings } from '../../../Apis/apiForCoursePlanning'


export default function ListOfAssignmentsForStudents() {
    var serialNumber = 0
  let {id} = useParams()
  const [items, setItems] = useState([])
  const location = useLocation();
  useEffect(() => {
    const fetchItems = async function() {
      
      const contents = await getAssignmentPlannings()
      setItems(contents)
    }
    fetchItems()
  }, []);

  const history = useHistory()

  const dateFunction = (data) => {
    const options = {
     
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    
    var d = new Date(data.startDate);
    var n = d.toLocaleDateString('en-EN', options);
    
    return(
       
            <td>
                {n}
            </td>

    )
  }


  const dateDueDateFunction = (data) => {
    const options = {
     
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    
    var d = new Date(data.endDate);
    var n = d.toLocaleDateString('en-EN', options);
    
    return(
       
      <td>
          {n}
      </td>

)
  }

  const handleOnClick = (data) => {
    if ((data.answertype == "Simple Text")){
      history.push({
        pathname:`/student/view-question-type-qa/${id}`,
        state: data
      })
    }
    else if ((data.answertype == "Handwriting")){
      history.push({
        pathname:`/student/view-question-type-handwriting/${id}`,
        state: data
      })
    }
    else if ((data.answertype == "Pronunciation")){
      history.push({
        pathname:`/student/view-question-type-pronunciation/${id}`,
        state: data
      })
    }
    else if ((data.answertype == "Multiple Choice")){
      history.push({
        pathname:`/student/view-question-type-mcq/${id}`,
        state: data
      })
    }
    else if ((data.answertype == "Fill in the Blanks")){
      history.push({
        pathname:`/student/view-question-type-blanks/${id}`,
        state: data
      })
    }
    else if ((data.answertype == "Video")){
      history.push({
        pathname:`/student/view-question-type-video/${id}`,
        state: data
      })
    }
    else if ((data.answertype == "Audio")){
      history.push({
        pathname:`/student/view-question-type-audio/${id}`,
        state: data
      })
    }
    else if ((data.answertype == "Digital Urdu")){
      history.push({
        pathname:`/student/view-question-type-digitalUrdu/${id}`,
        state: data
      })
    }
    
    else if ((data.answertype == "Drawing")){
      history.push({
        pathname:`/student/view-question-type-drawing/${id}`,
        state: data
      })
    }

    else if ((data.answertype == "Upload a File")){
        history.push({
          pathname:`/student/view-question-type-file-upload/${id}`,
          state: data
        })
      }
  }
  const handlingSerialNumber = () => {
      serialNumber = serialNumber + 1
      return(
      <td>{serialNumber}</td>
      )
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
{/* <h1 className='text-center display-4 my-3' style={{ color:'rgba(55, 64, 85, 0.9)', fontWeight:'900' }}>Course Assignment Content</h1> */}
<h1 className='text-center display-4 my-3' style={{ color:'rgba(55, 64, 85, 0.9)', fontWeight:'900' }}>Course Assignment Content</h1>

{/* DataTales Example */}
<div className="card align-middle justify-content-center m-auto shadow-sm  col-xl-10 col-lg-9 col-md-8  border-0 mb-4">
  <div className="my-3" style = {{color : "rgba(55, 64, 85, 0.9)"}}>
    <h5 className="mb-2 lead display-5 text-center" style={{ color:'rgba(55, 64, 85, 0.9)', fontWeight:'900' }}>List of Assignments</h5>
  </div>
  <div className="card-body">
    <div className="table-responsive">
      <table className="tableBlackDashboard table-bordered text-center"  width="100%" cellSpacing={0}>
      <thead>
                            <tr>
                            <th>Serial Number</th>
                            <th>Content Name</th>
                            <th>Question Title</th>
                            <th>Question Type</th>
                            <th>Answer Type</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Total Marks of Question</th>
                            <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                          items != null ? items.map(contents => (
                                <tr key={contents._id}>
                                  {handlingSerialNumber()}
                           
                                <td>
                                    {contents.coursetype}
                                </td>
                                <td>
                                    {contents.questiontitle}
                                </td>
                                <td>
                                    {contents.questiontype}
                                </td>
                                <td>
                                    {contents.answertype}
                                </td>
                               {dateFunction(contents)}
                                {dateDueDateFunction(contents)}
                                <td>
                                    {contents.totalmarks}
                                </td>
                                <td>
                                  <div className="">
                                    <button className="btn m-2 shadow-sm  btn-outline-muted"  onClick={() => handleOnClick(contents)}>View Question</button>
                                  </div>
                                </td>
                                </tr>
                            )) : 
                            <tr>
                                <td></td>
                            </tr>
                          }
                        </tbody>
      </table>
     
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
