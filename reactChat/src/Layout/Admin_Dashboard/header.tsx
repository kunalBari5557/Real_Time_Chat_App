import React from 'react'
import { useLocation } from 'react-router-dom';

const Admin_Header = () =>{

    const {pathname} = useLocation();
    React.useEffect(() => {
        let Loading = localStorage.getItem('is_loading');
        if(Loading === "true"){
             localStorage.setItem('is_loading',"false");
             window.location.reload();
        }
    }, [pathname]);

    return (
        <>
            <div className="header-container fixed-top">
                <header className="header navbar navbar-expand-sm">

                    <ul className="navbar-item theme-brand flex-row  text-center">
                        <li className="nav-item theme-logo">
                            <a href="##">
                                <img src="/assets/img/90x90.jpg" className="navbar-logo" alt="logo"/>
                            </a>
                        </li>
                        <li className="nav-item theme-text">
                            <a href="##" className="nav-link"> Chat App </a>
                        </li>
                    </ul>

                </header>
            </div>
            <div className="sub-header-container">
                <header className="header navbar navbar-expand-sm">
                    <a href="##" className="sidebarCollapse" data-placement="bottom"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg></a>
                </header>
            </div>
        </>
    )

}

export default Admin_Header