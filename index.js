const express = require('express');
const app = express()
const PORT = 3000;
const cors = require('cors')
const appendRoute = require('./Routes')

app.use(cors())
app.listen(PORT, ()=>{
    console.log(`Server is running at ${PORT}`)
})

appendRoute(app);