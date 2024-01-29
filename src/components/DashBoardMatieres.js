import React, { useState, useEffect } from "react";
import { Table, Input } from "@mantine/core";
import { Link } from "react-router-dom";
import axios from "axios";
import Logo8 from "../assets/logo8.png";

function Test() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortedField, setSortedField] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");
  const [section, setSection] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/getMatieres")
      .then((res) => setSection(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/delete/${id}`);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

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

  const filteredData = section.filter(
    (element) =>
      Object.values(element).some((value) =>
        value.toString().toLowerCase().includes(searchTerm.toLowerCase())
      ) ||
      element.id.toString().toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedData = sortedField
    ? filteredData.sort((a, b) => {
        const aValue =
          sortedField === "id" ? parseInt(a[sortedField], 10) : a[sortedField];
        const bValue =
          sortedField === "id" ? parseInt(b[sortedField], 10) : b[sortedField];

        if (sortOrder === "asc") {
          return aValue > bValue ? 1 : -1;
        } else {
          return bValue > aValue ? 1 : -1;
        }
      })
    : filteredData;

  const rows = sortedData.map((element) => (
    <Table.Tr key={element.id} className="row">
      <Table.Td>{element.id}</Table.Td>
      <Table.Td>{element.section}</Table.Td>
      <Table.Td>{element.matiere}</Table.Td>
      <Table.Td>
        <Link to={`update/${element.id}`} className="btn btn-primary">
          Update
        </Link>
        <button
          className="btn btn-danger"
          onClick={() => handleDelete(element.id)}
        >
          Delete
        </button>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <>
      <div className="myDiv1">
        <div>
          <img src={Logo8} alt="Logo2" id="Logo8" />
        </div>
        <Input
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
          radius="lg"
          style={{ width: "70%", margin: "auto", marginBottom: "20px" }}
          id="input"
        />

        <Table className="Table">
          <Table.Thead>
            <Table.Tr className="table__header">
              <Table.Th
                onClick={() => handleSort("id")}
                className="Table_Header"
              >
                ID
              </Table.Th>
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
              <Table.Th>Update / Delete</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </div>
    </>
  );
}

export default Test;