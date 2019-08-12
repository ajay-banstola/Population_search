import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  table: {
    minWidth: 650
  }
}));

export default function SimpleTable({
  datavalue,
  valueold,
  valueyoung,
  valuechild
}) {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Population Type</TableCell>
            <TableCell>Number</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Old</TableCell>
            <TableCell>{valueold}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Young</TableCell>
            <TableCell>{valueyoung}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Child</TableCell>
            <TableCell>{valuechild}</TableCell>

            {/* {datavalue[0][0][0]} */}
          </TableRow>
        </TableBody>
      </Table>
    </Paper>
  );
}
