const mongoose = require('mongoose');
function handle(Model,{...object}){
 return result = new Model({object})//test
}
/** 
Create an document base on model and write into DB
* 
*/
async function mongooseHandle(ModelMongoose,object){
    mongoose.connect(
     "mongodb+srv://binhnguyen:170116Abc@cluster0.y1plb.mongodb.net/?retryWrites=true&w=majority",
     {dbName:"Blog"}
    )
    .then(async (mongoose)=>{
        console.log("connect sucess")
        const document = new ModelMongoose(object);
        await document.save()
        console.log("put sucess");
        return mongoose.disconnect()
        
    })
    .then(()=>{
        console.log("disconnect from db")
    })
    .catch((err)=>{
        console.log(err);
    })
    
}
module.exports ={
    mongooseHandle
}