const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const port = 5000;

app.get('/', (req, res) => {
    res.send('WOW. I am Excited to learn Node and express with nodemon. automatic restart');
});

app.listen(port, () => {
    console.log('Listening to port ', port);
})