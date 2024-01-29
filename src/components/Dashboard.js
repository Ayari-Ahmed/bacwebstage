import React from "react";
import DashBoard_Sections from "./DashBoardSections";
import "./DashBoard.css";
import NavbarSimple from "./NavbarSimple";
import { Grid } from "@mantine/core";
import Logo1 from "../assets/logo1.png";
import Tun from "../assets/tun.png";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Login";
import Databases from "./Sections";
import Sections from "./Sections";
import Matieres from "./Recherche";
import OtherSettings from "./Sections";

import { MantineProvider } from "@mantine/core";
export default function DashBoard() {
  return (
    <>
      <Grid>
        <Grid.Col span={4}>
          <div id="Nav_Bar">
            <NavbarSimple />
          </div>
        </Grid.Col>
        <Grid.Col span={4}>
          <div id="Boodyy">

          </div>
        </Grid.Col>
        <Grid.Col span={4}>
          <div></div>
        </Grid.Col>
      </Grid>
      <Grid className="bottom-grid" id="Fo">
        <Grid.Col span={4}>
          <div>
            <br />
            <img src={Tun} alt="Tunisian Flag" className="Tunisian_Flag" />
          </div>
        </Grid.Col>
        <Grid.Col span={4}>
          <div>
            <br />
            <br />
            <p id="text-footer">
              المركز الوطني للتكنولوجيات في التربية : جميع الحقوق محفوظة
              1994-2023
            </p>
          </div>
        </Grid.Col>
        <Grid.Col span={4}>
          <div>
            <img src={Logo1} alt="Logo1" className="L_Footer" />
          </div>
        </Grid.Col>
      </Grid>
    </>
  );
}
