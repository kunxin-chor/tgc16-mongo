Q1
```
use fake_schools;

db.schools.insertMany([
    {
        "name":"Jane Doe",
        "age":13,
        "subjects":["Defense Against the Dark Arts", "Charms", "History of Magic"],
        "date_enrolled":ISODate("2016-05-03")
    },
    {
        "name":"James Verses",
        "age":14,
        "subjects":["Transfiguration", "Alchemy"]
    },
    {
        "name":"Jonathan Goh",
        "age":12,
        "subjects":["Divination", "Study of Ancient Runes"],
        "date_enrolled":ISODate("2017-04-16")
    }
])
```

Update the students' age
```
db.students.updateMany({},{
    '$inc':{
        'age':1
    }
})
```

Change Jane Doe to 'Jane Doe jr."
```
db.students.updateOne({
    '_id':ObjectId("621739435e4cc3d0ca8b840a")
},{
    '$set':{
        'name':'Jane Doe Jr.',
        'age':11
    }
})
```
Change Jonathan Goh's enrollment date
```
db.students.updateOne({
    '_id':ObjectId("621739435e4cc3d0ca8b840c")
},{
    '$set':{
        'date_enrolled':ISODate('2018-05-13')
    }
})
```


Delete Jonathan Goh
```
db.students.deleteOne({
    '_id':ObjectId("621739435e4cc3d0ca8b840c")
})
```