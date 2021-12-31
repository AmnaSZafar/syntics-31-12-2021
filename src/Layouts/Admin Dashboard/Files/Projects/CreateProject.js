import React, { useState, useEffect } from 'react'
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { Formik, FormikConsumer, useFormik } from 'formik'
import { Link, useHistory, useRouteMatch, useParams } from "react-router-dom";
import { createProjects } from '../../../Project Manager Dashboard/Files/Views/Apis/apiForProjects';
import { createAudioFile } from '../../../Teacher Dashboard/Files/Apis/apiForAudio';

function CreateProjectForAdmin() {
    let {id} = useParams()
    const [items, setItems] = useState()
    const [file, setFile] = useState()
    const [filesNewName, setFilesNewName] = useState(id)
    const [newName, setNewName] = useState([])
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

    const fileChanged = (e) => {
      var testingFileChange  = e.target.files[0]
      //testingFileChange.name = "hi"
      var file = testingFileChange;
      var blob = file.slice(0, file.size, file.type);
      var random = Math.floor(Math.random() * 100000) + 100
      var settingName = id + random + file.name 
      var newFile = new File([blob], settingName, {type: file.type});
      setNewName(settingName)
      console.log(newFile)
      const f = newFile
      setFile(f)
    }
  
    const uploadFile = () => {
      let data = new FormData();
      data.append('file', file);
      console.log(file)
      console.log(data)
      createAudioFile(data)
      /*
      fetch('/api/files', {
        method: 'POST',
        body: data
      }).then(res => res.json())
        .then(data => {
          if (data.success) {
            this.loadFiles();
          } else {
            alert('Upload failed');
          }
        });
        */
    }
    const log = (data) => {
      data.projectAttachmentsReference = newName
      console.log(data)
      createProjects(data)
      history.push(`/admin/list-of-projects/${id}`)
    }

    console.log(randomName)
    const onSubmitHandler = async (data) => {
      await uploadFile()
      await log(data)  
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
            projectTitle:'',
            projectType:'',
            projectStartDate:'',
            projectDueDate:'',
            projectStatus:'',
            projectDescription:'',
            projectAttachmentsReference: '',
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
      <h1 className='text-center display-4 my-3' style={{ color:'rgba(55, 64, 85, 0.9)', fontWeight:'900' }}></h1>
      {/* DataTales Example */}
      <div className="card align-middle justify-content-center m-auto shadow-sm  col-xl-10 col-lg-9 col-md-8  border-0 mb-4 text-center">
        <div className="my-3" style = {{color : "rgba(55, 64, 85, 0.9)"}}>
          <h5 className="mb-2 lead display-5 text-center" style={{ color:'rgba(55, 64, 85, 0.9)', fontWeight:'900' }}>Project Creation</h5>
        </div>
        <div className="card-body">
          <div>
          <form onSubmit={formik.handleSubmit}>
          <div className = "mt-4"> 
                      <div class="p-3 mb-2" style = {{color : "white", backgroundColor : "rgba(55, 64, 85, 0.9)"}}>
                          <label><h5 className = "text-white">Project's Title</h5></label>
                      </div>
                      <div class="p-3 mb-2 bg-light text-dark">
                      <input type="text" placeholder="Title for Project" name="projectTitle" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.projectTitle} className="form-control" required  />
                      {formik.errors.projectTitle && formik.touched.projectTitle ? (<div className='error' style={{color:'red', fontWeight: 'bold'}}>{formik.errors.projectTitle}</div>) : null}
                      </div>
                      <hr />
                  </div>
                  <div className = "mt-4"> 
                      <div class="p-3 mb-2" style = {{color : "white", backgroundColor : "rgba(55, 64, 85, 0.9)"}}>
                          <label><h5 className = "text-white">Project Type</h5></label>
                      </div>
                      <div class="p-3 mb-2 bg-light text-dark">
                      <select name="projectType" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.projectType} className="form-control" >
                              <option>Select Project Type</option>                  
                              <option >Full Stack Web Development</option>
                              <option >Artificial Intelligence</option>
                            </select>
                            {formik.touched.projectType ? (<div className='error' style={{color:'red', fontWeight: 'bold'}}>{formik.errors.projectType}</div>) : null}
                      </div>
                      <hr />
                  </div>
                  <div className = "mt-4"> 
                      <div class="p-3 mb-2" style = {{color : "white", backgroundColor : "rgba(55, 64, 85, 0.9)"}}>
                          <label><h5 className = "text-white">Project's Start Date</h5></label>
                      </div>
                      <div class="p-3 mb-2 bg-light text-dark">
                      <input type="date" name="projectStartDate" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.projectStartDate} className="form-control" required  />
                      {formik.errors.projectStartDate && formik.touched.projectStartDate ? (<div className='error' style={{color:'red', fontWeight: 'bold'}}>{formik.errors.projectStartDate}</div>) : null}
                      </div>
                      <hr />
                  </div>
                  <div className = "mt-4"> 
                      <div class="p-3 mb-2" style = {{color : "white", backgroundColor : "rgba(55, 64, 85, 0.9)"}}>
                          <label><h5 className = "text-white">Project's Due Date</h5></label>
                      </div>
                      <div class="p-3 mb-2 bg-light text-dark">
                      <input type="date" name="projectDueDate" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.projectDueDate} className="form-control" required  />
                      {formik.errors.projectDueDate && formik.touched.projectDueDate ? (<div className='error' style={{color:'red', fontWeight: 'bold'}}>{formik.errors.projectDueDate}</div>) : null}
                      </div>
                      <hr />
                  </div>
                  <div className = "mt-4"> 
                      <div class="p-3 mb-2" style = {{color : "white", backgroundColor : "rgba(55, 64, 85, 0.9)"}}>
                          <label><h5 className = "text-white">Project's Description</h5></label>
                      </div>
                      <div class="p-3 mb-2 bg-light text-dark">
                      <textarea rows="4" cols="50"  name="projectDescription" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.projectDescription} className="form-control" required >
                        Enter Project description...</textarea>
                      {formik.errors.projectDescription && formik.touched.projectDescription ? (<div className='error' style={{color:'red', fontWeight: 'bold'}}>{formik.errors.projectDescription}</div>) : null}
                      </div>
                      <hr />
                  </div>
                  <div className="card-body">
                        <div class="p-3 mb-2" style = {{color : "white", backgroundColor : "rgba(55, 64, 85, 0.9)"}}>
                            <label><h5 className = "text-white">Attachments:</h5></label>
                      </div>
                        <input type="file" onChange={(e) => fileChanged(e)}/>
                        </div>
                        <center>
                        <div>    
                        <div className="">
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

export default CreateProjectForAdmin
