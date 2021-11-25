// const mongoose = require('mongoose')
// mongoose.Promise = global.Promise;
// const program = require('commander');
const {MongoClient} = require('mongodb');

// const db = mongoose.connect('mongodb+srv://opl:12345@cluster0.rq03g.mongodb.net/loginData?retryWrites=true&w=majority',{
//     useMongoClient: True
// });

async function main(){

         const uri = "mongodb+srv://opl:12345@cluster0.rq03g.mongodb.net/loginData?retryWrites=true&w=majority";
         const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
     
        try {
            // Connect to the MongoDB cluster
            await client.connect();
     
            // Make the appropriate DB calls
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
    // console.log(results)
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

    // .findOne({ name: nameOfListing });

    // if (result) {
    //     console.log(`Found datas in the collection with the credentials '${nameOfListing}':`);
    //     console.log(result);
    // } else {
    //     console.log(`No listings found with the name '${nameOfListing}'`);
    // }
    // console.log(result)


// program
//  .version('1.0.0')
//  .description('Retrieving All Google Login Data')

// program
// .command('get-login-data')
// .alias('gld')
// .description('Retrieving All Google Login Data')
// .action()

//  program.parse(process.argv);

