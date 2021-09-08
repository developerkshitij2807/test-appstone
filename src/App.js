import React, { useState } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function App() {
  const classes = useStyles();

  const handleUpClick = (row) => {
    const index = data.indexOf(row);
    if (index !== 0) {
      let newArr = [...data];
      const tempData = data[index];

      newArr[index] = data[index - 1];
      newArr[index - 1] = tempData;

      setdata(newArr);
      console.log(newArr);
    }
  };
  const handleDownClick = (row) => {
    const index = data.indexOf(row);
    if (index !== data.length - 1) {
      let newArr = [...data];
      const tempData = data[index];

      newArr[index] = newArr[index + 1];
      newArr[index + 1] = tempData;

      setdata(newArr);
      console.log(newArr);
    }
  };
  let [data, setdata] = useState([
    { firstName: "ABC", lastName: "XYZ", id: 1 },
    { firstName: "ABC-1", lastName: "XYZ", id: 2 },
    { firstName: "ABC-2", lastName: "XYZ", id: 3 },
    { firstName: "ABC-3", lastName: "XYZ", id: 4 },
    { firstName: "ABC-4", lastName: "XYZ", id: 5 },
    { firstName: "ABC-5", lastName: "XYZ", id: 6 },
    { firstName: "ABC-6", lastName: "XYZ", id: 7 },
    { firstName: "ABC-7", lastName: "XYZ", id: 8 },
    { firstName: "ABC-8", lastName: "XYZ", id: 9 },
    { firstName: "ABC-9", lastName: "XYZ", id: 10 },
  ]);

  return (
    <Container>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>First Name</TableCell>
              <TableCell align="right">Last Name</TableCell>
              <TableCell align="right">Order</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.firstName}>
                <TableCell component="th" scope="row">
                  {row.firstName}
                </TableCell>
                <TableCell align="right">{row.lastName}</TableCell>

                <TableCell align="right">
                  <ArrowUpwardIcon onClick={() => handleUpClick(row)} />
                  <ArrowDownwardIcon onClick={() => handleDownClick(row)} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
