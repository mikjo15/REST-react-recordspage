import React, {useState} from "react";
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
  const [newRecord, setNewRecord] = useState({
    exone: "",
    extwo: "",
    repone: "",
    reptwo: "",
    score: ""
  });
  const [visibility, setVisibility] = useState(false)

  function onChange(event) {
    const { name, value } = event.target;

    setNewRecord(prevValue => {
      if(name === "repone") {
        return {
          id: prevValue.id,
          repone: value,
          exone: prevValue.exone,
          reptwo: prevValue.reptwo,
          extwo: prevValue.extwo,
          score: prevValue.score
        }
      } else if(name === "exone") {
        return {
          id: prevValue.id,
          repone: prevValue.repone,
          exone: value,
          reptwo: prevValue.reptwo,
          extwo: prevValue.extwo,
          score: prevValue.score
        }
      } else if(name === "reptwo") {
        return {
          id: prevValue.id,
          repone: prevValue.repone,
          exone: prevValue.exone,
          reptwo: value,
          extwo: prevValue.extwo,
          score: prevValue.score
        }
      } else if(name === "extwo") {
        return {
          id: prevValue.id,
          repone: prevValue.repone,
          exone: prevValue.exone,
          reptwo: prevValue.reptwo,
          extwo: value,
          score: prevValue.score
        }
      } else if(name === "score") {
        return {
          id: prevValue.id,
          repone: prevValue.repone,
          exone: prevValue.exone,
          reptwo: prevValue.reptwo,
          extwo: prevValue.extwo,
          score: value
        }
      }
    })
  };
  function addClicked() {
    setVisibility(prevValue => !prevValue);
  }
  function addRecord(event) {
    props.onAdd(newRecord);
    event.preventDefault();

    setVisibility(false);
    setNewRecord({
      exone: "",
      extwo: "",
      repone: "",
      reptwo: "",
      score: ""
    })
  }

  return (<div>
    <Fab onClick={addClicked} className={classes.root}>
      <AddIcon className={classes.icon}/>
    </Fab>

    {visibility &&
    <form className="bg-entry m-4 py-3 px-5 rounded-square text-left form-group">
      <div className="row p-2">
        <input onChange={onChange} className="rounded-square mr-2" placeholder="Exercise one" value={newRecord.exone} name="exone"/>
        <input onChange={onChange} className="rounded-square w-25" placeholder="Reps" value={newRecord.repone} name="repone"/>
      </div>
      <div className="row p-2">
        <input onChange={onChange} className="rounded-square mr-2" placeholder="Exercise two" value={newRecord.extwo} name="extwo"/>
        <input onChange={onChange} className="rounded-square w-25" placeholder="Reps" value={newRecord.reptwo} name="reptwo"/>
      </div>
      <div className="row p-2">
        <input onChange={onChange} className="rounded-square mr-2" placeholder="Score 00:00:00" value={newRecord.score} name="score"/>
        <button onClick={addRecord} className="rounded-square w-25 bg-header text-header">Submit</button>
      </div>
    </form>
    }

  </div>
)
}

export default Add;
