import React, {useState, useEffect} from "react";
import Header from "./Header"
import Add from "./Add";
import RecordEntry from "./RecordEntry";
import RecordForm from "./RecordForm";

function App() {
  const [recordsList, setRecordsList] = useState([]);
  const [visibillity, setVisibillity] = useState(false);
  const [editedRecord, setEditedRecord] = useState({
    exone: "",
    extwo: "",
    repone: "",
    reptwo: "",
    score: ""
  });

  useEffect(() => {
    fetch("api/records")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      setRecordsList(data);
    })
    .catch((err) => {
      console.log(err);
    })
  }, [])

  function changeVisibillity() {
    setVisibillity(prevValue => !prevValue);
  }

  function submitRecord(newRecord) {
    fetch("http://localhost:3000/api/records", {
      method: "POST",
      headers: {
      'Content-Type': 'application/json'
      },
      body: JSON.stringify(newRecord)
    }).then((res) => {
      return res.json();
    })
    .then((data) => {
      setRecordsList(data);
    })
    .catch((err) => {
      console.log(err);
    })

    changeVisibillity();
  }

  function deleteRecord(deletedRecord) {
    const url = "http://localhost:3000/api/records/" + deletedRecord;

    fetch(url, {
      method: "DELETE"
    }).then((res) => {
      return res.json();
    })
    .then((data) => {
      setRecordsList(data);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  function editRecord(editRecord) {
    changeVisibillity()
    setEditedRecord(editRecord);
  }

  return (
    <div className="text-center m-0">
      <Header />
      {visibillity && <RecordForm onAdd={submitRecord} edit={editedRecord}/>}
      <Add onAdd={changeVisibillity}/>

      {recordsList.map((entry, index) => {
        return <RecordEntry
        key={index}
        repone={entry.repone}
        exone={entry.exone}
        reptwo={entry.reptwo}
        extwo={entry.extwo}
        score={entry.score}
        onDelete={deleteRecord}
        onEdit={editRecord}/>
      })}
    </div>
  )
}

export default App;
