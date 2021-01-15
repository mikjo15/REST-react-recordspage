import React from "react";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';

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

function Add(props) {
  const classes = useStyles();

  function addClicked() {
    props.onAdd();
  }

  return (<div>
    <Fab onClick={addClicked} className={classes.root}>
      <AddIcon className={classes.icon}/>
    </Fab>
  </div>
)
}

export default Add;
