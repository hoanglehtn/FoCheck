const LoginRoute = require('./LoginRoute')

function routesAppend(app){

app.use("/login",LoginRoute)




}
module.exports = routesAppend;