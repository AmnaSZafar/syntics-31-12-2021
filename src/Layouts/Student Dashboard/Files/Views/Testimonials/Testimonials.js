import React, { useState, useEffect, useRef } from 'react'
import { Editor } from '@tinymce/tinymce-react';
import { Formik, FormikConsumer, useFormik } from 'formik'
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { useRouteMatch, useHistory, useLocation,  useParams } from "react-router-dom";
import {createTestimonials} from '../../Apis/apiForTestimonials'
import FilesUploadComponent from './File Upload/filesUploadComponent';
import ModalTest from './Modals/ModalTest';
import "../../../ButtonStyleOriginalSass.scss"

function TestimonialsForStudent() {
  let {id} = useParams()
        /*const { register, handleSubmit } = useForm({
    defaultValues: { text: todo ? todo.text : "" },
  });*/

  /*const submitHandler = handleSubmit((data) => {
    onSubmit(data)
  });*/
  const location = useLocation();
  const editorRef = useRef(null);
  const history = useHistory()
  const log = (data) => {
      if (editorRef.current) {
        data.testimonialContent = editorRef.current.getContent({ format: "text" });
        console.log(data)
        createTestimonials(data)
        //history.push(`/student/testimonial-list/${id}`)
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
    await log(data)
    //history.push("/placement-blogstitle-details")
  }

    //1 Start of by making initial values 
    const formik = useFormik({
        initialValues: {
           testimonialTitle:'',
           testimonialContent:'',
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
            <h1 className='text-center display-4 my-3' style={{ color:'rgba(55, 64, 85, 0.9)', fontWeight:'900' }}>Student Complain Creation Panel</h1>
            {/* DataTales Example */}
            <div className="card align-middle justify-content-center m-auto shadow-sm  col-xl-10 col-lg-9 col-md-8  border-0 mb-4 text-center">
              <div className="my-3" style = {{color : "rgba(55, 64, 85, 0.9)"}}>
                <h5 className="mb-2 lead display-5 text-center" style={{ color:'rgba(55, 64, 85, 0.9)', fontWeight:'900' }}>Create Complain</h5>
              </div>
              <div className="card-body">
                <div>
                <form onSubmit={formik.handleSubmit}>
                <               div className = "mt-5 mb-5">
                                <ModalTest />
                                </div>
                                <div className = "mt-5">
                                OR
                                </div>
                                <br />
                                <div className = "mb-5">
                                Create a Complain Through Text
                                </div>
                                <div>
                        
                                <label htmlFor>Title</label>
                                        {/*2 put onChange = {formkit.handleChange} value={formik.values.name} in all the form fields with their corroposind name  in values */}
                                        <input type="text" placeholder="Complain's Title" name="testimonialTitle" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.testimonialTitle} className="form-control" required  />
                                        {formik.errors.testimonialTitle && formik.touched.testimonialTitle ? (<div className='error' style={{color:'red', fontWeight: 'bold'}}>{formik.errors.testimonialTitle}</div>) : null}
                                
                                </div>
                               
                                
                                <div className = "mt-2">
                                <label htmlFor>Complain Content</label>
                                <Editor
                                    apiKey='zbxzyzqkm6uw6oz4uywxx4kbvw59xasjkldmya07y0hfjupf'
                                    onInit={(evt, editor) => editorRef.current = editor}
                                    initialValue=""
                                    init={{
                                    height: 500,
                                    browser_spellcheck : true,
                                    menubar: false,
                                    plugins: [
                                        'advlist autolink lists link image charmap print preview anchor',
                                        'searchreplace visualblocks code fullscreen',
                                        'insertdatetime media table paste code help wordcount'
                                    ],
                                    toolbar: 'undo redo | formatselect | ' +
                                    'bold italic backcolor | alignleft aligncenter ' +
                                    'alignright alignjustify | bullist numlist outdent indent | ' +
                                    'removeformat | help',
                                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                                    }}
                                />
                                
                                </div>
                                <center>
                                <div className="">
                                  <button  type="submit" className="btn m-2 shadow-sm  btn-outline-muted" style = {{fontWeight : "bold" }}>
                                    Create Complain
                                  </button>
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
                </div>
              </>
     
    )



}

export default TestimonialsForStudent
