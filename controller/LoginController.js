const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const bodyParser = require("body-parser")

class LoginController {
    /**
     * Handle auth request and return respone
     * @param {any} require
     * @param {any} response
     */
    handleAuthorization(req, res){
        
        console.log("recived auth request");
        // get header authorization include end decode in shema base64
        let [schema, endcode] = req.headers.authorization.split(" ");
        let buff = Buffer.from(endcode,"base64")
        let decode = buff.toString("ascii")
        // return username and password from header authorization
        let [username , password] = decode.split(":");
        // simulator delay response
        setTimeout(()=>{res.sendStatus(200)},5000)
        
    }
    
         
           
          
    


}

module.exports = new LoginController