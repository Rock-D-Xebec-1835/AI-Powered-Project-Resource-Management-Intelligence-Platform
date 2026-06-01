import React from "react";
import "./TaskTable.css";

function TaskTable({ tasks = [] }) {

  return (
    <div className="task-table-container">

      <h2>My Tasks</h2>

      <table className="task-table">

        <thead>
          <tr>
            <th>Task</th>
            <th>Priority</th>
            <th>Deadline</th>
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

                <td>{task.title}</td>

                <td>{task.priority}</td>

                <td>{task.dueDate}</td>

                <td>{task.status}</td>

              </tr>

            ))

          )}

        </tbody>

      </table>

    </div>
  );
}

export default TaskTable;