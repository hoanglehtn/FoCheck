class ProductControl{
    logRequest(req,res){
        console.log(req.get('Content-Type'))
        console.log("request reach to product")
        console.log(req.body)
        res.send("sucess")
    }
}
module.exports = new ProductControl