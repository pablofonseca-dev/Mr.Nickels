const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

/**
 * Importing Mocha 
 */

//Essential connection data. 
const owner_password = process.env.MONGODB_OWNER_PASSWORD;
const owner_username = process.env.MONGODB_OWNER_USERNAME;
const database_name = process.env.MONGODB_BOT_DATABASE_NAME;
const connection_string = `mongodb+srv://${owner_username}:${owner_password}@mrnickelsbox.pqa8z.mongodb.net/${database_name}?retryWrites=true&w=majority`;

//Using ES6 Promises.
mongoose.Promise = global.Promise;

/**
 * Avoiding Deprecation Messages.
 */
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

/**
 * Connect to the DB before the Mocha Tests Run. 
 * This is a Jest Framework Hook.
 * */
before((done) => {
    //Connecting to MongoDB. 
    mongoose.connect(connection_string)
        .then(() => {
            console.warn(`Connected to MongoDB`);
            done(); 
        })
        .catch(error => {
            console.error(`An error ocurred connecting to MongoDB`);
            console.warn(error);
            done(); 
        });
});


/**
 * Clean the database collection before performing each test. 
 */
beforeEach(function(done){
    //This is a promise to drop the entire collection in MongoDB. 
    mongoose.connection.collections.exceptionmessages.drop("exceptionmessages").then(done());
});



