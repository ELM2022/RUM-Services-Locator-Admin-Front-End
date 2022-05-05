const express = require('express');
const cors = require('cors');
const path = require('path');
// require('dotenv').config();
const app = express();
const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, 'public');

app.use(cors());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'build')));
}

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// app.use(express.static(publicPath));
// app.get('*', function (req, res) {
//   res.sendFile(path.join(publicPath, 'index.html'));
// });

app.listen(port, () => console.log(`Server running on port ${port}.`));