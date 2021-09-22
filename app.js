const express = require('express');
const mysql = require('mysql');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'billgate'
});

connection.connect(function(err){
  (err) ? console.log(err) : console.log(connection);
});

app.get('/api/prepare', (req, res) => {
  var sql = "SELECT * FROM qlprepare";
  connection.query(sql, function(err, results) {
    if (err) throw err;
    res.json({prepare: results});
  });
});

app.post('/api/insertprepare', function(req, res) {
  var sql = "INSERT "
          + "INTO qlprepare(id,ten,namsinh,hocphi) "
          + "VALUES('"
          +   req.body.id+ "','" 
          +   req.body.ten + "','" 
          +   req.body.namsinh+"','"
          +   req.body.hocphi + "')" ;
  connection.query(sql, function (err, results) {
    if(err) throw err;
    res.json({prepare: results});
  });
});

app.post('/api/deleteprepare', (req, res) => {
  var sql = "DELETE FROM qlprepare WHERE id = '"+req.body.id+"'";
  connection.query(sql, function(err, results) {
    if (err) throw err;
    res.json({prepare: results});
  });
});

app.post('/api/updateprepare', function(req, res) {
  var sql = "UPDATE qlprepare "
          + "SET "
          + "ten = '"+req.body.ten+"',"
          + "hocphi = '"+req.body.hocphi+"'"
          + "WHERE id = '"+req.body.id+"'";
  connection.query(sql, function (err, results) {
    if(err) throw err;
    res.json({prepare: results});
  });
});

app.get('/api/learning', (req, res) => {
  var sql1 = "SELECT * FROM qllearning";
  connection.query(sql1, function(err, results) {
    if (err) throw err;
    res.json({learning: results});
  });
});

app.post('/api/insertlearning', function(req, res) {
  var sql1 = "INSERT "
          + "INTO qllearning(id,ten,namsinh,diemhs1,diemhs2,diemtb) "
          + "VALUES('"
          +   req.body.id+ "','" 
          +   req.body.ten + "','" 
          +   req.body.namsinh+"','"
          +   req.body.diemhs1 + "','" 
          +   req.body.diemhs2 + "','"
          +   req.body.diemtb + "')";
  connection.query(sql1, function (err, results) {
    if(err) throw err;
    res.json({learning: results});
  });
});

app.post('/api/updatelearning', function(req, res) {
  var sql = "UPDATE qllearning "
          + "SET "
          + "ten = '"+req.body.ten+"',"
          + "diemhs1 = '"+req.body.diemhs1+"',"
          + "diemhs2 = '"+req.body.diemhs2+"',"
          + "diemtb = '"+req.body.diemtb+"'"
          + "WHERE id = '"+req.body.id+"'";
  connection.query(sql, function (err, results) {
    if(err) throw err;
    res.json({learning: results});
  });
});

app.post('/api/deletelearning', (req, res) => {
  var sql1 = "DELETE FROM qllearning WHERE id = '"+req.body.id+"'";
  connection.query(sql1, function(err, results) {
    if (err) throw err;
    res.json({learning: results});
  });
});

app.get('/api/learned', (req, res) => {
  var sql2 = "SELECT * FROM qllearned";
  connection.query(sql2, function(err, results) {
    if (err) throw err;
    res.json({learned: results});
  });
});

app.post('/api/insertlearned', function(req, res) {
  var sql2 = "INSERT "
          + "INTO qllearned(id,ten,namsinh,ketqua) "
          + "VALUES('"
          +   req.body.id+ "','" 
          +   req.body.ten + "','" 
          +   req.body.namsinh+"','"
          +   req.body.ketqua + "')";
  connection.query(sql2, function (err, results) {
    if(err) throw err;
    res.json({learned: results});
  });
});

app.post('/api/deletelearned', (req, res) => {
  var sql2 = "DELETE FROM qllearned WHERE id = '"+req.body.id+"'";
  connection.query(sql2, function(err, results) {
    if (err) throw err;
    res.json({learned: results});
  });
});

app.post('/api/updatelearned', function(req, res) {
  var sql = "UPDATE qllearned "
          + "SET "
          + "ten = '"+req.body.ten+"',"
          + "ketqua = '"+req.body.ketqua+"'"
          + "WHERE id = '"+req.body.id+"'";
  connection.query(sql, function (err, results) {
    if(err) throw err;
    res.json({learned: results});
  });
});
app.listen(4000, () => console.log('App listening on port 4000'));