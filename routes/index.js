const LoginRoute = require('./LoginRoute')
const product = require("./product")
module.exports = routesAppend;
function routesAppend(app){

app.use("/login",LoginRoute)
app.use("/product",product)


}
