const mongoose = require('mongoose');

/* == connection string == */
const connectionStr = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/selfiesDB';
// const connectionStr = process.env.MONGODB_URI;

/* == set up our connection with the DB == */
mongoose.connect(connectionStr);

/* == listeners to monitor connection == */
mongoose.connection.on('connected', () => console.log('mongodb connected :)'));

mongoose.connection.on('error', (error) => console.log('mongodb error', error));

mongoose.connection.on('disconnected', () => console.log('mongodb disconnected :('));

