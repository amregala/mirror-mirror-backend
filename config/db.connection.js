const mongoose = require('mongoose');
const db = mongoose.connection
/* == connection string == */
const connectionStr = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/selfiesDB';

/* == set up our connection with the DB == */
mongoose.connect(connectionStr)
.then(() => {
    console.log(`Mongodb connected at ${db.host}:${db.port}`)
})

/* == listeners to monitor connection == */
mongoose.connection.on('connected', ()=> console.log('DB connected... 🙌🙌🙌'));

mongoose.connection.on('error', (error) => console.log('mongodb error', error));

mongoose.connection.on('disconnected', () => console.log('mongodb disconnected :('));

