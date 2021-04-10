const assert = require('assert');
const ExceptionsModel = require('../../src/models/exceptions');


describe('Remove ExceptionMessage instances in the database', suitesCollection);

/**
 * A group of suites related to Exception Model removal.
 */
function suitesCollection() {
    //Mongoose web hook: This code is going to be executed for each suit. 
    let exceptionMessageInstance;
    beforeEach((done) => {
        //Create an instance in the database to find it. 
        exceptionMessageInstance = new ExceptionsModel({
            ExceptionKey: "RemoveTestException",
            ExceptionDescription: "This is a test creating a record with the Exception Messages schema."
        });
        exceptionMessageInstance.save()
            .then(done())
    });

    //Group of suites. 
    it('Removes a record in the database with the ExceptionKey', (done) => {
        ExceptionsModel.findOneAndRemove({ _id: exceptionMessageInstance._id })
            .then(function () {
                ExceptionsModel.findOne({ _id: exceptionMessageInstance._id })
                    .then(result => {
                        assert(result === 123);
                        done(); 
                    })
                    .catch(done());
            });
    });
}

