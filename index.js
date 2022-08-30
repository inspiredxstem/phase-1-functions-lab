// Code your solution in this file!

function distanceFromHqInBlocks(someValue) {
    if(someValue > 42){
        return someValue - 42;
    } else {
        return 42 - someValue;
    }
}

function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue) * 264;
}

function distanceTravelledInFeet(start, destination) {
    if (start > destination) {
        return (start - destination) * 264;
    } else {
        return (destination - start) * 264;
    }
}

function calculatesFarePrice(start, destination) {
    let distanceInFeet = distanceTravelledInFeet(start, destination); 

    if (distanceInFeet <= 400){
        return 0;
    } else if (distanceInFeet > 400 && distanceInFeet < 2000) {
        return (distanceInFeet - 400) * 0.02;
    } else if (distanceInFeet > 2000 && distanceInFeet < 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}