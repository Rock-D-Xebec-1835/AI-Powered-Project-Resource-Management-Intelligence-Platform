import React from "react";
import { Link } from "react-router-dom";
import "./ManagerSidebar.css";

function ManagerSidebar() {
  return (
    <div className="manager-sidebar">
      <h2 className="manager-logo">PIM</h2>

      <ul className="manager-menu">
        <li>
          <Link to="/dashboard/manager">
            Dashboard
          </Link>
        </li>

        <li>
          <Link to="/dashboard/manager/projects">
            Projects
          </Link>
        </li>

        <li>
          <Link to="/dashboard/manager/sprints">
            Sprint Management
          </Link>
        </li>

        <li>
          <Link to="/dashboard/manager/tasks">
            Team Tasks
          </Link>
        </li>

        <li>
          <Link to="/dashboard/manager/resources">
            Resources
          </Link>
        </li>

        <li>
          <Link to="/dashboard/manager/analytics">
            Analytics
          </Link>
        </li>

        <li>
          <Link to="/dashboard/manager/delay-risk">
            Delay Risk
          </Link>
        </li>

        <li>
          <Link to="/dashboard/manager/notifications">
            Notifications
          </Link>
        </li>

        <li>
          <Link to="/dashboard/manager/settings">
            Settings
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default ManagerSidebar;