const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

//*Create Exceptions Schema And Model 

const MODEL_NAME = "ExceptionMessages";

const EXCEPTIONS_SCHEMA = new Schema({
    ExceptionKey: String, 
    ExceptionDescription: String, 
}); 

/**
 * Everytime this coder creates a collection based
 * on the Exception Messages Schema, store that object in
 * the model name collection that is available in MongoDB. 
 * */
const ExceptionsModel = mongoose.model(MODEL_NAME, EXCEPTIONS_SCHEMA);

module.exports = ExceptionsModel; 
