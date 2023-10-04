import { Outlet } from 'react-router-dom';
import AdminHeader from "./header";
import AdminSidebar from "./sidebar";

const AdminLayout = () =>{

    return (
        <>
            <AdminHeader/>
            <div className="main-container" id="container">
                <AdminSidebar/>
    
                <div id="content" className="main-content">
                  <div className="layout-px-spacing">
                    <div className="row layout-top-spacing mx-md-1 mx-sm-0">
                      <Outlet/>
                    </div>
                  </div>
                </div>
            </div>
        </>
      )

} 

export default AdminLayout