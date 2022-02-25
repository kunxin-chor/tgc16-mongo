// EXPRESS AND OTHER SETUP
const express = require('express');
const MongoUtil = require('./MongoUtil.js')
// const { getDB, connect} = require('./MongoUtil.js) <-- import in functions directly
//                                                        if we do that, then no need MongoUtil in front, can just those functions directly
const hbs = require('hbs')
const wax = require('wax-on')

// load in environment variables
require('dotenv').config();

// create the app
const app = express();
app.set('view engine', 'hbs')
app.use(express.static('public'))
app.use(express.urlencoded({extended:false}))

// setup template inheritance
wax.on(hbs.handlebars);
wax.setLayoutPath('./views/layouts')


async function main() {
    const MONGO_URI=process.env.MONGO_URI;
    await MongoUtil.connect(MONGO_URI, "tgc16_shelter");

    app.get('/', async function(req,res){
        let allAnimals = await MongoUtil.getDB().collection('animals').find({}).toArray();
        res.render('all_animals.hbs',{
            'animals':allAnimals
        })
    })
 
    app.get('/animals/add', function(req,res){
        res.render('add_animal.hbs')
    } )

    app.post('/animals/add', async function(req,res){
        await MongoUtil.getDB().collection('animals').insertOne(req.body);
        res.redirect('/'); // instruct the browser to go to the / route
    })

}

main();

// LISTEN
app.listen(3000, ()=>{
    console.log("Express is running")
    
})