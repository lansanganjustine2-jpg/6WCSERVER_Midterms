//Name: Lansangan, Justine O.
//Section: WD-301

var express = require('express');
var app = express();

app.get('/', function (req, res) {
  console.log("There is GET request for the homepage!");
  res.send('Here is the GET Method!');
});

app.post('/', function (req, res) {
  console.log("A POST request for the homepage is accessed.");
  res.send('Here is the POST Method');
});

app.get('/list_user', function (req, res) {
  console.log("Got a GET request for /list_user");
  res.send('This is Page Listing');
});

// NEW ROUTE: MY PROFILE
app.get('/profile', function (req, res) {
  res.send(`
    <h1>Justine's Profile</h1>
    <p><strong>Name:</strong> Justine O. Lansangan</p>
    <p><strong>Course:</strong> Bachelor of Science in Information Technology Area Specialization in Web Development</p>
    <p><strong>Section:</strong> WD-301</p>
  `);
});

app.get('/ab*cd', function (req, res) {
  console.log("Got a GET request for /ab*cd");
  res.send('Pattern Match Page');
});

var server = app.listen(4002, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port);
});