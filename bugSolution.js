```javascript
db.collection('myCollection').updateOne({"_id": ObjectId("651967765b55454545454545")}, {"$inc": {"counter": 10}}, {upsert: true}); 
//or
db.collection('myCollection').updateOne({"_id": ObjectId("651967765b55454545454545")}, {"$inc": {"counter": 10}}, {upsert: true, setDefaultsOnInsert:true});
//The upsert option creates the document if it doesn't exist.  setDefaultsOnInsert allows for default values
```