const mongoose = require('mongoose');
const dbString = require('./config').dbUrl + 'Tripps';
const rdyString = '-----Database is ready-----';

module.exports = () => {
    return mongoose.connect(dbString, {
        useCreateIndex: true,
        useUnifiedTopology: true,
        useNewUrlParser: true
    },
    console.log (rdyString)
    );
};