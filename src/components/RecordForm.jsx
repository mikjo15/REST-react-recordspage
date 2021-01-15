import React, { useState } from "react";

function RecordForm(props) {
  const [newRecord, setNewRecord] = useState({
    exone: props.edit.exone || "",
    extwo: props.edit.extwo || "",
    repone: props.edit.repone || "",
    reptwo: props.edit.reptwo || "",
    score: props.edit.score || ""
  });

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

  function addRecord(event) {
    props.onAdd(newRecord);
    event.preventDefault();

    setNewRecord({
      exone: "",
      extwo: "",
      repone: "",
      reptwo: "",
      score: ""
    })
  }

  return (
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
  )
}

export default RecordForm;
