var express = require('express');
var cors = require('cors');
require('dotenv').config()

const multer  = require('multer')
var storage = multer.memoryStorage();
var upload = multer({ storage: storage });
var app = express();

app.use(cors());

app.use(express.static("public"));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


app.post('/api/fileanalyse', upload.single('upfile'), function (req, res, next) {
  res.json({"name":req.file.originalname,"type":req.file.mimetype,"size":req.file.size})
})

const port = process.env.PORT || 3001;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
