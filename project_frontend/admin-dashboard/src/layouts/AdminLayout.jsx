import { Outlet } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function AdminLayout() {

    return (

        <div className="dashboard-container">

            <Sidebar />

            <div className="main-content">

                <Navbar role="Admin" />

                <Outlet />

            </div>

        </div>

    );
}

export default AdminLayout;