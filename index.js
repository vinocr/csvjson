// setting the input path to csv
const fs = require('fs');

// creating empty array of objects for case1
let arr = [];
//  creating empty array of objects for case2
let arr1 = [];

let rd = require('readline').createInterface({
    input:require('fs').createReadStream('data/chicagocrimes.csv')
});

for (let i = 2001; i <= 2016; i = i + 1) {
    let o = {
         'Year': i,
       'THEFT_OVER_$500':0,
       'THEFT_$500_AND_UNDER':0
    };
    arr.push(o);
}

for (let i = 2001; i <= 2016; i = i + 1) {
    let obj = {
         'Year': i,
       'Arrested':0,
       'Not_Arrested':0
    };
    arr1.push(obj);
}
    
//reading the csv line by line
rd.on('line',function(data)
{
  let l = data.split(",");
   let p = l[17] - 2001;
   
      if(l[5] == "THEFT" && l[6] == "OVER $500" && l[17] >= 2001 && l[17] <= 2016) {
          arr[p].THEFT_OVER_$500 ++; 
      }  
      if(l[5] == "THEFT" && l[6] == "$500 AND UNDER" && l[17] >= 2001 && l[17] <= 2016) {
          arr[p].THEFT_$500_AND_UNDER ++; 
      }  
      
      if(l[5] == "ASSAULT" && l[8] == "true" && l[17] >= 2001 && l[17] <= 2016)
      {
        arr1[p].Arrested ++; 
      }  
      
      if(l[5] == "ASSAULT" && l[8] == "false" && l[17] >= 2001 && l[17] <= 2016)
      {   
          arr1[p].Not_Arrested ++; 
      }
  
});
// writing files as json for case1 in another file
rd.on('close', function()
{
    fs.writeFile("output/theft.json", JSON.stringify(arr),function(err) {
    if(err) {
        return console.log(err);
    }
   
    });
    
      fs.writeFile("output/assault.json", JSON.stringify(arr1),function(err) {
    if(err) {
        return console.log(err);
    }
    
    });  
});   
  module.exports = {
    a : arr,
    b : arr1
};    




