import React, { useState, useEffect, useRef, Component } from 'react'
import { Editor } from '@tinymce/tinymce-react';
import { Formik, FormikConsumer, useFormik } from 'formik'
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { useRouteMatch, useHistory, useLocation,  useParams } from "react-router-dom";
import { createAudioFile } from '../../../../../Teacher Dashboard/Files/Apis/apiForAudio';



class FileUploadNewForTeacherForBook extends Component {
  constructor(props) {
    super(props);

    this.state = {
      files: [],
      file: ''
    }

    this.loadFiles = this.loadFiles.bind(this);
  }

  componentDidMount() {
    this.loadFiles();
  }

  loadFiles() {
    fetch('http://localhost:7000/api/files')
      .then(res => res.json())
      .then(files => {
        if (files.message) {
          console.log('No Files');
          this.setState({ files: [] })
        } else {
          this.setState({ files })
        }
      });
  }

  fileChanged(event) {
    const f = event.target.files[0];
    this.setState({
      file: f
    });
  }

  deleteFile(event) {
    event.preventDefault();
    const id = event.target.id;

    fetch('/api/files/'+id, {
      method: 'DELETE'
    }).then(res => res.json())
      .then(response => {
        console.log(response);
        if (response.success) this.loadFiles()
        else alert('Delete Failed');
      })
  }

  uploadFile(event) {
    event.preventDefault();
    let data = new FormData();
    data.append('file', this.state.file);
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

  render() {
    const { files } = this.state;
    return (
        
        <div>
           {/* Content Wrapper */}
<div id="content-wrapper" className="d-flex flex-column">
{/* Main Content */}
<div id="content">
  {/* Begin Page Content */}
  <div className="containerBlackDashboard-fluid mt-5">
    {/* Page Heading */}
    <h1 className='text-center display-4 my-3' style={{ color:'rgba(55, 64, 85, 0.9)', fontWeight:'900' }}></h1>
    
    {/* DataTales Example */}
    <div className="card align-middle justify-content-center m-auto shadow-sm  col-xl-10 col-lg-9 col-md-8  border-0 ">
      <div className="my-3" style = {{color : "rgba(55, 64, 85, 0.9)"}}>
        <h5 className="mb-2 lead display-5 text-center" style={{ color:'rgba(55, 64, 85, 0.9)', fontWeight:'900' }}>Upload File</h5>
      </div>
      <div className="card-body">
      <input type="file" onChange={this.fileChanged.bind(this)}/>
      <button onClick={this.uploadFile.bind(this)}>Upload</button>
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
    );
  }
}

export default FileUploadNewForTeacherForBook;
