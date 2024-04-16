const express = require('express');
const { connection } = require('./config/db');
const { UserModel } = require('./models/user.Model');
const app = express();
require('dotenv').config();

const port = process.env.port;

app.use(express.json());


app.get('/', async (req, res) => {
    res.send('serviceNow api');
})

app.post('/', async (req, res) => {
    try {
        const { ID, FirstName, LastName, Department } = req.body;
        const user = await UserModel({ ID, FirstName, LastName, Department });
        await user.save();
        res.send({ msg: 'User Successfully registered.' });
        
    } catch (error) {
        res.send({msg:'Something went wrong'});
    }
})

app.get('/users',async (req,res) => {
    try {
        const users = await UserModel.find();
        res.send({users});
        
    } catch (error) {
        res.send({msg:'Something went wrong'});
        
    }
})




app.listen(port, async () => {
    await connection;
    console.log(`Backend Running at ${port}`);
})