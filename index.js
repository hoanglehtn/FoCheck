const express = require('express');
const app = express();
const routesAppend = require("./routes/")
const passport = require ('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const bodyParser = require("body-parser")

const PORT = 2000;
/** init app */
const cors = require('cors')
app.use(cors())
app.use(bodyParser.json());
app.listen(PORT,()=>{
    console.log(`Server running at ${PORT}`);
})
routesAppend(app)

