import React, { Component } from 'react';
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import axios from 'axios';
import "../../../../../../Sass.scss"

class FilesUploadComponent extends Component {
    constructor(props) {
        super(props);

        this.onFileChange = this.onFileChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            profileImg: ''
        }
    }

    onFileChange(e) {
        this.setState({ profileImg: e.target.files[0] })
    }

    onSubmit(e) {
        e.preventDefault()
        const formData = new FormData()
        formData.append('profileImg', this.state.profileImg)
        axios.post("https://syntics.co/api/user-profile", formData, {
        }).then(res => {
            console.log(res)
        })
    }


    render() {
        return (
            <div className="content">
            <div className = "mt-5 pt-4">
                      {/* Content Wrapper */}
        <div id="content-wrapper" className="d-flex flex-column">
        {/* Main Content */}
        <div id="content">
          {/* Begin Page Content */}
          <div className="containerBlackDashboard-fluid mt-5">
            {/* Page Heading */}
            
            {/* DataTales Example */}
            <div className="card align-middle justify-content-center m-auto shadow-sm  col-xl-10 col-lg-9 col-md-8  border-0 mb-4 text-center">
              <div className="my-3" style = {{color : "rgba(55, 64, 85, 0.9)"}}>
                <h5 className="mb-2 lead display-5 text-center" style={{ color:'rgba(55, 64, 85, 0.9)', fontWeight:'900' }}>Upload a File</h5>
              </div>
              <div className="card-body">
                <div>
                <div>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <input type="file" onChange={this.onFileChange} />
                        </div>
                        <div className="">
                        <button type="submit" className="btn m-2 shadow-sm  btn-outline-muted" style = {{ fontWeight : "bold"}}>
                          Upload
                        </button>
                      </div>
                    </form>
                    </div>
                </div>
              </div>
            </div>
          </div>
          {/* /.containerBlackDashboard-fluid */}
        </div>
          </div>
                </div>
            </div>
        )
    }
}

export default FilesUploadComponent;