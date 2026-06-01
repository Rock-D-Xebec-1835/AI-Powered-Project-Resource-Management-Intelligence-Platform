import React, { useEffect, useState } from "react";
import "./ManagerDashboard.css";

import Navbar from "../components/Navbar";
import ManagerSidebar from "../components/ManagerSidebar";
import ManagerStatCard from "../components/ManagerStatCard";
import TeamTaskTable from "../components/TeamTaskTable";
import Notifications from "../components/Notifications";
import api from "../services/api";

function ManagerDashboard() {

  const [tasks, setTasks] = useState([]);
  const [projects, setProjects] = useState([]);
  const [predictions, setPredictions] = useState([]);

  useEffect(() => {

    api.get("/tasks")
      .then((response) => {
        setTasks(response.data);
      })
      .catch(console.error);

    api.get("/projects")
      .then((response) => {
        setProjects(response.data);
      })
      .catch(console.error);

    api.get("/predictions")
      .then((response) => {
        setPredictions(response.data);
      })
      .catch(console.error);

  }, []);

  const latestPrediction =
    predictions.length > 0
      ? predictions[predictions.length - 1]
      : null;

  return (

        <div className="manager-dashboard-body">

          <h1>Manager Dashboard</h1>

          <p>
            Track sprint performance and manage team workload
          </p>

          <div className="manager-stats-section">

            <ManagerStatCard
              title="Team Tasks"
              value={tasks.length}
            />

            <ManagerStatCard
              title="Projects"
              value={projects.length}
            />

            <ManagerStatCard
              title="Latest Risk"
              value={
                latestPrediction
                  ? latestPrediction.riskStatus
                  : "N/A"
              }
            />

            <ManagerStatCard
              title="Predictions"
              value={predictions.length}
            />

          </div>

          <div className="manager-chart-section">

            <div className="manager-card">

              <h2>Project Overview</h2>

              <p>
                Active Projects: {projects.length}
              </p>

              <p>
                Team Tasks: {tasks.length}
              </p>

            </div>

            <div className="manager-card">

              <h2>Latest Recommendation</h2>

              <p>
                {
                  latestPrediction
                    ? latestPrediction.recommendation
                    : "No predictions generated"
                }
              </p>

            </div>

          </div>

          <TeamTaskTable tasks={tasks} />

          <Notifications />

        </div>
  );
}

export default ManagerDashboard;