const LoginRoute = require('./LoginRoute')
module.exports = routesAppend;
function routesAppend(app){

app.use("/login",LoginRoute)




}
