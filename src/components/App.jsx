import React, {useState, useEffect} from "react";
import Header from "./Header"
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

  return (
    <div className="text-center m-0">
      <Header />

      {recordsList.map((entry, index) => {
        return <RecordEntry
        key={index}
        repone={entry.repone}
        exone={entry.exone}
        reptwo={entry.reptwo}
        extwo={entry.extwo}
        score={entry.score} />
      })}
    </div>
  )
}

export default App;
