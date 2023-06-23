import React from "react";
import "./destination.css";
import destination from "../../../src/Destination";
import DriverSidebar from "../../component/Side/driveSidebar";
import { Link } from "react-router-dom";
// const driver = drivers();
console.log(destination);
// { Students.map((item) => (
//     <div className="mappu">
//         <div className="name"><span > name: {item.name}</span></div>
//         <div className="age"><span > age: {item.age}</span></div>
//        </div>
// ) )}
const Destination = () => {
  return (
    <div className="container-destination" id="destination-fix-error">
      <div className="sidebar">
        <DriverSidebar/>
      </div>
      <div className="content">
        <div className="KicukiroNyabugogoos">
          <span className="driverLocation">Destination Status</span>
        </div>
        <div className="driverTable">
          <table>
            <thead className="table-header">
              <th className="header">Origin</th>
              <th className="header">Destination</th>
              <th className="header">Status</th>
            </thead>
            <tbody className="table-body">
              {destination.map((item) => (
                <tr className="table-row">
                  <td className="item1">{item.Origin}</td>
                  <td className="item2">{item.Destination}</td>
                  <td className="item3"><span className="status"><Link to='/booking'>{item.Status} </Link> </span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default Destination;
