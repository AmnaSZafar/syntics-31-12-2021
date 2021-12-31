import React, { useState, useEffect } from 'react'
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { Link, useHistory, useRouteMatch, useLocation  } from "react-router-dom";
import { getContacts } from '../Apis/apiForContactUs';


function ContactsForAdmin() {
    const [items, setItems] = useState([])
    const history = useHistory()
    useEffect(() => {
      const fetchItems = async function() {
        const contacts = await getContacts()
        setItems(contacts)
      }
      fetchItems()
    })

    const handleOnClick = (data) => {
      history.push({
          pathname:"/view-contact-details",
          state: data
        })
      }
    return (
        <>
      <div className="content">
        <Row className='my-5'>
          <Col md="12">
          <h2 className='text-center display-2 my-3' style={{ color:'rgba(55, 64, 85, 0.9)', fontWeight:'900' }}>Contacts</h2>
            
            <Card className="card-plain border-0">
              {/* <CardHeader>contacts</CardHeader> */}
              <CardBody>
                <div className="container my-5 text-center">
                    <div className="mt-3">
                        <h3  className='text-center display-4 my-3' style={{ color:'rgba(55, 64, 85, 0.9)', fontWeight:'900' }}>Query List</h3>
                        <table className="table table-striped mt-3">
                        <thead>
                            <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Country Code</th>
                            <th>Phone</th>
                            <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            items.map(contacts => (
                                <tr key={contacts._id}>
                                <td>
                                    {contacts.name}
                                </td>
                                <td>
                                    {contacts.email}
                                </td>
                                <td>
                                    {contacts.country_code}
                                </td>
                                <td>
                                    {contacts.phone}
                                </td>
                                <td>
                                    <button className = "btn btn-dark" onClick={() => handleOnClick(contacts)}>View Query</button>
                                </td>
                                </tr>
                            ))
                            }
                        </tbody>
                        </table>
                    </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
    )
}

export default ContactsForAdmin
