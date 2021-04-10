const assert = require('assert');
const ExceptionsModel = require('../../src/models/exceptions');

describe('Save ExceptionMessage Instances in the database', suitesCollection);

/**
 * A group of suites related to Exception Model saving. 
 */
function suitesCollection(){
    it('Save a Exception Message Instance into the database', saveExceptionInDBHandler);
};

/**
 * Generate a test instance of the Exception Messages Schema.
 * @returns the test instance.
 */
function generateModelTestInstance() {
    return new ExceptionsModel({
        ExceptionKey: "SavingTestException", 
        ExceptionDescription: "This is a test creating a record with the Exception Messages schema."
    }); 
};


/**
 * *Save an Exception Message Instance Suite CallBack. 
 * @param {*} done Mocha Done Object for Asynchronous Operations. 
 */
function saveExceptionInDBHandler(done){
    saveExceptionInDB()
    .then(done()); 
}


/**
 * Specific suite to save a collection to the database. 
 */

async function saveExceptionInDB() {
    const tempExMessageInstance = generateModelTestInstance();
    
    let savingResult;
    
    try{
        savingResult = await tempExMessageInstance.save()
        assert(!savingResult.isNew);
    }catch(error){
        console.error(error);
    }

};



