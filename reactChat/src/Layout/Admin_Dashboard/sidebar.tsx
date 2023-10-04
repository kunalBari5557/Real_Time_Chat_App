import React from 'react'
import { NavLink, useLocation} from 'react-router-dom'


const Admin_Sidebar = () => {
    const {pathname} = useLocation();
    
    return (
        <>
              <div className="sidebar-wrapper sidebar-theme">
            <nav id="sidebar">
                <div className="shadow-bottom"></div>
                <div className="d-flex justify-content-end">
                    <a href="/#" className="sidebarCollapse mr-2 d-sm-none" data-placement="bottom">
                        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </a>
                </div>

                <ul className="list-unstyled menu-categories" id="accordionExample">
                    <li className="menu">
                        <NavLink to="/" data-active={pathname==="/"?"true":"false"} aria-expanded={pathname==="/"?"true":"false"} className="dropdown-toggle">
                            <div className="">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                                <span>Dashboard</span>
                            </div>
                        </NavLink>
                    </li> 
                    
                    <li className="menu">
                        <NavLink to="/chat" data-active={pathname==="/chat"?"true":"false"} aria-expanded={pathname==="/chat"?"true":"false"} className="dropdown-toggle">
                            <div className="">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                                <span>ChatBox</span>
                            </div>
                        </NavLink>
                    </li> 
                </ul>
            </nav>
        </div>
        </>
    )

}

export default Admin_Sidebar