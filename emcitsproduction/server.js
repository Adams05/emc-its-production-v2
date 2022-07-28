const express = require('express');
const path = require('path');
const cors = require('cors');
const { router } = require('express');
const { default: axios } = require('axios');
const dotenv = require('dotenv').config();
const app = express();

app.use(cors());

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

//Parse data
app.use(express.json());
app.use(express.urlencoded({extended: true}));

router.post('/post', async (req, res) => {
  const {token} = req.body;

  await axios.post( `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.REACT_APP_RECAPTCHA_SECRET_KEY}&response=${token}`)

  if(res.status(200)) {
    res.send("Human")
  }else {
    res.send("Robot");
  }
});

app.listen(9000, () => `Server started on Port 9000`);
