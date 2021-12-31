import React, { useState, useEffect }  from 'react'
import { Link, useHistory, useRouteMatch, useParams } from "react-router-dom";
import axios from 'axios';
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { getCourseContents, deleteCourseContent } from "../../Apis/apiForCourseContent"


function ViewContentListForTeacher() {
    const [items, setItems] = useState([])

    useEffect(() => {
      const fetchItems = async function() {
        const contents = await getCourseContents()
        setItems(contents)
      }
      fetchItems()
    }, []);

    const history = useHistory()
    const handleOnClickEdit = (data) => {
      if ((data.coursetype == "Adult Training") && (data.questiontype === "Text") && (data.answertype === "Text")){
        history.push({
          pathname:"/view-question-type-qa-edit",
          state: data
        })
      }
      else if ((data.coursetype == "Adult Training") && (data.questiontype === "Text") && (data.answertype === "Multiple Choice")){
        history.push({
          pathname:"/view-question-answer-type-mcq-edit",
          state: data
        })
      }
      else if ((data.coursetype == "Adult Training") && (data.questiontype === "Text") && (data.answertype === "Fill in the Blanks")){
        history.push({
          pathname:"/view-question-answer-type-blanks-edit",
          state: data
        })
      } else if ((data.coursetype == "Adult Training") && (data.questiontype === "Text") && (data.answertype === "Pronunciation")){
        history.push({
          pathname:"/view-question-answer-type-pronunciation-edit",
          state: data
        })
      }
      else if ((data.coursetype == "Adult Training") && (data.questiontype === "Text") && (data.answertype === "Handwriting")){
        history.push({
          pathname:"/view-question-answer-type-handwriting-edit",
          state: data
        })
      }
      else if ((data.coursetype == "Adult Training") && (data.questiontype === "File Upload")){
        history.push({
          pathname:"/course-content-file-upload",
          state: data
        })
      }
      //history.push('/placement-question-details')
    }
    const handleOnClickDelete = (data) => {
      axios.delete('https://syntics.co/coursePlannings/delete/' + data._id)
            .then((res) => {
                console.log('Student successfully deleted!')
                window.location.reload(false)
            }).catch((error) => {
                console.log(error)
            })
      
    }
    const handleOnClickView = (data) => {
      history.push({
        pathname : "/view-current-content",
        state: data
      })
    }
    const handleOnClickAnswers = (data) => {
      if ( data.answertype == "Multiple Choice"){
        history.push("/view-answers-mcq")
      } else if ( data.answertype == "Fill in the Blanks"){
        history.push("/view-answers-blanks")
      } else if ( data.answertype == "Simple Text"){
        history.push("/view-answers-qa")
      } else if ( data.answertype == "Pronunciation"){
        history.push("/view-answers-pronunciation")
      } 
      else if ( data.answertype == "Handwriting"){
        history.push("/view-answers-handwriting")
      } 
    }
    
    return (
        <>
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
    <h1 className='text-center display-4 my-3' style={{ color:'rgba(55, 64, 85, 0.9)', fontWeight:'900' }}>Answers</h1>
    
    {/* DataTales Example */}
    <div className="card align-middle justify-content-center m-auto shadow-sm  col-xl-10 col-lg-9 col-md-8  border-0 mb-4">
      <div className="my-3" style = {{color : "rgba(55, 64, 85, 0.9)"}}>
        <h5 className="mb-2 lead display-5 text-center" style={{ color:'rgba(55, 64, 85, 0.9)', fontWeight:'900' }}>List of Student Answers</h5>
      </div>
      <div className="card-body">
        <div className="table-responsive">
          <table className="tableBlackDashboard table-bordered"  width="100%" cellSpacing={0}>
          <thead>
                              <tr>
                              <th>Course Name</th>
                              <th>Question Title</th>
                              <th>Activity Type</th>
                              <th>Question Type</th>
                              <th>Answer Type</th>
                              <th>Marks of Question</th>
                              <th colSpan="2">Action</th>
                              </tr>
                          </thead>
                          <tbody>
                              {
                              items.map(contents => (
                                  <tr key={contents._id}>
                                  <td>
                                      {contents.coursetype}
                                  </td>
                                  <td>
                                      {contents.questiontitle}
                                  </td>
                                  <td>
                                      {contents.activitytype}
                                  </td>
                                  <td>
                                      {contents.questiontype}
                                  </td>
                                  <td>
                                      {contents.answertype}
                                  </td>
                                  <td>
                                      {contents.totalmarks}
                                  </td>
                                  <td>
                                      <button className="btn btn-success" onClick={() => handleOnClickAnswers(contents)}>View Student Answers</button>
                                  </td>
                                  <td>
                                      <button className="btn btn-dark" onClick={() => handleOnClickView(contents)}>View Content</button>
                                  </td>
                                  <td>
                                      <button className="btn btn-light" onClick={() => handleOnClickEdit(contents)}>Edit Content</button>
                                  </td>
                                  <td>
                                      <button className="btn btn-danger" onClick={() => handleOnClickDelete(contents)}>Delete Content</button>
                                  </td>
                                  </tr>
                              ))
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
      
        </div>
      </>
    )
}

export default ViewContentListForTeacher
