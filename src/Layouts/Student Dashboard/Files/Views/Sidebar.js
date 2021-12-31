import React from 'react';
import { NavLink, useParams, useHistory,} from 'react-router-dom';
import { Nav, NavLink as ReactstrapNavLink } from "reactstrap";
import "./black-dashboard-theme.css"

const SidebarForStudent = (props) => {
  let { id } = useParams();
  const history = useHistory()
  const handleLocation = (e, data) => {
    e.preventDefault()
    history.push({
      pathname: `/student/dashboard/${id}`,
      state : data
  })
  }

    /*
  <Link to={location}/>
  <Redirect to={location}/>
  history.push(location)
  history.replace(location)
  */
    return (
      <div
      >
        <div>
        <div className="sidebar"  style={{ background: 'rgb(55,64,85)', background: 'linear-gradient(72deg, rgba(55,64,85,1) 28%, rgba(63,70,87,1) 59%, rgba(55,64,85,0.9416141456582633) 88%)', boxShadow: 'none' }} >
          <div className="sidebar-wrapper">
            <Nav className="mt-4">
                    <NavLink style = {{color : 'white', fontWeight:'600'}}
                      className="nav-link m-3 text-center display-5"
                      activeClassName="active"
                      to={`/student/category-for-performance/${id}`} 
                    >
                      <i className = "tim-icons icon-badge" />
                      <p>Performance</p>
                    </NavLink>
                    <NavLink style = {{color : 'white', fontWeight:'600'}}
                      className="nav-link m-3 text-center display-5"
                      activeClassName="active"
                      to={`/student/list-of-subjects/${id}`} 
                    >
                      <i className = "tim-icons icon-single-copy-04" />
                      <p>View Subjects</p>
                    </NavLink>
                 
                    <NavLink style = {{color : 'white', fontWeight:'600'}}
                      className="nav-link m-3 text-center display-5"
                      activeClassName="active"
                      to={`/student/list-of-subjects-for-test/${id}`}
                    >
                      <i className = "tim-icons icon-trophy" />
                      <p>View Tests Content</p>
                    </NavLink>
                    <NavLink style = {{color : 'white', fontWeight:'600'}}
                      className="nav-link m-3 text-center display-5"
                      activeClassName="active"
                      to={`/student/list-of-subjects-for-assignments/${id}`}
                    >
                      <i className = "tim-icons icon-trophy" />
                      <p>View Assignments</p>
                    </NavLink>
                   
                    <NavLink style = {{color : 'white', fontWeight:'600'}}
                      className="nav-link m-3 text-center display-5"
                      activeClassName="active"
                      to={`/student/results-category-students/${id}`}
                    >
                      <i className = "tim-icons icon-bell-55" />
                      <p>Results</p>
                    </NavLink>
                   {/*}
                    <NavLink style = {{color : 'white', fontWeight:'600'}}
                      className="nav-link m-3 text-center display-5"
                      activeClassName="active"
                      to={`/student/notifications-category-students/${id}`}
                    >
                      <i className = "tim-icons icon-paper" />
                      <p>Notification</p>
                    </NavLink>
    */}
                    <NavLink style = {{color : 'white', fontWeight:'600'}}
                      className="nav-link m-3 text-center display-5"
                      activeClassName="active"
                      to={`/student/testimonial-list/${id}`}
                    >
                      <i className = "tim-icons icon-paper" />
                      <p>Student Complains</p>
                    </NavLink>
                    <NavLink style = {{color : 'white', fontWeight:'600'}}
                      className="nav-link m-3 text-center display-5"
                      activeClassName="active"
                      to={`/student/list-of-links-liveClass/${id}`}
                    >
                      <i className = "tim-icons icon-paper" />
                      <p>Live Class</p>
                    </NavLink>
                    <NavLink style = {{color : 'white', fontWeight:'600'}}
                      className="nav-link m-3 text-center display-5"
                      activeClassName="active"
                      to={`/student/conferenceCall/${id}`}
                    >
                      <i className = "tim-icons icon-paper" />
                      <p>Conference Call</p>
                    </NavLink>
                    <NavLink style = {{color : 'white', fontWeight:'600'}}
                      className="nav-link m-3 text-center display-5"
                      activeClassName="active"
                      to={`/student/create-student-group/${id}`}
                    >
                      <i className = "tim-icons icon-paper" />
                      <p>Create Student Group</p>
                    </NavLink>
                 
                    
                    
                    
                   
            </Nav>
            
          </div>
        </div>
     

      </div>
      </div>
    );
  };
  

export default SidebarForStudent;
