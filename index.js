const express = require('express');
const app = express();
const routesAppend = require("./routes/")
const PORT = 2000;
/** init app */
const cors = require('cors')
app.use(cors());
app.listen(PORT,()=>{
    console.log(`Server running at ${PORT}`);
})
routesAppend(app)