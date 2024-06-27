// Code your solution in this file!
// Function to calculate the number of blocks from headquarters
function distanceFromHqInBlocks(pickupLocation) {
    const hqLocation = 42;
    return Math.abs(pickupLocation - hqLocation);
}

// Function to calculate the distance from headquarters in feet
function distanceFromHqInFeet(pickupLocation) {
    const blocks = distanceFromHqInBlocks(pickupLocation);
    return blocks * 264;
}

// Function to calculate the number of feet travelled between two locations
function distanceTravelledInFeet(start, destination) {
    const blocksTravelled = Math.abs(destination - start);
    return blocksTravelled * 264;
}

const pickupLocation = 50;
console.log(`Distance from HQ in blocks: ${distanceFromHqInBlocks(pickupLocation)}`);
console.log(`Distance from HQ in feet: ${distanceFromHqInFeet(pickupLocation)}`);

const start = 34;
const destination = 38;
console.log(`Distance travelled in feet: ${distanceTravelledInFeet(start, destination)}`);

function calculatesFarePrice(pickup, destinationBlock){
    const totalFeetTravelled = distanceTravelledInFeet(pickup, destinationBlock);
    if (totalFeetTravelled < 400) {
        return 0;
    } else if (totalFeetTravelled > 400 && totalFeetTravelled < 2000){
        const excessfeet = totalFeetTravelled - 400;
        return excessfeet * 0.02;
    } else if (totalFeetTravelled > 2000 && totalFeetTravelled < 2500) {
        return 25.0;
    } else {
        return "cannot travel that far";
    }
}
