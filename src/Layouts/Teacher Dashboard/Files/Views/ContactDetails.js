import React, { useState, useEffect } from 'react'
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { getEmails } from "../Apis/apiForEmails"
import "../../sb-admin-2.css"

function ContactDetailsForTeacher() {
    const [items, setItems] = useState([])

    useEffect(() => {
      const fetchItems = async function() {
        const emails = await getEmails()
        setItems(emails)
      }
      fetchItems()
    })
    return (
        <>
      
{/* Content Wrapper */}
<div id="content-wrapper" className="d-flex flex-column">
{/* Main Content */}
<div id="content">
  {/* Begin Page Content */}
  <div className="containerBlackDashboard-fluid mt-5">
    {/* Page Heading */}
    <h1 className='text-center display-4 my-3' style={{ color:'rgba(55, 64, 85, 0.9)', fontWeight:'900' }}>Emails</h1>
    
    {/* DataTales Example */}
    <div className="card align-middle justify-content-center m-auto shadow-sm  col-xl-10 col-lg-9 col-md-8  border-0 mb-4">
      <div className="my-3">
        <h5 className="my-2 lead display-5 text-center" style={{ color:'rgba(55, 64, 85, 0.9)', fontWeight:'900' }}>List Of Emails</h5>
      </div>
      <div className="card-body">
        <div className="table-responsive">
          <table className="tableBlackDashboard table-bordered" id="dataTable" width="100%" cellSpacing={0}>
            <thead>
              <tr>
              <th>Text</th>
              <th>Action</th>
              </tr>
            </thead>
            <tfoot>
              <tr>
              <th>Text</th>
              <th>Action</th>
              </tr>
            </tfoot>
            <tbody>
            {
                            items.map(emails => (
                                <tr key={emails._id}>
                                <td>
                                    {emails.name}
                                </td>
                                <td>
                                    {emails.email}
                                </td>
                                <td>
                                    {emails.country_code}
                                </td>
                                <td>
                                    {emails.phone}
                                </td>
                                <td>
                                    {emails.subject}
                                </td>
                                <td>
                                    {emails.text}
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
    </>
    )
}

export default ContactDetailsForTeacher
