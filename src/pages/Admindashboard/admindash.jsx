import React from "react";
import "./admin.css";
import DriveSidebar from "../../component/Side/driveSidebar";
import { Card } from "../../constants";
const Admin = () => {
  return (
    <>
      <div className="admin-container">
        <DriveSidebar />
        <div className="admin-content">
          <h4>
            WELCOME <span style={{ color: "#009AC7" }}>Admin.</span>
          </h4>

          <div className="line2"></div>

          <div className="card-admin">
            {Card.map((data) => (
              <div className="blue-card">
                <h1>{data.icon}</h1>
                <p>{data.number}</p>
                <button>{data.button}</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Admin;
