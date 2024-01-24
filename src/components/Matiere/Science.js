import React from "react";
import Logo1 from "./logos/logo1.png";
import Logo2 from "./logos/logo2.png";
import { Grid } from "@mantine/core";

function Science() {
  return (
    <>
      <Grid >
        <Grid.Col span={4}>
          <div>
            <img src={Logo1} alt="Logo1" id="Logo1" />
          </div>
        </Grid.Col>
        <Grid.Col span={4}>
    <h2>Science</h2>
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

export default Science;
