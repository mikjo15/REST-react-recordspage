import React, {useState, useEffect} from "react";
import Header from "./Header"
import Add from "./Add";
import RecordEntry from "./RecordEntry";
import RecordForm from "./RecordForm";

function App() {
  const [recordsList, setRecordsList] = useState([]);
  const [visibillity, setVisibillity] = useState(false);
  const [onSubmit, setOnSubmit] = useState(() => submitRecord);
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

  function submitEdit(record) {
    const url = "http://localhost:3000/api/records/" + record.exone;

    fetch(url, {
      method: "PUT",
      headers: {
      'Content-Type': 'application/json'
      },
      body: JSON.stringify(record)
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
    setOnSubmit(() => submitEdit);
    setEditedRecord(editRecord);
  }

  return (
    <div className="text-center m-0">
      <Header />
      {visibillity && <RecordForm onAdd={onSubmit} edit={editedRecord}/>}
      <Add onAdd={editRecord}/>

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
