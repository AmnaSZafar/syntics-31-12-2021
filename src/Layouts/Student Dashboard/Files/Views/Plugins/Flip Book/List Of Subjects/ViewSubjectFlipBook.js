import React, { Component, useRef,useState, useEffect} from 'react'
import HTMLFlipBook from 'react-pageflip';
import html2canvas from 'html2canvas';
import { Editor } from '@tinymce/tinymce-react';
import { Formik, FormikConsumer, useFormik } from 'formik'
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { useRouteMatch, useHistory, useLocation,  useParams } from "react-router-dom";
//import FileUploadNewForTeacherForBook from './FileUploadNew';
import HandwritingSubjectForFlipBook from './Plugins For Subject FlipBook/HandwritingSubjectForFlipBook';
//import { getBookContents } from '../../../../../Teacher Dashboard/Files/Apis/apiForBookContent';
//import { fetchAudioFile } from '../../../../../../Apis/apiForAudioSending';
//import MediaFileUplaodStudent from './MediaFileUplaodStudent';
import "../index.scss"
import "../main.a8ff09de.chunk.css"



function ViewSubjectFlipBook() {
  const book = useRef();
  const location = useLocation();
  const [items, setItems] = useState([])
  const [media, setMedia] = useState([])
  const arrayMediaText = []
  useEffect(() => {
    
    
  }, []);
  function takeshot(e) {
    let div =
        document.getElementById('photo');

    // Use the html2canvas
    // function to take a screenshot
    // and append it
    // to the output div
    html2canvas(div).then(
        function (canvas) {
            document
            .getElementById('output')
            .appendChild(canvas);
        }
    )}
  const history = useHistory()
    return (
        <div>
          <div>
             
             <div>
 <div className = "mt-5 pt-4">
 {/* Content Wrapper */}
 <div id="content-wrapper" className="d-flex flex-column">
 {/* Main Content */}
 <div id="content">
   {/* Begin Page Content */}
   <div className="containerBlackDashboard-fluid mt-5">
     {/* Page Heading */}
     <h1 className='text-center display-4 my-3' style={{ color:'rgba(55, 64, 85, 0.9)', fontWeight:'900' }}>Books</h1>
     {/* DataTales Example */}
     <div className="card align-middle justify-content-center m-auto shadow-sm  col-xl-10 col-lg-9 col-md-8  border-0 mb-4 text-center">
       <div className="my-3" style = {{color : "rgba(55, 64, 85, 0.9)"}}>
         <h5 className="mb-2 lead display-5 text-center" style={{ color:'rgba(55, 64, 85, 0.9)', fontWeight:'900' }}></h5>
       </div>
       <div className="card-body">
       <h1 id = "checking" className="h3BlackDashboard mb-2 text-gray-800"></h1>
       <HTMLFlipBook
             width={550}
             height={733}
             size="stretch"
             minWidth={315}
             maxWidth={1000}
             minHeight={400}
             maxHeight={1533}
             maxShadowOpacity={0.5}
             useMouseEvents = {false}
             //showCover={true}
             mobileScrollSupport={true}
             ref={book}
             >
        
                 <div className="page page-cover" data-density="hard">
                     <div className="page-content">
                     <h2>Digital Note Book</h2>
                     </div>
                 </div>
                <div className = "page">
                <button onClick={(e) => takeshot(e)}>
                    Save Notes on Next page
                  </button>
                <HandwritingSubjectForFlipBook/>
                </div>
                <div id='output' className = "page">

                </div>
                <div className = "page">
                <HandwritingSubjectForFlipBook/>
                </div>
                <div id='output' className = "page">

                </div>
                <div className = "page">
                <HandwritingSubjectForFlipBook />
                </div>
                <div id='output' className = "page">

                </div>
                <div className = "page">
                <HandwritingSubjectForFlipBook/>
                </div>
                <div id='output' className = "page">

                </div>
                <div className = "page">
                <HandwritingSubjectForFlipBook/>
                </div>
                <div id='output' className = "page">

                </div>
                 
             </HTMLFlipBook>
              <div className="">
                  <button className="btn m-2 shadow-sm  btn-outline-muted" style = {{fontWeight : 'bold', height:"90px", width: "90px"}}   onClick={() => book.current.pageFlip().flipPrev()}>
                     Prev page
                  </button>
                  <button className="btn m-2 shadow-sm  btn-outline-muted" style = {{fontWeight : 'bold', height:"90px", width: "90px"}}   onClick={() => book.current.pageFlip().flipNext()}>
                    Next page
                  </button>
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
     </div>
        </div>
    )
}

export default ViewSubjectFlipBook
