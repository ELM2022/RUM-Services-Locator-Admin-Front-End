const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.use('/Login_Screen', (req, res) => {
    res.send({
        token: 'test123'
    });
});

app.listen(8080, () => console.log('API is running on http://localhost:8080/Login_Screen'));