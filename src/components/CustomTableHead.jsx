import React from "react";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Checkbox from '@material-ui/core/Checkbox';

const headCells = [
  { id: "info", numeric: false, label: "Basic Info" },
  { id: "date", numeric: false, label: "Subscription Date" },
  { id: "location", numeric: false, label: "Location" },
  { id: "status", numeric: false, label: "Status" }
];

function CustomTableHead(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount } = props;

  return (
    <TableHead>
      <TableRow style={{ borderBottom: "1px solid gray" }}>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ "aria-label": "select all desserts" }}
          />
        </TableCell>
        {headCells.map(headCell => (
          <TableCell
            key={headCell.id}
            align="left"
            sortDirection={orderBy === headCell.id ? order : false}
            style={{ fontSize: '16px', fontWeight:'600', borderRight: "1px solid #f1f1f1", padding: "20px 10px" }}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              // onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

export default CustomTableHead;
