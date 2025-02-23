```javascript
// Incorrect usage of $inc operator in MongoDB
db.collection('myCollection').updateOne({"_id": ObjectId("651967765b55454545454545")}, {"$inc": {"counter": 10}});
```