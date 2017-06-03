//unit testcase for the json object
let chai = require('chai');
let expect = chai.expect;
let checkobj_1 = require('../output/theft');
let checkobj_2 = require('../output/assault');
let index = require('../index.js');
//Datamunging test case
describe('DataMunging-Test case for correct output', function()  {
    //checking the theft.json is boject
     it ('Test whether the type of output is object or not', function(done)  {
     expect(typeof checkobj_1).to.deep.equal('object');
     done();
    });
    //checking the theft.json is boject
    it ('Test whether the type of output is object or not', function(done)  {
     expect(typeof checkobj_2).to.deep.equal('object');
     done();
    });
    //checking the assault.json is array
     it ('Test whether the output of json for case1 is an array or not',function(done){
     expect(Array.isArray(index.a)).to.deep.equal(true);
    done();
   });
   //checking the assault.json is array
    it ('Test whether the output of json for case2 is an array or not',function(done){
     expect(Array.isArray(index.b)).to.deep.equal(true);
    done();
   });
});

