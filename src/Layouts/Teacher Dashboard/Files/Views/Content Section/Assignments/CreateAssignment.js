import React, { useState, useEffect } from 'react'
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { Formik, FormikConsumer, useFormik } from 'formik'
import { Link, useHistory, useRouteMatch, useParams } from "react-router-dom";


function CreateAssignment() {
    let {id} = useParams()
  const [items, setItems] = useState()
  /*
  useEffect(() => {
    const fetchItems = async function() {
      const contents = await getCourseForTeacher(id)
      console.log(contents)
      setItems(contents)
      console.log(items)
    }
    fetchItems()
    
  }, []);
  */
         /*const { register, handleSubmit } = useForm({
    defaultValues: { text: todo ? todo.text : "" },
  });*/

  /*const submitHandler = handleSubmit((data) => {
    onSubmit(data)
  });*/
  const history = useHistory()

  //const [referenceName, setReferenceName] = useState()
  //console.log(referenceName)
  
  const randomValue = Math.floor((Math.random() * 100000) + 1)
  const randomName = id + randomValue
  
  console.log(randomName)
  const onSubmitHandler = async (data) => {
    //data.coursetype = items.subjectChoosenForApplication
    if ((data.questiontype === "Text") && (data.answertype === "Simple Text")){
      history.push({
        pathname:`/teacher/course-content-text-qa/${id}`,
        state: data
      })
    }
    else if ((data.questiontype === "Text") && (data.answertype === "Multiple Choice")){
      history.push({
        pathname:`/teacher/course-content-text-mcq/${id}`,
        state: data
      })
    }
    else if ((data.questiontype === "Text") && (data.answertype === "Audio")){
      history.push({
        pathname:`/teacher/course-content-text-audio/${id}`,
        state: data
      })
    }
    else if ((data.questiontype === "Text") && (data.answertype === "Video")){
      history.push({
        pathname:`/teacher/course-content-text-video/${id}`,
        state: data
      })
    }
    else if ((data.questiontype === "Text") && (data.answertype === "Audio")){
      history.push({
        pathname:`/teacher/course-content-text-audio/${id}`,
        state: data
      })
    }
    else if ((data.questiontype === "Text") && (data.answertype === "Fill in the Blanks")){
      history.push({
        pathname:`/teacher/course-content-text-blanks/${id}`,
        state: data
      })
    }
    else if ((data.questiontype === "Text") && (data.answertype === "Handwriting")){
      history.push({
        pathname:`/teacher/course-content-text-handwriting/${id}`,
        state: data
      })
    }
    else if ((data.questiontype === "Text") && (data.answertype === "Digital Urdu")){
      history.push({
        pathname:`/teacher/course-content-text-digitalUrdu/${id}`,
        state: data
      })
    }
    else if ((data.questiontype === "Text") && (data.answertype === "Drawing")){
      history.push({
        pathname:`/teacher/course-content-text-drawing/${id}`,
        state: data
      })
    }
    else if ((data.answertype === "Upload a File")){
      history.push({
        pathname:`/teacher/course-content-file-upload/${id}`,
        state: data
      })
    }
    
    //history.push('/placement-question-details')
  }
  
  /*const onSubmit = async (data) => {
    //console.log(data)
    await createCoursePlannings(data)
    //await createQuestions(data)
    //await createPlacementTestQuestions(data)
    //redirecting 
    //history.push("/")
  };
  */
    //1 Start of by making initial values 
    const formik = useFormik({
        initialValues: {
           coursetype:'',
           activitytype:'',
           questiontype:'',
           answertype:'',
           questioncontent:'',
           totalmarks:'',
           startDate: '',
           endDate:'',
           grade:'',
           teacherId: {id},
           referenceName: randomName
        },

        //4 Make onSubmit propert to handle what happens to data on form submisison

        onSubmit: values => {

          
          //createTodo(formik.values)
          //redirecting 
          //history.push("/")

          //onSubmit(formik.values)
          onSubmitHandler(formik.values)

        },

        //5 Make validation property
        validate: values => {
              
            let errors = {}

            const letters = /^[A-Za-z ]+$/;

            const cnic = /^[0-9--]+$/;

            const phone = /^[0-9]+$/;

            const symbols = /[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/;
            
            if(!values.startDate){
                errors.startDate = "Please choose a Start Date"
            }
            else if(!values.endDate){
              errors.endDate = "Please choose an End Date"
            }
  
            return errors


        }

    })

    console.log("Form errors", formik.errors)
    return (
        <>
      <div className = "mt-5 pt-4">
               {/* Content Wrapper */}
<div id="content-wrapper" className="d-flex flex-column">
{/* Main Content */}
<div id="content">
  {/* Begin Page Content */}
  <div className="containerBlackDashboard-fluid mt-5">
    {/* Page Heading */}
    <h1 className='text-center display-4 my-3' style={{ color:'rgba(55, 64, 85, 0.9)', fontWeight:'900' }}>Course Planning</h1>
    {/* DataTales Example */}
    <div className="card align-middle justify-content-center m-auto shadow-sm  col-xl-10 col-lg-9 col-md-8  border-0 mb-4 text-center">
      <div className="my-3" style = {{color : "rgba(55, 64, 85, 0.9)"}}>
        <h5 className="mb-2 lead display-5 text-center" style={{ color:'rgba(55, 64, 85, 0.9)', fontWeight:'900' }}>Content</h5>
      </div>
      <div className="card-body">
        <div>
        <form onSubmit={formik.handleSubmit}>
                  
                      <div>
                      <div className="form-group">
                          <label htmlFor="sel1">Course Content</label>
                          <select name="coursetype" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.coursetype} className="form-control" >
                            <option>Select Course Content</option>                  
                            <option >Math Foundations</option>
                            <option >Python</option>
                            <option >Intro to Artificial Intelligence</option>
                            <option >Advanced Python Libraries</option>
                            <option >Machine Learning</option>
                            <option >Deep Learning</option>
                          </select>
                          {formik.touched.coursetype ? (<div className='error' style={{color:'red', fontWeight: 'bold'}}>{formik.errors.coursetype}</div>) : null}

                        </div>
                          <div className="form-group">
                          <label htmlFor="sel1">Question Type</label>
                          <select name="questiontype" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.questiontype} className="form-control" >
                          <option>Select Question Type</option>                  
                            <option>Text</option>
                           
                          </select>
                          {formik.touched.questiontype ? (<div className='error' style={{color:'red', fontWeight: 'bold'}}>{formik.errors.questiontype}</div>) : null}
                        </div>
                      </div>
                      <div>
                          <div className="form-group">
                          <label htmlFor="sel1">Answer Type</label>
                          <select name="answertype" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.answertype} className="form-control" >
                          <option>Select Answer Type</option>                  
                            <option>Multiple Choice</option>
                            <option>Fill in the Blanks</option>
                            <option>Video</option>
                            <option>Audio</option>
                            <option>Simple Text</option>
                            <option>Upload a File</option>
                          </select>
                          {formik.touched.answertype ? (<div className='error' style={{color:'red', fontWeight: 'bold'}}>{formik.errors.answertype}</div>) : null}
                        </div>
                      </div>
                      <div>
                          <div className="form-group">
                          <label htmlFor="sel1">Start Date</label>
                          <input type="date"  name="startDate" value={formik.values.startDate} onChange={formik.handleChange} onBlur={formik.handleBlur}className="form-control" required />
                          {formik.touched.startDate ? (<div className='error' style={{color:'red', fontWeight: 'bold'}}>{formik.errors.startDate}</div>) : null}
                        </div>
                      </div>
                      <div>
                          <div className="form-group">
                          <label htmlFor="sel1">End Date</label>
                          <input type="date"  name="endDate" value={formik.values.endDate} onChange={formik.handleChange} onBlur={formik.handleBlur} className="form-control" required />
                          {formik.touched.endDate ? (<div className='error' style={{color:'red', fontWeight: 'bold'}}>{formik.errors.endDate}</div>) : null}
                        </div>
                      </div>
                      <center>
                      <div>    
                      <div>
                        <button type="submit" className="btn m-2 shadow-sm  btn-outline-muted" style = {{ color:'rgba(55, 64, 85, 0.9)', fontWeight:'900' }}>
                          Submit
                        </button>
                      </div>
                    </div>
                    </center>
                    </form>
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

export default CreateAssignment
