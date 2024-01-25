import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Grid } from "@mantine/core";

import Logo1 from "./logos/logo1.png";
import Logo2 from "./logos/logo2.png";

export default function Technique() {
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3001/api/getSubjects/Technique"
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
      <>
        <Grid>
          <Grid.Col span={4}>
            <div>
              <img src={Logo1} alt="Logo1" id="Logo1" />
            </div>
          </Grid.Col>
          <Grid.Col span={4}>
            <div id="myDiv4">
              <p>مواضيع الباكالوريا و اصلاحها منذ 1994</p>
              <p>Toutes les épreuves du BAC tunisien et leurs corrigés</p>
            </div>
          </Grid.Col>
          <Grid.Col span={4}>
            <div id="Div3">
              <img src={Logo2} alt="Logo2" id="Logo2" />
            </div>
          </Grid.Col>
        </Grid>
        {subjects.length > 0 && <h2>Section: {subjects[0].section}</h2>}
        <Grid
          justify="center"
          align="center"
          style={{ marginLeft: "3%", marginRight: "3%", marginTop: "5%" }}
        >
          {subjects.map((subject, index) => (
            <Grid.Col key={index} span={3}>
              <Link>
                <div>
                  {subject.matiere}
                  <img
                    src={subject.logo_matiere}
                    alt={"Logo : " + subject.matiere}
                  />
                </div>
              </Link>
            </Grid.Col>
          ))}
        </Grid>
      </>
    );
  }
}
