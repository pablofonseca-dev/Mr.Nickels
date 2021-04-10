const assert = require('assert');
const ExceptionsModel = require('../../src/models/exceptions');


describe('Find ExceptionMessage Instances in the database', suitesCollection);

/**
 * A group of suites related to Exception Model saving. 
 */
function suitesCollection() {
    //Mongoose web hook: This code is going to be executed for each suit. 
    let exceptionMessageInstance;
    beforeEach((done) => {
        //Create an instance in the database to find it. 
        exceptionMessageInstance = new ExceptionsModel({
            ExceptionKey: "FindingTestException",
            ExceptionDescription: "This is a test creating a record with the Exception Messages schema."
        });
        exceptionMessageInstance.save()
        .then(done())
    });

    //Group of suites. 
    it('Find a record in the database with the ExceptionKey value', findRecordByKeyHandler);
    it('Find a record in the database with the instance ID', (done) => {
        findRecordByID(exceptionMessageInstance).then(done());
    });
}

/**
 * *Find an Exception Message instance in the DB with its ExceptionKey. This is a suite handler. 
 * @param {*} done Mocha Done Object for Asynchronous Operations. 
 */
function findRecordByKeyHandler(done) {
    findRecordByKey()
        .then(done())
}

/**
 * Specific suite to find an Exception Message Collection by its ExceptionKey. 
 */
async function findRecordByKey() {
    let findResult;
    try {
        findResult = await ExceptionsModel.findOne({ ExceptionKey: 'FindingTestException' });
        assert(findResult.ExceptionKey === 'FindingTestException');
    } catch (error) {
        console.error(error);
    }
};

async function findRecordByID(exceptionMessageInstance){
    let findResult;
    try{
        findResult = await ExceptionsModel.findOne({_id: exceptionMessageInstance._id});
        assert(findResult._id.toString() === exceptionMessageInstance._id.toString());
    }catch(error){
        console.error(error);
    }
}  


