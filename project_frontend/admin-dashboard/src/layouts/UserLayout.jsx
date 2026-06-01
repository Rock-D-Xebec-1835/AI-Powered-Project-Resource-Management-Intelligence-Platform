import { Outlet } from "react-router-dom";

import UserSidebar from "../components/UserSidebar";
import Navbar from "../components/Navbar";

function UserLayout() {

    return (

        <div className="user-dashboard-container">

            <UserSidebar />

            <div className="user-main-content">

                <Navbar role="Developer" />

                <Outlet />

            </div>

        </div>

    );
}

export default UserLayout;