# Solutions to slides hands on 1:

## Q1a:
```
db.companies.find({
    'founded_year':2006
},{
    'name':1,
    'founded_year':1
}).pretty()
```

## Q1b:
```
db.companies.find({
    'founded_year':{
        '$gte':2000
    }
},{
    'name':1,
    'founded_year':1
}).pretty()
```

## Q1c
```
db.companies.find({
    'founded_year':{
        '$gte':1900,
        '$lte':2010
    }
},{
    'name':1,
    'founded_year':1
})
```

## Q3a
```
db.companies.find({
    'ipo.valuation_amount':{
        '$gte':100000000
    }
},{
    'name':1,
    'ipo.valuation_amount':1,
    'ipo.valuation_currency_code':1
}).pretty()
```

##Q3b
```
db.companies.find({
    'ipo.valuation_currency_code':'USD',
    'ipo.valuation_amount':{
        '$gte':100000000
    }
},{
    'name':1,
    'ipo.valuation_currency_code':1,
    'ipo.valuation_amount':1
}).pretty()
```

# Mongo Labs Hands On for sample_restaurants

Q1.
```
db.restaurants.find({
    'cuisine':'Hamburgers'
}).pretty()
```

Q2. 
```
db.restaurants.find({
    '$and':[
        {
            'cuisine':'American'
        },
        {
            'borough':'Bronx'
        }
    ]
})
```
Alternatively:
```
db.resturants.find({
    'cuisine':'American',
    'borough':'Bronx'
}).pretty()
```
Q3.
```
db.restaurants.find({
    'address.street':'Stillwell Avenue'
}).pretty()
```

# Hands On for sample_mflix databases
Q1
```
db.movies.find().count()
```

Q2.
```
db.movies.find({
    'year':{ $lt: 2000}
}).count()
```

Q3.
```
db.movies.find({
    'countries':{
        '$in':['USA']
    }
}).limit(10)
```

Q4.
```
db.movies.find({
    'countries':{
        '$nin':['USA']
    }},{
    'title':1,
    'countries':1
}).pretty().limit(10)
```
Alternatively:
```
db.movies.find({
    'countries':{
        '$not': [
            '$in:['USA]
        ]
    }
}).pretty().limit(10)
```
Q5.
```
db.movies.find({
    'awards.wins':{
        '$gte':3
    }
},{
    'title':1,
    'awards':1
})
```
Q6.
```
db.movies.find({
    'awards.nominations':{
        '$gte':3
    }
},{
    'title':1,
    'awards.nominations':1
})
```
Q7.
```
db.movies.find({
    'cast':'Tom Cruise'
},{
    'title':1,
    'cast':1
})
```
Q8.
```
db.movies.find({
    'directors':'Charles Chaplin'
},{
    'directors':1
})
```
## Hands On for sample_weatherdata
Q1
```
db.data.find({
    'wind.speed.rate':{
        '$gte':5
    }
})
```
Q2
```
db.data.find({
    'wind.speed.rate':{
        '$gte':5,
        '$ne':999.9
    }
})
```