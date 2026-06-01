import React, { useEffect, useState } from "react";
import "./UserDashboard.css";

import Navbar from "../components/Navbar";
import UserSidebar from "../components/UserSidebar";
import PerformanceCard from "../components/PerformanceCard";
import TaskTable from "../components/TaskTable";
import Notifications from "../components/Notifications";
import api from "../services/api";

function UserDashboard() {

  const [tasks, setTasks] = useState([]);
  const [predictions, setPredictions] = useState([]);

  useEffect(() => {

    api.get("/tasks")
      .then((response) => {
        setTasks(response.data);
      })
      .catch(console.error);

    api.get("/predictions")
      .then((response) => {
        setPredictions(response.data);
      })
      .catch(console.error);

  }, []);

  const completedTasks =
    tasks.filter(
      task => task.status === "DONE"
    ).length;

  const pendingTasks =
    tasks.filter(
      task => task.status !== "DONE"
    ).length;

  const latestPrediction =
    predictions.length > 0
      ? predictions[predictions.length - 1]
      : null;

  return (

        <div className="user-dashboard-body">

          <h1>
            Hello {localStorage.getItem("email")} 👋
          </h1>

          <p>
            Welcome back to your workspace
          </p>

          <div className="performance-section">

            <PerformanceCard
              title="Assigned Tasks"
              value={tasks.length}
            />

            <PerformanceCard
              title="Completed"
              value={completedTasks}
            />

            <PerformanceCard
              title="Pending"
              value={pendingTasks}
            />

            <PerformanceCard
              title="Predictions"
              value={predictions.length}
            />

          </div>

          <div className="risk-section">

            <div className="risk-card">

              <h2>Delay Risk</h2>

              <h1>
                {
                  latestPrediction
                    ? latestPrediction.riskStatus
                    : "N/A"
                }
              </h1>

              <p>
                {
                  latestPrediction
                    ? latestPrediction.recommendation
                    : "No prediction available"
                }
              </p>

            </div>

            <div className="sprint-card">

              <h2>Task Summary</h2>

              <p>
                Total Tasks: {tasks.length}
              </p>

              <p>
                Completed: {completedTasks}
              </p>

              <p>
                Pending: {pendingTasks}
              </p>

            </div>

          </div>

          <TaskTable tasks={tasks} />

          <Notifications />

        </div>

  );
}

export default UserDashboard;