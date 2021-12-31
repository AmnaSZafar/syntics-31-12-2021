import React, { useState, useEffect }  from 'react'
import { Link, useHistory, useRouteMatch, useLocation  } from "react-router-dom";
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { getAnswersHandWriting } from '../../Apis/apiForAnswers';

function ViewAnswersHandWritingForTeacher() {
     
    const location = useLocation();
    const [items, setItems] = useState([])

    useEffect(() => {
      const fetchItems = async function() {
        const contents = await getAnswersHandWriting()
        console.log(contents)
        setItems(contents)
      }
      fetchItems()
    }, []);

    const history = useHistory()
    const handleOnClick = (data) => {
      console.log(data)
          history.push({
            pathname:"/view-current-answer",
            state: data
          })
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
                            <th>Question Title</th>
                            <th>Total Marks</th>
                            <th>Obtained Marks</th>
                            <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            items.map(contents => (
                                <tr key={contents._id}>
                                <td>
                                    {contents.questionTitle}
                                </td>
                                <td>
                                    {contents.totalMarks}
                                </td>
                                <td>
                                    {contents.marksObtained}
                                </td>
                                <td>
                                    <button className="btn btn-dark" onClick={() => handleOnClick(contents)}>View Answer</button>
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

export default ViewAnswersHandWritingForTeacher
