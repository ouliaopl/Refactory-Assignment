const {MongoClient} = require('mongodb');
const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();

const {OAuth2Client} = require('google-auth-library');
const CLIENT_ID = '333500130256-b4kmfk345g6ml8l7n2ad0761oknakfmf.apps.googleusercontent.com'
const client = new OAuth2Client(CLIENT_ID);
const uri = "mongodb+srv://opl:12345@cluster0.rq03g.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client1 = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const PORT = process.env.PORT || 5000;

app.set('view engine', 'ejs');
app.use(express.json());
app.use(cookieParser())

app.get('/login', (req,res)=>{
    res.render('login');
})

app.post('/login', (req,res)=>{
    let token = req.body.token;
    let user = {}
    async function verify() {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: CLIENT_ID,  
        });
        const payload = ticket.getPayload();
        const userid = payload['sub'];
        user.name = payload.name;
        user.email = payload.email;
        user.picture = payload.picture;
      }
      verify().then(()=>{
          res.cookie('session-token',token);
          res.send('success')
      }).catch(err=>{
        res.redirect('/login');
      })
    async function main(){
        try {
            await client1.connect();
            const result1 = await client1.db("loginData").collection("loginCredentials").findOne({email: user.email });
            if(result1===null){
            await createLoginData(client1,user);
            }
            else{
                console.log('You already have an account')
            }
        } catch (e) {
            console.error(e);
        } finally {
            await client1.close();
        }
    }
    
    main().catch(console.error);

})
app.get('/logout',(req,res)=>{
    res.clearCookie('session-token');
    res.redirect('/login')
})

app.get('/dashboard', checkAuthenticated, (req,res)=>{
    let user = req.user;
    res.render('dashboard', {user})
})

function checkAuthenticated(req,res,next){
    let token = req.cookies['session-token'];
    let user = {};
    async function verify() {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: CLIENT_ID,  
        });
        const payload = ticket.getPayload();
        const userid = payload['sub'];
        user.name = payload.name;
        user.email = payload.email;
        user.picture = payload.picture;
      }
      verify().then(()=>{
            req.user = user;
            next();
      }).catch(err=>{
          res.redirect('/login')
      });
}

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})

async function createLoginData(client, loginData){
    const result = await client.db("loginData").collection("loginCredentials").insertOne(loginData);
    console.log(`New account created with the following id: ${result.insertedId}`);
}
