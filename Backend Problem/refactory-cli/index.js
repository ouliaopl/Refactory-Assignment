const {MongoClient} = require('mongodb');

async function main(){

         const uri = "mongodb+srv://opl:12345@cluster0.rq03g.mongodb.net/loginData?retryWrites=true&w=majority";
         const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
     
        try {

            await client.connect();
     

            await  findOneListingByName(client);
     
        } catch (e) {
            console.error(e);
        } finally {
            await client.close();
        }
    }
    
main().catch(console.error);


async function findOneListingByName(client) {
    const cursor = client.db("loginData").collection("loginCredentials").find(
        {
            _id: { $ne: null},
        }
        ).sort({ _id: 1 })
        .limit(10);
    const results = await cursor.toArray();
    if (results.length > 0) {
        console.log(`Found data(s):`);
        results.forEach((result, i) => {
            console.log();
            console.log(`${i + 1}. name: ${result.name}`);
            console.log(`   _id: ${result._id}`);
            console.log(`   email: ${result.email}`);
            console.log(`   picture: ${result.picture}`);
            });
    } else {
        console.log(`No data found`);
    }
}

module.exports = {
    main
}

