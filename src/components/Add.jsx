import React from "react";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
root: {
  background: "#2c061f",
  position: "fixed",
  right: "30px",
  bottom: "30px"
},
icon: {
  color: "#d89216"
}
});

function Add() {
  const classes = useStyles();

  function addClicked() {
    console.log("Clicked");
  }

  return (<div>
    <Fab onClick={addClicked} className={classes.root}>
      <AddIcon className={classes.icon}/>
    </Fab>

    <form className="bg-entry m-4 py-3 px-5 rounded-square text-left form-group">
      <div className="row p-2">
        <input className="rounded-square mr-2" placeholder="Exercise one"/>
        <input className="rounded-square w-25" placeholder="Reps"/>
      </div>
      <div className="row p-2">
        <input className="rounded-square mr-2" placeholder="Exercise two"/>
        <input className="rounded-square w-25" placeholder="Reps"/>
      </div>
      <div className="row p-2">
        <input className="rounded-square mr-2" placeholder="Score 00:00:00"/>
        <button className="rounded-square w-25 bg-header text-header">Submit</button>
      </div>
    </form>
  </div>
)
}

export default Add;
