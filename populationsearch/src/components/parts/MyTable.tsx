import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

interface Props {
  rows: Array<{
    id: string;
    Country: string;
    City: string;
    Age: string;
    Male_Population: number;
    Female_Population: number;
  }>;
}

export default function SimpleTable({ rows }: Props) {
  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Country</TableCell>
            <TableCell>City</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Male Population</TableCell>
            <TableCell>Female Population</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.Country}
              </TableCell>
              <TableCell>{row.City}</TableCell>
              <TableCell>{row.Age}</TableCell>
              <TableCell>{row.Male_Population}</TableCell>
              <TableCell>{row.Female_Population}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
