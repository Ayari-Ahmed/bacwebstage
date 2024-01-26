import React from "react";
import Logo1 from "../assets/logo1.png";
import Logo2 from "../assets/logo2.png";
import { Grid, GridCol } from "@mantine/core";
import "./bac-topics.css";

function BacTopics() {
  return (
    <>
      <Grid className="Grid">
        <Grid.Col span={4}>
          <div>
            <img src={Logo1} alt="Logo1" id="Logo1" />
          </div>
        </Grid.Col>
        <Grid.Col span={4}>

        </Grid.Col>
        <Grid.Col span={4}>
          <div id="Div3">
            <img src={Logo2} alt="Logo2" id="Logo2" />
          </div>
        </Grid.Col>
      </Grid>
    </>
  );
}

export default BacTopics;
