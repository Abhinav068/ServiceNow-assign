const express = require('express');
const { connection } = require('./config/db');
const { UserModel } = require('./models/user.Model');
const app = express();
require('dotenv').config();

const port = process.env.port;

app.use(express.json());


app.get('/', async (req, res) => {
    res.sendFile(__dirname + '/view/index.html');
})

app.post('/user', async (req, res) => {
    try {
        const { firstName, lastName, department } = req.body;
        const user = await UserModel({ firstName, lastName, department });
        await user.save();
        res.status(200).send({ msg: 'User Successfully registered.' });

    } catch (error) {
        res.status(500).send({ msg: 'Something went wrong' });
    }
})

app.get('/users', async (req, res) => {
    try {
        const users = await UserModel.find();
        res.status(200).send(users);

    } catch (error) {
        res.status(500).send({ msg: 'Something went wrong' });

    }
})
app.patch('/user/:ID', async (req, res) => {
    try {
        const ID = req.params.ID;
        const payload = req.body;
        const doc = await UserModel.findOneAndUpdate({ ID }, { ...payload }, { new: true });
        res.status(200).send(doc);

    } catch (error) {
        console.log(error);
        res.status(500).send({ msg: 'Something went wrong' });

    }
})
app.delete('/user/:ID', async (req, res) => {
    try {
        const ID = req.params.ID;
        const doc = await UserModel.findOneAndDelete({ ID });
        res.send({ doc, msg: "The document has been deleted." });

    } catch (error) {
        res.status(500).send({ msg: 'Something went wrong' });

    }
})


app.listen(port, async () => {
    await connection;
    console.log(`Backend Running at ${port}`);
})