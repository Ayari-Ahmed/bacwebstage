/*


*/

import React, { useState } from "react";
import { Table, Input, Grid, GridCol } from "@mantine/core";
import "./Recherche.css";
import Logo1 from "../assets/logo1.png";
import Logo2 from "../assets/logo2.png";
import Logo8 from "../assets/logo8.png";
import { comment } from "postcss";









const Recherche = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortedField, setSortedField] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");

  // Your provided data
  const [data, setData] = useState([
      
    { id: 1, matiere: "Mathématiques", section: "Mathématiques" },
    { id: 2, matiere: "Mathématiques", section: "Sciences Expérimentales" },
    { id: 3, matiere: "Mathématiques", section: "Économie et gestion" },
    { id: 4, matiere: "Mathématiques", section: "Technique" },
    { id: 5, matiere: "Mathématiques", section: "Lettres" },
    { id: 6, matiere: "Mathématiques", section: "Sport" },
    { id: 7, matiere: "Mathématiques", section: "Informatique" },

    { id: 8, matiere: "Informatique", section: "Mathématiques" },
    { id: 9, matiere: "Informatique", section: "Sciences Expérimentales" },
    { id: 10, matiere: "Informatique", section: "Économie et gestion" },

    { id: 11, matiere: "Informatique", section: "Technique" },
    { id: 12, matiere: "Informatique", section: "Lettres" },
    { id: 13, matiere: "Informatique", section: "Sport" },

    { id: 14, matiere: "Disc. techniques", section: "Technique" },

    { id: 15, matiere: "Sciences physiques", section: "Mathématiques" },
    {
      id: 16,
      matiere: "Sciences physiques",
      section: "Sciences Expérimentales",
    },
    { id: 17, matiere: "Sciences physiques", section: "Technique" },
    { id: 18, matiere: "Sciences physiques", section: "Sport" },
    { id: 19, matiere: "Sciences physiques", section: "Informatique" },

    {
      id: 20,
      matiere: "Sciences de la vie et de la terre",
      section: "Mathématiques",
    },

    {
      id: 21,
      matiere: "Sciences de la vie et de la terre",
      section: "Sciences Expérimentales",
    },
    { id: 22, matiere: "Sciences de la vie et de la terre", section: "Sport" },

    { id: 23, matiere: "Gestion", section: "Économie et gestion" },

    { id: 24, matiere: "Économie", section: "Économie et gestion" },

    { id: 25, matiere: "Anglais", section: "Mathématiques" },
    { id: 26, matiere: "Anglais", section: "Sciences Expérimentales" },
    { id: 27, matiere: "Anglais", section: "Économie et gestion" },
    { id: 28, matiere: "Anglais", section: "Technique" },
    { id: 29, matiere: "Anglais", section: "Lettres" },
    { id: 30, matiere: "Anglais", section: "Sport" },
    { id: 31, matiere: "Anglais", section: "Informatique" },

    { id: 32, matiere: "Arabe", section: "Mathématiques" },
    { id: 33, matiere: "Arabe", section: "Sciences Expérimentales" },
    { id: 34, matiere: "Arabe", section: "Économie et gestion" },
    { id: 35, matiere: "Arabe", section: "Technique" },
    { id: 36, matiere: "Arabe", section: "Lettres" },
    { id: 37, matiere: "Arabe", section: "Sport" },
    { id: 38, matiere: "Arabe", section: "Informatique" },

    { id: 39, matiere: "Français", section: "Mathématiques" },
    { id: 40, matiere: "Français", section: "Sciences Expérimentales" },
    { id: 41, matiere: "Français", section: "Économie et gestion" },
    { id: 42, matiere: "Français", section: "Technique" },
    { id: 43, matiere: "Français", section: "Lettres" },
    { id: 44, matiere: "Français", section: "Sport" },
    { id: 45, matiere: "Français", section: "Informatique" },

    { id: 46, matiere: "Hist et géo", section: "Économie et gestion" },
    { id: 47, matiere: "Hist et géo", section: "Lettres" },

    { id: 48, matiere: "Philosophie", section: "Mathématiques" },
    { id: 49, matiere: "Philosophie", section: "Sciences Expérimentales" },
    { id: 50, matiere: "Philosophie", section: "Économie et gestion" },
    { id: 51, matiere: "Philosophie", section: "Technique" },
    { id: 52, matiere: "Philosophie", section: "Lettres" },
    { id: 53, matiere: "Philosophie", section: "Sport" },
    { id: 54, matiere: "Philosophie", section: "Informatique" },

    { id: 55, matiere: "Allemand", section: "Mathématiques" },
    { id: 56, matiere: "Allemand", section: "Sciences Expérimentales" },
    { id: 57, matiere: "Allemand", section: "Économie et gestion" },
    { id: 58, matiere: "Allemand", section: "Technique" },
    { id: 59, matiere: "Allemand", section: "Lettres" },
    { id: 60, matiere: "Allemand", section: "Sport" },
    { id: 61, matiere: "Allemand", section: "Informatique" },

    { id: 62, matiere: "Espagnol", section: "Mathématiques" },
    { id: 63, matiere: "Espagnol", section: "Sciences Expérimentales" },
    { id: 64, matiere: "Espagnol", section: "Économie et gestion" },
    { id: 65, matiere: "Espagnol", section: "Technique" },
    { id: 66, matiere: "Espagnol", section: "Lettres" },
    { id: 67, matiere: "Espagnol", section: "Sport" },
    { id: 68, matiere: "Espagnol", section: "Informatique" },

    { id: 69, matiere: "Russe", section: "Mathématiques" },
    { id: 70, matiere: "Russe", section: "Sciences Expérimentales" },
    { id: 71, matiere: "Russe", section: "Économie et gestion" },
    { id: 72, matiere: "Russe", section: "Technique" },
    { id: 73, matiere: "Russe", section: "Lettres" },
    { id: 74, matiere: "Russe", section: "Sport" },
    { id: 75, matiere: "Russe", section: "Informatique" },

    { id: 76, matiere: "Chinois", section: "Mathématiques" },
    { id: 77, matiere: "Chinois", section: "Sciences Expérimentales" },
    { id: 78, matiere: "Chinois", section: "Économie et gestion" },
    { id: 79, matiere: "Chinois", section: "Technique" },
    { id: 80, matiere: "Chinois", section: "Lettres" },
    { id: 81, matiere: "Chinois", section: "Sport" },
    { id: 82, matiere: "Chinois", section: "Informatique" },

    { id: 83, matiere: "Turque", section: "Mathématiques" },
    { id: 84, matiere: "Turque", section: "Sciences Expérimentales" },
    { id: 85, matiere: "Turque", section: "Économie et gestion" },
    { id: 86, matiere: "Turque", section: "Technique" },
    { id: 87, matiere: "Turque", section: "Lettres" },
    { id: 88, matiere: "Turque", section: "Sport" },
    { id: 89, matiere: "Turque", section: "Informatique" },

    { id: 90, matiere: "Portugais", section: "Mathématiques" },
    { id: 91, matiere: "Portugais", section: "Sciences Expérimentales" },
    { id: 92, matiere: "Portugais", section: "Économie et gestion" },
    { id: 93, matiere: "Portugais", section: "Technique" },
    { id: 94, matiere: "Portugais", section: "Lettres" },
    { id: 95, matiere: "Portugais", section: "Sport" },
    { id: 96, matiere: "Portugais", section: "Informatique" },

    { id: 97, matiere: "Italien", section: "Mathématiques" },
    { id: 98, matiere: "Italien", section: "Sciences Expérimentales" },
    { id: 99, matiere: "Italien", section: "Économie et gestion" },
    { id: 100, matiere: "Italien", section: "Technique" },
    { id: 101, matiere: "Italien", section: "Lettres" },
    { id: 102, matiere: "Italien", section: "Sport" },
    { id: 103, matiere: "Italien", section: "Informatique" },

    { id: 104, matiere: "Éducation Musicale", section: "Mathématiques" },
    {
      id: 105,
      matiere: "Éducation Musicale",
      section: "Sciences Expérimentales",
    },
    { id: 106, matiere: "Éducation Musicale", section: "Économie et gestion" },
    { id: 107, matiere: "Éducation Musicale", section: "Technique" },
    { id: 108, matiere: "Éducation Musicale", section: "Lettres" },
    { id: 109, matiere: "Éducation Musicale", section: "Sport" },
    { id: 110, matiere: "Éducation Musicale", section: "Informatique" },

    { id: 111, matiere: "Arts & Plastiques", section: "Mathématiques" },
    {
      id: 112,
      matiere: "Arts & Plastiques",
      section: "Sciences Expérimentales",
    },
    { id: 113, matiere: "Arts & Plastiques", section: "Économie et gestion" },
    { id: 114, matiere: "Arts & Plastiques", section: "Technique" },
    { id: 115, matiere: "Arts & Plastiques", section: "Lettres" },
    { id: 116, matiere: "Arts & Plastiques", section: "Sport" },
    { id: 117, matiere: "Arts & Plastiques", section: "Informatique" },

    { id: 118, matiere: "Théâtre", section: "Mathématiques" },
    { id: 119, matiere: "Théâtre", section: "Sciences Expérimentales" },
    { id: 120, matiere: "Théâtre", section: "Économie et gestion" },
    { id: 121, matiere: "Théâtre", section: "Technique" },
    { id: 122, matiere: "Théâtre", section: "Lettres" },
    { id: 123, matiere: "Théâtre", section: "Sport" },
    { id: 124, matiere: "Théâtre", section: "Informatique" },

    { id: 125, matiere: "Sport", section: "Mathématiques" },
    { id: 126, matiere: "Sport", section: "Sciences Expérimentales" },
    { id: 127, matiere: "Sport", section: "Économie et gestion" },
    { id: 128, matiere: "Sport", section: "Technique" },
    { id: 129, matiere: "Sport", section: "Lettres" },
    { id: 130, matiere: "Sport", section: "Sport" },
    { id: 131, matiere: "Sport", section: "Informatique" },

    { id: 132, matiere: "Pensée islamique", section: "Lettres" },

    { id: 133, matiere: "Algorithmes", section: "Informatique" },

    { id: 134, matiere: "Bases de données", section: "Informatique" },

  ]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSort = (field) => {
    if (field === sortedField) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortedField(field);
      setSortOrder("asc");
    }
  };

  const filteredData = data.filter((element) =>
    Object.values(element).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const sortedData = sortedField
    ? filteredData.sort((a, b) => {
        const aValue = a[sortedField];
        const bValue = b[sortedField];

        if (sortOrder === "asc") {
          return aValue > bValue ? 1 : -1;
        } else {
          return bValue > aValue ? 1 : -1;
        }
      })
    : filteredData;

  const rows = sortedData.map((element) => (
    <Table.Tr key={element.id} className="row">
      
      <Table.Td>{element.section}</Table.Td>
      <Table.Td>{element.matiere}</Table.Td>
    </Table.Tr>
  ));

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

      <div className="myDiv1">
        <div>
          <img src={Logo8} alt="Logo2" id="Logo8" />
        </div>
        <Input
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
          radius="lg"
          style={{ width: "70% ", margin: "auto", marginBottom: "20px " }}
          id="input"
        />

        <Table className="Table">
          <Table.Thead>
            <Table.Tr className="table__header">
              
              <Table.Th
                onClick={() => handleSort("section")}
                className="Table_Header"
              >
                Section
              </Table.Th>
              <Table.Th
                onClick={() => handleSort("matiere")}
                className="Table_Header"
              >
                Matière
              </Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </div>
    </>
  );
};

export default Recherche;
