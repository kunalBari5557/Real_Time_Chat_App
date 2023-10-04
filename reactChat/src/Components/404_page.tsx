import React, { useLayoutEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const Page_Not_Found = () => {

    const path=useLocation();
    const navigate = useNavigate();

    useLayoutEffect(() => {
        const body = document.querySelector("body");

        body?.classList.add("error404","text-center");

    },[path]);
    
  return (
    <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-4 mr-auto mt-5 text-md-left text-center">
                    <a href="index.html" className="ml-md-5">
                        <img alt="img-404" src="/assets/img/90x90.jpg" className="theme-logo_404"/>
                    </a>
                </div>
            </div>
        </div>
        <div className="container-fluid error-content">
            <div className="">
                <h1 className="error-number">404</h1>
                <p className="mini-text">Ooops!</p>
                <p className="error-text mb-4 mt-1">The page you requested was not found!</p>
                <a href="#404" onClick={()=>navigate(-1)} className="btn btn-primary mt-5">Go Back</a>
            </div>
        </div>    
    </>
  )
}
export default Page_Not_Found