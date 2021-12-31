import React, { useState, useEffect }  from 'react'
import { Link, useHistory, useRouteMatch, useParams } from "react-router-dom";
import axios from 'axios';
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { getBlogs, deleteCourseContent } from "../../Apis/apiForBlogs"


function BlogListForTeacher() {
    let { id } = useParams();
    const [items, setItems] = useState([])

    useEffect(() => {
      const fetchItems = async function() {
        const contents = await getBlogs()
        setItems(contents)
      }
      fetchItems()
    }, []);
    var serialNumber = 0
    const history = useHistory()
    const handleOnClickEdit = (data) => {
      history.push({
        pathname:`/teacher/edit-current-blog/${id}`,
        state: data
      })
    }
    const handleOnClickDelete = (data) => {
      axios.delete('https://syntics.co/blogs/delete/' + data._id)
            .then((res) => {
                console.log('Student successfully deleted!')
                window.location.reload(false)
            }).catch((error) => {
                console.log(error)
            })
      
    }
    const handleOnClickView = (data) => {
      history.push({
        pathname:`/teacher/current-blog-view/${id}`,
        state: data
      })
    }
    const onCreateBlog = (e) => {
      const randomValue = Math.floor((Math.random() * 100000) + 1)
      const randomName = id + randomValue
      
      e.preventDefault()
      history.push({
        pathname: `/teacher/create-blog/${id}`,
        state: randomName
      })
    }

    const handlingSerialNumber = () => {
      serialNumber = serialNumber + 1
      return(
          <td>{serialNumber}</td>
      )
  }
    return  (
        <>
        <div>
         {/* Content Wrapper */}
<div id="content-wrapper" className="d-flex flex-column mt-5 pt-4">
{/* Main Content */}
<div id="content">
  {/* Begin Page Content */}
  <div className="containerBlackDashboard-fluid mt-5">
    {/* Page Heading */}
    <h1 className='text-center display-4 my-3' style={{ color:'rgba(55, 64, 85, 0.9)', fontWeight:'900' }}>Blogs</h1>
    
    {/* DataTales Example */}
    <div className="card align-middle justify-content-center m-auto shadow-sm  col-xl-10 col-lg-9 col-md-8  border-0 mb-4">
      <div className="my-3" style = {{color : "rgba(55, 64, 85, 0.9)"}}>
        <h5 className="mb-2 lead display-5 text-center" style={{ color:'rgba(55, 64, 85, 0.9)', fontWeight:'900' }}>List Of Blogs</h5>
      </div>
      <div className="card-body">
        <div className="table-responsive">
          <table className="tableBlackDashboard table-bordered text-center"  width="100%" cellSpacing={0}>
          <thead>
                              <tr>
                              <th>Serial Number</th>
                              <th>Blog Title</th>
                              <th colSpan="3">Action</th>
                              </tr>
                          </thead>
                          <tbody>
                              {
                              items.map(contents => (
                                  <tr key={contents._id}>
                                    {handlingSerialNumber()}
                                  <td>
                                      {contents.blogstitle}
                                  </td>
                                  <td>
                                  <div className="">
                                    <button className="btn m-2 shadow-sm  btn-outline-muted"   onClick={() => handleOnClickView(contents)}>View</button>
                                  </div>
                                </td>
                                <td>
                                  <div className="">
                                    <button className="btn m-2 shadow-sm  btn-outline-muted"   onClick={() => handleOnClickEdit(contents)}>Edit</button>
                                  </div>
                                </td>
                                <td>
                                  <div className="">
                                    <button className="btn m-2 shadow-sm  btn-outline-muted"   onClick={() => handleOnClickDelete(contents)}>Delete</button>
                                  </div>
                                </td>
                                  </tr>
                              ))
                              }
                          </tbody>          
          </table>
          <center>
                      <div>    
                      <div >
                        <button className="btn m-2 shadow-sm  btn-outline-muted" style = {{fontWeight : "bold" }} onClick = {(e) => onCreateBlog(e)}>
                          Create Blog
                        </button>
                      </div>
                    </div>
                    </center>
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

export default BlogListForTeacher
