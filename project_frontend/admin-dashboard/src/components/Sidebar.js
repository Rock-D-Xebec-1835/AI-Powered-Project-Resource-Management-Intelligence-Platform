import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2 className="logo">PIM</h2>

      <ul className="menu">

        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>

        <li>
          <Link to="/dashboard/projects">Projects</Link>
        </li>

        <li>
          <Link to="/dashboard/sprints">Sprints</Link>
        </li>

        <li>
          <Link to="/dashboard/tasks">Tasks</Link>
        </li>

        <li>
          <Link to="/dashboard/resources">Resources</Link>
        </li>

        <li>
          <Link to="/dashboard/analytics">Analytics</Link>
        </li>

        <li>
          <Link to="/dashboard/delay-risk">Delay Risk</Link>
        </li>

        <li>
          <Link to="/dashboard/notifications">Notifications</Link>
        </li>

        <li>
          <Link to="/dashboard/settings">Settings</Link>
        </li>

      </ul>
    </div>
  );
}

export default Sidebar;