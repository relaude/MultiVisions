var mongoose = require('mongoose');

module.exports = function(config){
    mongoose.connect(config.db);

    var db = mongoose.connection;
    db.on('error', console.error.bind(console,'connection error...'));
    db.once('open',function callback(){
        console.log('multivision db opened...');
    });

    //Users Collection
    var userSchema = mongoose.Schema({
        fname: String,
        lname: String,
        username: String
    });

    var  User = mongoose.model('User', userSchema);

    User.find({}).exec(function(err, collection){
        if(collection.length === 0){
            User.create({fname:'Meg',lname:'Laude',username:'meg'});
            User.create({fname:'Poochie',lname:'Kulit',username:'poochie'});
            User.create({fname:'Ramil',lname:'Laude',username:'ramil'});
        }
    });
}
