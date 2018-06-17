const {ObjectID} = require('mongodb')

const {mongoose} = require('./../server/db/mongoose')
const {Todo} = require('./../server/models/todo')
const {User} = require('./../server/models/user')

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

//Todo.findOneAndRemove().then

//Todo.findByIdAndRemove()

Todo.findOneAndRemove({_id: '5b26526a87a8b86447fad78a'}).then((todo) => {
    console.log(todo);
});
Todo.findByIdAndRemove('5b26526a87a8b86447fad78a').then((todo) => {
    console.log(todo);
});