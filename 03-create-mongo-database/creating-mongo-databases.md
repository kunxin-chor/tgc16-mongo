# Creating a new Mongo database

You just `use` the database as if it exists. To create, for example, a database
named `animal_shelter`, we just do:

```
use animal_shelter
```

The database is not permanent until it has a collection

# Create a collection
To create a collection, you simply add a document to the collection. Assume it exists
and add a document to it.

# Add a document to a collection
It works even if the collection does not exist. Assuming that we want to add to
the `animals` collection:

```
db.animals.insertOne({
    'name':'Fluffy',
    'age':3,
    'breed':'Golden Retriever',
    'type':'Dog'
})
```
## Add many documents at a time to a collection
```
db.animals.insertMany([
    {
        'name':'Dazzy',
        'age':5,
        'breed':'Greyhound',
        'type':'Dog'
    },
    {
        'name':'Timmy',
        'age':1,
        'breed':'Border Collie',
        'type':'Dog'
    }
])
```

# Update existing documents in a database
Two methods:
* replace with an entirely new document
* replace only some of the properties of the document

## Replace with new document
Assuming Timmy's ObjectID is `62172cfc5e4cc3d0ca8b8409`

```
db.animals.updateOne({
    '_id':ObjectId('62172cfc5e4cc3d0ca8b8409')
},{
    $set:{
        'name':'Timmy',
        'breed':'German Shepherd',
        'age':1.5,
        'type':'Dog'
    }
})
```

## Update only one field in the document
We want to change the name of Timmy to Thunder:
```
db.animals.updateOne({
    '_id':ObjectId('62172cfc5e4cc3d0ca8b8409')
},{
    $set:{
        'name':'Thunder'
    }
})
```