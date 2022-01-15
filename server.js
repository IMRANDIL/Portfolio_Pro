const express = require('express');
require('dotenv').config();
const router = require('./route/ContactRoute')

const cors = require('cors');
const path = require('path');

const app = express();


//creating the middlewares..
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use('/', router)


if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.send(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`server is running on Port ${PORT}`);
})