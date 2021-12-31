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
                      to={`/admin/stats-category/${id}`} 
                    >
                      <i className = "tim-icons icon-badge" />
                      <p>Statistics</p>
                    </NavLink>
                    <NavLink style = {{color : 'white', fontWeight:'600'}}
                      className="nav-link m-3 text-center display-5"
                      activeClassName="active"
                      to={`/admin/teacher-info-table/${id}`} 
                    >
                      <i className = "tim-icons icon-single-copy-04" />
                      <p>Teacher Section</p>
                    </NavLink>
                 
                    <NavLink style = {{color : 'white', fontWeight:'600'}}
                      className="nav-link m-3 text-center display-5"
                      activeClassName="active"
                      to={`/admin/gender-category-student/${id}`}
                    >
                      <i className = "tim-icons icon-trophy" />
                      <p>Student Section</p>
                    </NavLink>

                    <NavLink style = {{color : 'white', fontWeight:'600'}}
                      className="nav-link m-3 text-center display-5"
                      activeClassName="active"
                      to={`/admin/list-of-projects/${id}`}
                    >
                      <i className = "tim-icons icon-trophy" />
                      <p>Projects</p>
                    </NavLink>
                    <NavLink style = {{color : 'white', fontWeight:'600'}}
                      className="nav-link m-3 text-center display-5"
                      activeClassName="active"
                      to={`/admin/chat-admin`}
                    >
                      <i className = "tim-icons icon-trophy" />
                      <p>Syntics Chat</p>
                    </NavLink>
                   {/*}
                    <NavLink style = {{color : 'white', fontWeight:'600'}}
                      className="nav-link m-3 text-center display-5"
                      activeClassName="active"
                      to={``}
                    >
                      <i className = "tim-icons icon-bell-55" />
                      <p>Blogs</p>
                    </NavLink>
                   
                    <NavLink style = {{color : 'white', fontWeight:'600'}}
                      className="nav-link m-3 text-center display-5"
                      activeClassName="active"
                      to={``}
                    >
                      <i className = "tim-icons icon-paper" />
                      <p>Testimonials</p>
                    </NavLink>
    */}
                  
                  
            </Nav>
            
          </div>
        </div>
     

      </div>
      </div>
    );
  };
  

export default SidebarForStudent;
