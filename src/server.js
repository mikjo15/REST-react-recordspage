const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const { v4: uuidv4 } = require('uuid');

const app = express();
const mysqlConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "6VV1@7uPNdO",
  database: "RecordsDB",
  multipleStatements: true
});

mysqlConnection.connect((err) => {
  if (!err) {
    console.log("Connected");
  } else {
    console.log(err);
  }
})

app.use(bodyParser.json());

app.get("/api/records/", (req, res) => {
  mysqlConnection.query("SELECT * FROM records", (err, rows, field) => {
    res.send(rows);
  })
})

//Make id timestamp and sort by that
app.post("/api/records/", (req, res) => {
  const newRecord = req.body;

  mysqlConnection.query("INSERT INTO records VALUES (?, ?, ?, ?, ?, ?)", [uuidv4(), newRecord.exone, newRecord.extwo, newRecord.repone, newRecord.reptwo, newRecord.score], (err, rows, field) => {
    if(!err) {
        res.send("Record added");
    } else {
      console.log(err);
    }
  })
})

app.delete("/api/records/", (req, res) => {
  mysqlConnection.query("DELETE FROM records", (err, rows, field) => {
    if (!err) {
      console.log("All records deleted!");
    } else {
      console.log(err);
    }
  })
})

app.get("/api/records/:exercise", (req, res) => {
  const searchedExercise = req.params.exercise;

  mysqlConnection.query("SELECT * FROM records WHERE exone = ?", [searchedExercise], (err, rows, field) => {
    if(rows.length === 0) {
      mysqlConnection.query("SELECT * FROM records WHERE extwo = ?", [searchedExercise], (err2, rows2, field2) => {
        if (rows2.length === 0) {
          res.send("No such record found");
        } else if (!err2) {
          res.send(rows2);
        } else {
          res.send(err2)
        }
      })
    } else if (!err) {
      res.send(rows);
    } else {
      res.send(err)
    }
  })
})

app.put("/api/records/:exercise", (req, res) => {
  const ex = req.body;
  const exercise = req.params.exercise;
  var sql = `SET @Exone = ?; SET @Repone = ?; SET @Reptwo = ?; SET @Score = ?; CALL ExerciseEdit(@Exone, @Repone, @Reptwo, @Score);`
  mysqlConnection.query(sql, [exercise, ex.repone, ex.reptwo, ex.score], (err, rows, field) => {
    if (!err) {
      res.send("Updated successfully!")
    } else {
      res.send(err);
    }
  })
})

app.patch("/api/records/:exercise", (req, res) => {
  const exercise = req.params.exercise;
  var fieldsToUpdate = [];

  for (const field of req.body) {
         fieldsToUpdate[field.name] = field.value;
       };

  const sql = "UPDATE Records SET repone = 5 WHERE exone = `v-ups`";

  mysqlConnection.query(sql, (err, rows) => {
    if(!err) {
      res.send("Updated successfully");
    } else {
      res.send(err);
    }
  })
})

app.listen(5000, () => console.log("Server listening on PORT 5000"))
