import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./DashBoard.css";

function DashBoard() {
  const [section, setSection] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/getSections")
      .then((res) => setSection(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
        <div className="w-50 bg-white rounded">
          <Link to="/create" className="btn btn-success">
            Add +
          </Link>
          <br />
          <table>
            <thead>
              <tr>
                <th>Section Name</th>
                <th>Image URL</th>
                <th>Lien</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {section.map((data) => (
                <tr key={data.section_id}>
                  <td>{data.section_name}</td>
                  <td>{data.image_url}</td>
                  <td>{data.link}</td>
                  <td>
                    <Link to={`update/${data.id}`} className="btn btn-primary">Update</Link>
                    <button className="btn btn-danger">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default DashBoard;
