import React, {useState, useEffect} from "react";
import Header from "./Header"
import Add from "./Add";
import RecordEntry from "./RecordEntry";

function App() {
  const [recordsList, setRecordsList] = useState([]);

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
  }

  return (
    <div className="text-center m-0">
      <Header />
      <Add onAdd={submitRecord}/>

      {recordsList.map((entry, index) => {
        return <RecordEntry
        key={index}
        repone={entry.repone}
        exone={entry.exone}
        reptwo={entry.reptwo}
        extwo={entry.extwo}
        score={entry.score}/>
      })}
    </div>
  )
}

export default App;
