```
db.animals.insertOne({
    'name':'Cheshire',
    'age': 1,
    'breed':'Wild Cat',
    'type':'Cat',
    'checkups':[
        {
            'id':ObjectId(),
            'name': 'Dr Chua',
            'diagnosis':'Heartworms',
            'treatment':'Steroids'
        },
        {
            'id':ObjectId(),
            'name':'Dr Chua',
            'diagnosis':'Stomach upset',
            'treatment':'Pills'
        },
        {
            'id':ObjectId(),
            'name':'Dr Tan',
            'diagnosis':'Stomach upset',
            'treatment':'Pills'
        },
        
    ]
})
```

Update all Dr. Chua's diagnosis to `redacted`, assum

```
db.animals.updateOne({
    
},{
    $set: {
        'checkups.$[doctor].diagnosis':'redacted'
    },
    {
        arrayFilters:[ 
            {
                {'doctor.name':'Dr Chua'}
            }
        ]
    }
})
```