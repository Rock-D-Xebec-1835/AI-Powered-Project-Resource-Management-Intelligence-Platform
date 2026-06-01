import { Outlet } from "react-router-dom";

import ManagerSidebar from "../components/ManagerSidebar";
import Navbar from "../components/Navbar";

function ManagerLayout() {

    return (

        <div className="manager-dashboard-container">

            <ManagerSidebar />

            <div className="manager-main-content">

                <Navbar role="Manager" />

                <Outlet />

            </div>

        </div>

    );
}

export default ManagerLayout;