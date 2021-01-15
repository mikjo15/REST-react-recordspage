import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
delete: {
  backgroundColor: "#d89216",
  border: "none",
  position: "relative",
  bottom: "7.2rem",
  left: "20rem",
  padding: "0"
},
edit: {
  backgroundColor: "#d89216",
  border: "none",
  position: "relative",
  bottom: "7.2rem",
  left: "15rem",
  padding: "0"
},
icon: {
  color: "#2c061f",
}
});

// Make the score another format - seconds:milliseconds
function RecordEntry(props) {
  const Entry = {
    repone: props.repone,
    exone: props.exone,
    reptwo: props.reptwo,
    extwo: props.extwo,
    score: props.score
  }

  function onDelete() {
    const deleteItem = props.exone;

    props.onDelete(deleteItem);
  }

  function onEdit() {
    props.onEdit(Entry);
  }

  const classes = useStyles();
  return (
    <div className="bg-entry m-4 py-3 px-5 rounded-square text-left">
      <h5>{props.repone} {props.exone}</h5>
      <h5>{props.reptwo} {props.extwo}</h5>
      <h1>{props.score}</h1>
      <button className={classes.delete} onClick={onDelete}>
      <DeleteIcon fontSize="large"/>
      </button>
      <button className={classes.edit} onClick={onEdit}>
      <EditIcon fontSize="large"/>
      </button>
    </div>
  )
}

export default RecordEntry;
