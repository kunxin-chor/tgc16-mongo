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