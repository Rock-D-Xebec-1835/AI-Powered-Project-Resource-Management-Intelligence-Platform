import React from "react";
import MainLayout from "../layouts/MainLayout";

function SettingsPage() {

    const email =
        localStorage.getItem("email");

    const role =
        localStorage.getItem("role");

    return (
        <div style={{ padding: "30px" }}>

            <h1>Settings</h1>

            <div
                style={{
                    border: "1px solid #ccc",
                    padding: "20px",
                    borderRadius: "8px",
                    maxWidth: "500px"
                }}
            >

                <p>
                    <strong>Email:</strong>
                    {" "}
                    {email}
                </p>

                <p>
                    <strong>Role:</strong>
                    {" "}
                    {role}
                </p>

            </div>

        </div>
    );
}

export default SettingsPage;