import React from "react";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';

function Add(props) {
  const classes = useStyles();

  const Entry = {
    repone: "",
    exone: "",
    reptwo: "",
    extwo: "",
    score: ""
  }

  function addClicked() {
    props.onAdd(Entry);
  }

  return (<div>
    <Fab onClick={addClicked} className={classes.root}>
      <AddIcon className={classes.icon}/>
    </Fab>
  </div>
)
}

const useStyles = makeStyles({
root: {
  background: "#2c061f",
  position: "fixed",
  right: "30px",
  bottom: "30px",
  zIndex: "1"
},
icon: {
  color: "#d89216"
}
});

export default Add;
