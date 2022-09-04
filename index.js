const returnFirstTwoDriversOne = ['Antonia', 'Nuru', 'Amari', 'Mo'];
 const returnFirstTwoDrivers= function(returnFirstTwoDriversOne){
     let newArr = [];
     newArr.push(returnFirstTwoDriversOne[0])
     newArr.push(returnFirstTwoDriversOne[1])
   return newArr;
 }

 const returnLastTwoDrivers = function (returnFirstTwoDriversOne){
     let newArr = [];
     newArr.push(returnFirstTwoDriversOne[2])
     newArr.push(returnFirstTwoDriversOne[3])
     return newArr;
 }

// ( const selectingDrivers = function(){
 
//     return nyArr;
//  };
// )


let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
// selectingDrivers.push(returnFirstTwoDrivers);
// selectingDrivers.push(returnLastTwoDrivers);

// const fareQuintupler = createFareMultiplier(5);

const  createFareMultiplier = (int) => {
  return function (base = 5){
    return base * int;
  } 
  };



const fareDoubler =  function (fare){
  return createFareMultiplier(2)(fare) 
};

const fareTripler = function(trip){
  return createFareMultiplier(3)(trip)

};

function selectDifferentDrivers(driversArray, fn) {
  return fn(driversArray);
}