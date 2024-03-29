import React, { useState, useEffect } from "react";
import { useForm } from "@mantine/form";
import { TextInput, Button, Box, Code, Grid, Table } from "@mantine/core";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateMatiere() {
  const [matiere, setMatiereName] = useState("");
  const [section, setSectionName] = useState("");
  const [logo_matiere, setLogoMatiere] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post("http://localhost:3001/create_Matiere", {
        matiere,
        section,
        logo_matiere,
      })
      .then((res) => {
        console.log(res);
        navigate("/DashBoard/Matieres");
      });
  }

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/getLogoMatieres")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const rows = data.map((element) => (
    <tr key={element.id} className="row_mat">
      <td className="T_Body_Mat">{element.matiere}</td>
      <td className="T_Body_Mat">{element.logo_matiere}</td>
      <td className="T_Body_Mat">
        <img src={element.logo_matiere} alt={element.matiere}></img>
      </td>
    </tr>
  ));

  return (
    <Grid>
      <Grid.Col span={3}>
        <Box maw={340} mx="auto">
          <form onSubmit={handleSubmit}>
            <h1>ADD Matiére</h1>
            <TextInput
              label="Matiére Name"
              placeholder="Matiére Name"
              onChange={(e) => setMatiereName(e.target.value)}
            />
            <TextInput
              label="Section Du Matiére"
              placeholder="Section Du Matiére"
              mt="md"
              onChange={(e) => setSectionName(e.target.value)}
            />
            <TextInput
              label="Logo Matiére"
              placeholder="Logo Matiére"
              mt="md"
              onChange={(e) => setLogoMatiere(e.target.value)}
            />
            <Button type="submit" mt="md">
              ADD Matiére
            </Button>
          </form>
        </Box>
      </Grid.Col>
      <Grid.Col span={3}>
        <div>
          <table id="Table_Mat">
            <thead>
              <tr id="T_Head_Mat">
                <th>Matière</th>
                <th>Logo Matiere</th>
                <th>Logo</th>
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </table>
        </div>
      </Grid.Col>
    </Grid>
  );
}

export default CreateMatiere;
