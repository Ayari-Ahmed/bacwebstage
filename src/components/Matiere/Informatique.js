import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Informatique() {
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3001/api/getSubjects"
        );
        setSubjects(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  if (subjects != []) {
    return (
      <div>
        <h1>Informatique</h1>
        <ul>
          {subjects.map((subject, index) => (
            <li key={index}>{subject.matiere}</li>
          ))}
        </ul>
      </div>
    );
  }
}
