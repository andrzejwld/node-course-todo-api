const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server.');
    }
    console.log('Connected to MongoDB server.');

    const db = client.db('TodoApp');

    // db.collection('Todos').deleteMany({
    //     text: 'Eat lunch'
    // }).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Todos').deleteOne({
    //     text: 'Eat lunch'
    // }).then((result) => console.log(result));

    // db.collection('Todos').findOneAndDelete({
    //     completed: false
    // }).then((result) => {
    //     console.log(result);
    // })

    // db.collection('Users').deleteMany({
    //     name: 'Andrzej'
    // }).then((result) => {
    //     console.log(result)
    // });

    db.collection('Users').findOneAndDelete({
        _id: new ObjectID("5b1418917a920e336ccd3572")
    }).then((result) => {
        console.log(JSON.stringify(result, undefined, 2));
    });

    // client.close();
});