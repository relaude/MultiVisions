var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
    development:{
        db: 'mongodb://localhost:27017/multivision',
        rootPath: rootPath,
        port: process.env.PORT || 3030
    },
    production: {
        db: 'mongodb://dbuser:dbpassword@ds053597.mongolab.com:53597/relmongodb',
        rootPath: rootPath,
        port: process.env.PORT || 80
    }
}