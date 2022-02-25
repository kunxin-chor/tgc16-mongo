const express = require('express');
const hbs = require('hbs');
const wax = require('wax-on');
require('dotenv').config();
const {
    connect,
    getDB
} = require('./MongoUtil');

const app = express();
app.set('view engine', 'hbs');

wax.on(hbs.handlebars);
wax.setLayoutPath('./views/layouts');

// for forms to work
app.use(express.urlencoded({
    extended:false
}));

async function main() {
    // connect to the mongodb
    // first arg of the MongoClient.connect() is the URI (or your connection string)
    await connect(process.env.MONGO_URI, "tgc16-food")

    // SETUP ROUTES
    app.get('/', async function (req, res) {
        res.send("show all food records")
    })

    app.get('/food/add', function(req,res){
        res.render('add_food.hbs',{

        })
    })

    app.post('/food/add', async function(req,res){
        // step 1. extract info from form
        let foodName = req.body.foodName;
        let calories = req.body.calories;
        let tags = req.body.tags;
        let tagArray = tags.split(',');

        // step 2. create the new document
        let foodDocument = {
            'name': foodName,
            'calories': calories,
            'tags': tagArray
        }

        // step 3. insert in the collection
        let db = getDB();
        await db.collection('food_records').insertOne(foodDocument);

        res.send("form recieved");
    })
}

main();


app.listen(3000, function () {
    console.log("Server has started")
});