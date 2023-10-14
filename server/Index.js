const dotenv = require('dotenv')
const express = require('express');
const cors = require('cors');
const colors = require('colors')
const app = express();

dotenv.config({path : './config.env'})

app.use(express.json());
app.use(cors());

require('./DataBase/Connection')
app.use('/api' , require('./Router/Loginroute'));
app.use('/api' , require('./Router/Registerroute'));


const PORT = process.env.PORT;

app.listen(PORT , (req , res) =>{
    console.log(`connect in the port ${PORT}`);
});
