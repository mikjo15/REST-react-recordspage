import React from "react";

function RecordEntry(props) {
  return (
    <div className="bg-entry m-4 py-3 px-5 rounded-square text-left">
      <h5>{props.repone} {props.exone}</h5>
      <h5>{props.reptwo} {props.extwo}</h5>
      <h1>{props.score}</h1>
    </div>
  )
}

export default RecordEntry;
