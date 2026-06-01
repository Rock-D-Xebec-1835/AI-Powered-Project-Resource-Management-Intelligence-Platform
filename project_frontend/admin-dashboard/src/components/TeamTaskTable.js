import React from "react";
import "./TeamTaskTable.css";

function TeamTaskTable({ tasks = [] }) {

  return (

    <div className="team-task-container">

      <h2>Team Tasks</h2>

      <table className="team-task-table">

        <thead>
          <tr>
            <th>Developer</th>
            <th>Task</th>
            <th>Priority</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>

          {tasks.length === 0 ? (

            <tr>
              <td colSpan="4">
                No Tasks Found
              </td>
            </tr>

          ) : (

            tasks.map((task) => (

              <tr key={task.taskId}>

                <td>
                  {task.assignedUserName}
                </td>

                <td>
                  {task.title}
                </td>

                <td>
                  {task.priority}
                </td>

                <td>
                  {task.status}
                </td>

              </tr>

            ))

          )}

        </tbody>

      </table>

    </div>

  );
}

export default TeamTaskTable;