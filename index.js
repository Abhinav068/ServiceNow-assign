const express = require('express');
const app = express();

app.use(express.json());

app.get('/', async (req, res) => {
    res.send('serviceNow api');
})








app.listen(port, () => {
    console.log(`Backend Running at ${port}`);
})