
const returnFirstTwoDrivers= function (namesArray){
    return namesArray.slice(0,2);
}
const returnLastTwoDrivers= function (namesArray){
    return namesArray.slice(-2);
}
const selectingDrivers= [returnFirstTwoDrivers, returnLastTwoDrivers];


function createFareMultiplier(multiplier){
    const fare= function (fare ){
        return fare*multiplier ;
    }
    return fare; 
}
const fareDoubler= function(createFareMultiplier){
    return createFareMultiplier*2;
}

const fareTripler= function (createFareMultiplier){
    return createFareMultiplier*3;
}
const selectDifferentDrivers= function (namesArray,selectingDrivers){
    return selectingDrivers(namesArray);
}