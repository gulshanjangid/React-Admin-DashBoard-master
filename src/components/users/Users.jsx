import React, { useContext, useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TablePagination, TableSortLabel, TextField } from "@mui/material";
import { Context } from "../../context/contextApi";

export default function Users() {
  const [ageOrderDirection, setAgeOrderDirection] = useState("asc");
  const [serialOrderDirection, setSerialOrderDirection] = useState("asc");
  const [pages, setPages] = useState([5, 10, 15]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchQuery, setSearchQuery] = useState("");
  const [rows, setRows] = useState([
    { no: "1", name: "Aarav", age: "25", role: "Front-end dev", gender: "M" },
    { no: "2", name: "Bhavya", age: "27", role: "Back-end dev", gender: "M" },
    { no: "3", name: "Charvi", age: "29", role: "UI/UX Designer", gender: "F" },
    { no: "4", name: "Dev", age: "26", role: "Full-stack dev", gender: "M" },
    { no: "5", name: "Esha", age: "24", role: "Front-end dev", gender: "F" },
    { no: "6", name: "Farhan", age: "30", role: "Back-end dev", gender: "M" },
    { no: "7", name: "Gauri", age: "28", role: "Data Scientist", gender: "F" },
    { no: "8", name: "Harsh", age: "32", role: "DevOps Engineer", gender: "M" },
    { no: "9", name: "Abhishek", age: "34", role: "QA Engineer", gender: "M" },
    {
      no: "10",
      name: "Jatin",
      age: "31",
      role: "System Administrator",
      gender: "M",
    },
    {
      no: "11",
      name: "Aditya",
      age: "35",
      role: "Chief Technology Officer (CTO)",
      gender: "M",
    },
    {
      no: "12",
      name: "Lakshmi",
      age: "34",
      role: "Database Administrator",
      gender: "F",
    },
    {
      no: "13",
      name: "Gopi",
      age: "36",
      role: "Chief Information Officer (CIO)",
      gender: "M",
    },
    {
      no: "14",
      name: "Naina",
      age: "28",
      role: "Cloud Architect",
      gender: "F",
    },
    {
      no: "15",
      name: "Omkar",
      age: "26",
      role: "Mobile App Developer",
      gender: "M",
    },
    {
      no: "16",
      name: "Priya",
      age: "30",
      role: "Business Analyst",
      gender: "F",
    },
    {
      no: "17",
      name: "Rahul",
      age: "27",
      role: "Software Engineer",
      gender: "M",
    },
    {
      no: "18",
      name: "Sneha",
      age: "25",
      role: "Technical Writer",
      gender: "F",
    },
    {
      no: "19",
      name: "Tanmay",
      age: "28",
      role: "Product Manager",
      gender: "M",
    },
    {
      no: "20",
      name: "Usha",
      age: "26",
      role: "IT Support Specialist",
      gender: "F",
    },
    {
      no: "21",
      name: "Abhay",
      age: "37",
      role: "Chief Data Officer (CDO)",
      gender: "M",
    },
    {
      no: "22",
      name: "Yash",
      age: "30",
      role: "Machine Learning Engineer",
      gender: "M",
    },
    { no: "23", name: "Zara", age: "27", role: "AI Researcher", gender: "F" },
    {
      no: "24",
      name: "Arpit",
      age: "38",
      role: "Chief Security Officer (CSO)",
      gender: "M",
    },
    {
      no: "25",
      name: "Abhirup",
      age: "39",
      role: "Chief Operating Officer (COO)",
      gender: "M",
    },
  ]);

  const { themeMode } = useContext(Context);

  const sortByAge = (arr, orderBy) => {
    switch (orderBy) {
      case "asc":
      default:
        return arr.sort((a, b) => (a.age > b.age ? 1 : b.age > a.age ? -1 : 0));
      case "desc":
        return arr.sort((a, b) => (a.age < b.age ? 1 : b.age < a.age ? -1 : 0));
    }
  };

  const sortBySerial = (arr, orderBy) => {
    switch (orderBy) {
      case "asc":
        // console.log(orderBy);
        return arr.sort((a, b) => a.no - b.no);

      case "desc":
        // console.log(orderBy);
        return arr.sort((a, b) => b.no - a.no);

      default:
        break;
    }
  };

  const handleSortAge = () => {
    setRows(sortByAge(rows, ageOrderDirection));
    setAgeOrderDirection(ageOrderDirection === "asc" ? "desc" : "asc");
  };

  const handleSortSerialNo = () => {
    setRows(sortBySerial(rows, serialOrderDirection));
    // console.log(sortBySerial(rows, serialOrderDirection));
    setSerialOrderDirection(serialOrderDirection === "asc" ? "desc" : "asc");
  };

  const rowsAfterPagingAndFiltering = () => {
    if (searchQuery === "") {
      return rows.slice(page * rowsPerPage, (page + 1) * rowsPerPage);
    } else {
      return rows
        .filter((row) => {
          return row.name.toLowerCase().includes(searchQuery.toLowerCase());
        })
        .slice(page * rowsPerPage, (page + 1) * rowsPerPage);
    }
  };

  return (
    <>
      <TextField
        label="Search"
        variant="outlined"
        value={searchQuery}
        focused
        InputProps={{
          style: {
            color: themeMode === "dark" ? "white" : "black",
          },
        }}
        onChange={(e) => setSearchQuery(e.target.value)}
        fullWidth
        style={{ marginBottom: 16, color: "white" }}
      />

      <TableContainer component={Paper} className={`dark:bg-[#313131]`}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableSortLabel
                onClick={handleSortSerialNo}
                active={true}
                direction={serialOrderDirection}
                style={{
                  color: themeMode === "dark" ? "white" : "black",
                }}
              >
                <TableCell
                  style={{ color: themeMode === "dark" ? "white" : "black" }}
                >
                  S.No
                </TableCell>
              </TableSortLabel>
              <TableCell
                style={{ color: themeMode === "dark" ? "white" : "black" }}
              >
                Name
              </TableCell>
              <TableSortLabel
                onClick={handleSortAge}
                active={true}
                direction={ageOrderDirection}
              >
                <TableCell
                  style={{ color: themeMode === "dark" ? "white" : "black" }}
                >
                  Age
                </TableCell>
              </TableSortLabel>
              <TableCell
                style={{ color: themeMode === "dark" ? "white" : "black" }}
              >
                Role
              </TableCell>
              <TableCell
                style={{ color: themeMode === "dark" ? "white" : "black" }}
              >
                Gender
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {rowsAfterPagingAndFiltering().map((row) => (
              <TableRow key={row.no}>
                <TableCell
                  style={{ color: themeMode === "dark" ? "white" : "black" }}
                >
                  {row.no}
                </TableCell>
                <TableCell
                  align="left"
                  style={{ color: themeMode === "dark" ? "white" : "black" }}
                >
                  {row.name}
                </TableCell>
                <TableCell
                  align="left"
                  style={{ color: themeMode === "dark" ? "white" : "black" }}
                >
                  {row.age}
                </TableCell>
                <TableCell
                  align="left"
                  style={{ color: themeMode === "dark" ? "white" : "black" }}
                >
                  {row.role}
                </TableCell>
                <TableCell
                  align="left"
                  style={{ color: themeMode === "dark" ? "white" : "black" }}
                >
                  {row.gender}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <TablePagination
          style={{ color: themeMode === "dark" ? "white" : "black" }}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={pages}
          page={page}
          count={
            searchQuery === ""
              ? rows.length
              : rows.filter((row) =>
                  row.name.toLowerCase().includes(searchQuery.toLowerCase())
                ).length
          }
          onPageChange={(e, newPage) => setPage(newPage)}
          onRowsPerPageChange={(e) => {
            setRowsPerPage(e.target.value);
          }}
        />
      </TableContainer>
    </>
  );
}
