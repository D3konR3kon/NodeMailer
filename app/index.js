const express = require('express');
const fileupload= require('express-fileupload')
const app = express();
const cors = require('cors')
const dotenv = require('dotenv')
const initRoutes = require('./routes/mailer.routes')


dotenv.config()

app.use(cors())
app.use(fileupload())

app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.use('/v0/mail',initRoutes)

app.get('/', (req, res, next) => {
    res.send('<h1>Hello world<h1>');
})

app.listen(process.env.PORT || 8000, () => {
    console.info(`Server listen on port ${process.env.PORT || 8000}`);
})