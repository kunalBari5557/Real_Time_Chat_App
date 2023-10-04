import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminLayout from '../Layout/Admin_Dashboard';
import AdminDashboard from '../pages/Dashboard';
import Chatbox from '../pages/Chatbox';
// import UserAdd from '../pages/User/store';
const Admin_Routes = () => {

    return (
        <BrowserRouter>
            <Routes>
                    <Route element={<AdminLayout />}>
                        <Route path="/" element={<AdminDashboard />} />
                        <Route path="chat" element={<Chatbox />} />
                    </Route>
            </Routes>
        </BrowserRouter>
    )

}
export default Admin_Routes