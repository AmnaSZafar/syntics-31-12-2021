import React, { useState, useEffect, useRef } from 'react'
import { Editor } from '@tinymce/tinymce-react';
import { Formik, FormikConsumer, useFormik } from 'formik'
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { useRouteMatch, useHistory, useLocation,  useParams } from "react-router-dom";
import { createAnswersTest } from '../../../../../Apis/apiForAnswersTest';
import { getRegisterationStudentsById } from '../../../../../Apis/apiForRegistrations';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'


import "./testStyle.css";

function FillInTheBlankForTestsForStudent() {
  let {id} = useParams()
  const location = useLocation();
  const editorRef = useRef(null);
  const history = useHistory()
  const [studentDataValues, setStudentDataValues] = useState([])
  useEffect(() => {
      
    const fetchStudentData = async function() {
      const studentData = await getRegisterationStudentsById(id)
      console.log(studentData)
      setStudentDataValues(studentData)
    }
    fetchStudentData() 
    
}, [])
           /*const { register, handleSubmit } = useForm({
    defaultValues: { text: todo ? todo.text : "" },
  });*/

  /*const submitHandler = handleSubmit((data) => {
    onSubmit(data)
  });*/
  const log = (data) => {
      if (editorRef.current) {
        data.answerContent = editorRef.current.getContent({ format: "text" });
        console.log(data)
        //createAnswers(data)
        //history.push("/answer-list")
      }
  };

  /*useEffect(() => {
    const fetchTodo = async () => {
      const blogstitle = await getPlacementTestblogstitle(`${props.match.params._id}`)
      setblogstitle(blogstitle)
    }
    fetchTodo()
  }, []);
  */
  const onSubmit = async (data) => {

        data.optionsQuestionFillInTheBlank = location.state.optionsQuestionFillInTheBlank
        data.studentId = data.studentId.id
        data.teacherId = location.state.teacherId
        data.coursetype = location.state.coursetype
        data.name = studentDataValues.name
        data.email = studentDataValues.email
        data.currentDate = new Date()
          
        console.log(data)
        createAnswersTest(data)
        history.push(`/student/list-of-subjects-for-test/${id}`)
  }

  const renderTime = ({ remainingTime }) => {
    if (remainingTime === 0) {
      return <div className="timer">Too lale...</div>;
    }
  
    return (
      <div className="timer">
        <div className="text">Remaining</div>
        <div className="value">{remainingTime}</div>
        <div className="text">seconds</div>
      </div>
    );
  };
  
  const handleCompletion = (e) => {
    if(location.state.grade == 'Grade 1'){
      history.push({
        pathname:"/Grade-1-content-test"
      })
    }
  
  }

    //1 Start of by making initial values 
    const formik = useFormik({
        initialValues: {
           name:'',
           email:'',
           grade: location.state.grade,
           coursetype:'',
           optionsQuestionFillInTheBlank: location.state.optionsQuestionFillInTheBlank,
           answertype: location.state.answertype,
           questionContent: location.state.questioncontent,
           questionTitle: location.state.questiontitle,
           totalMarks: location.state.totalmarks,
           answerContent:'',
           marksObtained: '',
           teacherRemarks: '',
           teacherId: '',
           studentId: {id},
           questionId: location.state._id,
           currentDate : new Date()
        },

        //4 Make onSubmit propert to handle what happens to data on form submisison

        onSubmit: values => {

          
          //createTodo(formik.values)
          //redirecting 
          //history.push("/")

          onSubmit(formik.values)

        },

        //5 Make validation property
        
        validate: values => {
            
            let errors = {}

            const letters = /^[A-Za-z ]+$/;

            const cnic = /^[0-9--]+$/;

            const phone = /^[0-9]+$/;

            const symbols = /[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/;
            
            return errors


        }


    })

    console.log("Form errors", formik.errors)
    return (
        <div>
<div className = "mt-5 pt-4">
{/* Content Wrapper */}
<div id="content-wrapper" className="d-flex flex-column">
{/* Main Content */}
<div id="content">
  {/* Begin Page Content */}
  <div className="containerBlackDashboard-fluid mt-5">
    {/* Page Heading */}
    <h1 className='text-center display-4 my-3' style={{ color:'rgba(55, 64, 85, 0.9)', fontWeight:'900' }}>Test Content</h1>
    {/* DataTales Example */}
    <div className="card align-middle justify-content-center m-auto shadow-sm  col-xl-10 col-lg-9 col-md-8  border-0 mb-4">
      <div className="my-3" style = {{color : "rgba(55, 64, 85, 0.9)"}}>
        <h5 className="mb-2 lead display-5 text-center" style={{ color:'rgba(55, 64, 85, 0.9)', fontWeight:'900' }}>{location.state.questiontitle}</h5>
      </div>
      <div className="card-body">
      {location.state.questioncontent}
      <hr />
      < br/>
      Options:
      <ul  className = "text-left p-3">
        <li>{location.state.optionsQuestionFillInTheBlank[0].options}</li>
        <li>{location.state.optionsQuestionFillInTheBlank[1].options}</li>
        <li>{location.state.optionsQuestionFillInTheBlank[2].options}</li>
        <li>{location.state.optionsQuestionFillInTheBlank[3].options}</li>
      </ul>
      </div>
    </div>
    <div className="card align-middle justify-content-center m-auto shadow-sm  col-xl-10 col-lg-9 col-md-8  border-0 mb-4 text-center">
      <div className="my-3" style = {{color : "rgba(55, 64, 85, 0.9)"}}>
        <h5 className="mb-2 lead display-5 text-center" style={{ color:'rgba(55, 64, 85, 0.9)', fontWeight:'900' }}>Answer</h5>
      </div>
      <div className="card-body">
      <form onSubmit={formik.handleSubmit}>
                  <div className = "mt-4"> 
                      <div class="p-3 mb-2" style = {{color : "white", backgroundColor : "rgba(55, 64, 85, 0.9)"}}>
                          <label><h5 className = "text-white">Type your Answer to above Question below </h5></label>
                      </div>
                      <hr />
                  </div>
                  <div className = "mt-4"> 
                      <div class="p-3 mb-2 bg-light text-dark">
          
                          <input type="text" name="answerContent" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.answerContent} className="form-control"  />
                      </div>
                      <hr />
                  </div>
                      <div className="containerSass mt-3 mb-2">
                        <button type="submit" className="btn m-2 shadow-sm  btn-outline-muted">
                        Submit Answer
                        </button>
                    </div>
                  </form>
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
      </div>
    )

}

export default FillInTheBlankForTestsForStudent
