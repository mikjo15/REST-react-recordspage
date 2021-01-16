import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
delete: {
  backgroundColor: "#d89216",
  border: "none",
  position: "absolute",
  top: "1.5rem",
  right: "1.5rem"
},
edit: {
  backgroundColor: "#d89216",
  border: "none",
  position: "absolute",
  top: "1.5rem",
  right: "4rem"
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
    <div className="card m-4 mx-md-auto py-3 px-5 text-left">
      <h4 className="small-text">{props.repone} {props.exone}</h4>
      <h4 className="small-text">{props.reptwo} {props.extwo}</h4>
      <h1 className="large-text">{props.score}</h1>

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
