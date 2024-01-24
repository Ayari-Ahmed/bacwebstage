import React from "react";
import { Link } from "react-router-dom";
import { Grid } from "@mantine/core";
import "./Sections.css";
import Logo1 from "../assets/logo1.png";
import Logo2 from "../assets/logo2.png";
import Science from "../assets/matieres/Science.svg";
import Mathématique from "../assets/matieres/Mathématique.svg";
import Eco_Ges from "../assets/matieres/Eco-Ges.svg";
import Technique from "../assets/matieres/Technique.svg";
import Lettres from "../assets/matieres/Lettres.svg";
import Sport from "../assets/matieres/Sport.svg";
import Informatique from "../assets/matieres/Informatique.svg";
import Tun from "../assets/tun.png";

const logos = [
  {
    id: "L1",
    section: "Sciences Expérimentales",
    imageUrl: Science,
    link: "/Science",
  },
  {
    id: "L2",
    section: "Mathématiques",
    imageUrl: Mathématique,
    link: "/Mathématiques",
  },
  {
    id: "L3",
    section: "Économie et gestion",
    imageUrl: Eco_Ges,
    link: "/Économie-gestion",
  },
  { id: "L4", section: "Technique", imageUrl: Technique, link: "/Technique" },
  { id: "L5", section: "Lettres", imageUrl: Lettres, link: "/Lettres" },
  { id: "L6", section: "Sport", imageUrl: Sport, link: "/Sport" },
  { id: "L7", section: "Informatique", imageUrl: Informatique, link: "/Informatique" },
];


export default function Sections() {
  const logoGroups = [];
  for (let i = 0; i < logos.length; i += 4) {
    logoGroups.push(logos.slice(i, i + 4));
  }
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

      <Grid
        justify="center"
        align="center"
        style={{ marginLeft: "3%", marginRight: "3%", marginTop: "5%" }}
      >
        <Grid.Col span={3}>
          <Link key="1" to={logos[0].link}  className="Lien">
            <div className="Section" id="lien1">
              <img
                src={logos[0].imageUrl}
                alt={`Logo ${logos[0].id}`}
                style={{ cursor: "pointer" }}
                id={logos[0].id}
                className="Sections-Logos"
              />
              <h2>{logos[0].section}</h2>
            </div>
          </Link>
        </Grid.Col>
        <Grid.Col span={3}>
          <Link key="1" to={logos[1].link}  className="Lien">
            <div className="Section" id="lien2">
              <img
                src={logos[1].imageUrl}
                alt={`Logo ${logos[1].id}`}
                style={{ cursor: "pointer" }}
                id={logos[1].id}
                className="Sections-Logos"
              />
              <h2>{logos[1].section}</h2>
            </div>
          </Link>
        </Grid.Col>
        <Grid.Col span={3}>
          <Link key="1" to={logos[2].link}  className="Lien">
            <div className="Section" id="lien3">
              <img
                src={logos[2].imageUrl}
                alt={`Logo ${logos[2].id}`}
                style={{ cursor: "pointer" }}
                id={logos[2].id}
                className="Sections-Logos"
              />
              <h2>{logos[2].section}</h2>
            </div>
          </Link>
        </Grid.Col>
        <Grid.Col span={3}>
          <Link key="1" to={logos[3].link}  className="Lien">
            <div className="Section" id="lien4">
              <img
                src={logos[3].imageUrl}
                alt={`Logo ${logos[3].id}`}
                style={{ cursor: "pointer" }}
                id={logos[3].id}
                className="Sections-Logos"
              />
              <h2>{logos[3].section}</h2>
            </div>
          </Link>
        </Grid.Col>
        <Grid.Col span={3}>
          <Link key="1" to={logos[4].link}  className="Lien">
            <div className="Section" id="lien5">
              <img
                src={logos[4].imageUrl}
                alt={`Logo ${logos[4].id}`}
                style={{ cursor: "pointer" }}
                id={logos[4].id}
                className="Sections-Logos"
              />
              <h2>{logos[4].section}</h2>
            </div>
          </Link>
        </Grid.Col>
        <Grid.Col span={3}>
          <Link key="1" to={logos[5].link}  className="Lien">
            <div className="Section" id="lien6">
              <img
                src={logos[5].imageUrl}
                alt={`Logo ${logos[5].id}`}
                style={{ cursor: "pointer" }}
                id={logos[5].id}
                className="Sections-Logos"
              />
              <h2>{logos[5].section}</h2>
            </div>
          </Link>
        </Grid.Col>
        <Grid.Col span={3}>
          <Link key="1" to={logos[6].link}  className="Lien">
            <div className="Section" id="lien7">
              <img
                src={logos[6].imageUrl}
                alt={`Logo ${logos[6].id}`}
                style={{ cursor: "pointer" }}
                id={logos[6].id}
                className="Sections-Logos"
              />
              <h2>{logos[6].section}</h2>
            </div>
          </Link>
        </Grid.Col>
      </Grid>
      <Grid className="bottom-grid" id="footer">
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
