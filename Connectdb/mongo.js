const {MongoClient} = require('mongodb');
 

async function connectToDb(uri){
    
    const client = new MongoClient(uri);
    const mongoClient = await client.connect()
        .then((client=>{
            console.log(`connect to ${uri}  sucess`)
            return client

        }))
        .catch((err)=>{
            console.log('connect to db faild')
            process.exit(1)
        });
    return db = mongoClient.db('test3')
       
    
}
module.exports = {
    connectToDb,

}
