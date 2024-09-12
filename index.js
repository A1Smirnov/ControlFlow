// Part 1: Growing Pains

const PI = 3.1415;
//plants are contained is circular, with a radius of 5 meters
const radius = 5;
const area = PI * radius * radius;
//Each plant requires a minimum space of 0.8 square meters
const spacePerPlant = 0.8;
// The area is starting with 20 plants.
const startPlantsCounts = 20;
// Max plants capacity will be = Area (m2) / Area Per 1 Plant
const maxPlantsCapacity = ~~(area / spacePerPlant);


// Declare week number variable
let week = 1; 

//Declare current variable for: current plant count
let plantCount;
//Declare current decision and implement control flow
let decision;

//Give the requirments for each decision choice
let capacity80Percent = 0.8 * maxPlantsCapacity;
let capacity50Percent = 0.5 * maxPlantsCapacity;

console.log('%cPart 1: Growing Pains', 'font-size: 16px');
console.log('-----------------------------------');

// The plants double in number every week
// Calculationg and consoling each week plants count
// `**` is like ^

if (week === 1) {
    plantCount = startPlantsCounts * 2 ** 1;
    console.log(`Plants on ${week} week is ${plantCount}`);
} else if (week === 2) {
    plantCount = startPlantsCounts * 2 ** 2;
    console.log(`Plants on ${week} week is ${plantCount}`);
} else if (week === 3) {
    plantCount = startPlantsCounts * 2 ** 3;
    console.log(`Plants on ${week} week is ${plantCount}`);
} else {
    console.log("Invalid number of week. We have only 1, 2 or 3 weeks.");
}

// Determine the decision based on the plant count and capacity
// Output to console results

if (week === 1 || week === 2 || week === 3) {
    if (plantCount > capacity80Percent) {
     decision = 'Prune the plants to prevent overcrowding.';
    } else
        if (plantCount >= capacity50Percent) {
        decision = 'Monitor the plant growth; it is within acceptable limits.';
        } else {
        decision = 'There is room to plant more plants.';
    }
    
    console.log(`<--- Week ${week} --->`);
    console.log(`Plants Count: ${plantCount}`);
    console.log(`Max Plants Capacity: ${maxPlantsCapacity}`);
    console.log(`Decision: ${decision}`);
    console.log('-----------------------------------');
}

// Cuz I am restricted from using loop, function and so on...
// Let do copy paste for other weeks
let week2 = 2; 
if (week2 === 1) {
    plantCount = startPlantsCounts * 2 ** 1;
    console.log(`Plants on ${week2} week is ${plantCount}`);
} else if (week2 === 2) {
    plantCount = startPlantsCounts * 2 ** 2;
    console.log(`Plants on ${week2} week is ${plantCount}`);
} else if (week2 === 3) {
    plantCount = startPlantsCounts * 2 ** 3;
    console.log(`Plants on ${week2} week is ${plantCount}`);
} else {
    console.log("Invalid number of week. We have only 1, 2 or 3 weeks.");
}

if (week2 === 1 || week2 === 2 || week2 === 3) {
    if (plantCount > capacity80Percent) {
     decision = 'Prune the plants to prevent overcrowding.';
    } else
        if (plantCount >= capacity50Percent) {
        decision = 'Monitor the plant growth; it is within acceptable limits.';
        } else {
        decision = 'There is room to plant more plants.';
    }
    
    console.log(`<--- Week ${week} --->`);
    console.log(`Plants Count: ${plantCount}`);
    console.log(`Max Plants Capacity: ${maxPlantsCapacity}`);
    console.log(`Decision: ${decision}`);
    console.log('-----------------------------------');
}

let week3 = 3; 
if (week3 === 1) {
    plantCount = startPlantsCounts * 2 ** 1;
    console.log(`Plants on ${week3} week is ${plantCount}`);
} else if (week3 === 2) {
    plantCount = startPlantsCounts * 2 ** 2;
    console.log(`Plants on ${week3} week is ${plantCount}`);
} else if (week3 === 3) {
    plantCount = startPlantsCounts * 2 ** 3;
    console.log(`Plants on ${week3} week is ${plantCount}`);
} else {
    console.log("Invalid number of week. We have only 1, 2 or 3 weeks.");
}

if (week3 === 1 || week3 === 2 || week3 === 3) {
    if (plantCount > capacity80Percent) {
     decision = 'Prune the plants to prevent overcrowding.';
    } else
        if (plantCount >= capacity50Percent) {
        decision = 'Monitor the plant growth; it is within acceptable limits.';
        } else {
        decision = 'There is room to plant more plants.';
    }
    
    console.log(`<--- Week ${week} --->`);
    console.log(`Plants Count: ${plantCount}`);
    console.log(`Max Plants Capacity: ${maxPlantsCapacity}`);
    console.log(`Decision: ${decision}`);
    console.log('-----------------------------------');
}

// Part 2: Thinking Bigger
console.log('%cPart 2: Thinking Bigger', 'font-size: 16px');
// scientists were to start with 100 plants
const startPlantsCountsTB = 100;
// and did not prune them for 10 weeks
const week10 = 10;
// Calculate count of strains after 10 weeks and console it
plantCountTB = startPlantsCountsTB * 2 ** 10;
console.log(`Count of plants after ${week10} weeks will be ${plantCountTB} units`)

// Calculate how many space required for this amount of plants
const spaceRequiredTB = plantCountTB * spacePerPlant;
console.log(`Plants will require ${spaceRequiredTB} square meters`);

// Calculating starting garden
const startingArea = PI * radius * radius;
console.log(`Starting garden are was ${startingArea} square meters`);

// The amount of additional space that would be required ?
const addSpaceRequired = spaceRequiredTB - startingArea;
console.log(`Additional required space will be: ${addSpaceRequired} square meters`);

// Space remained circular, what radius of this expanded garden?
const radiusTB = Math.sqrt(spaceRequiredTB / PI);
console.log(`New garden will require radius of ${radiusTB} meters`);
console.log('-----------------------------------');

// Part 3: Errors in Judgement
console.log('%cPart 3: Errors in Judgement', 'font-size: 16px');

try {
    // Calculate amoin of plants and space required for them
    const plantCountEJ = startPlantsCountsTB;
    const spaceRequiredEJ = plantCountEJ * spacePerPlant;

    // Throw error if the space required exceeds the available space
    if (spaceRequiredEJ > startingArea) {
        throw new Error('There is no space in the garden.');
    }

    // If no error, console log the details
    console.log(`Amount of plants: ${plantCountEJ}`);
    console.log(`Space required: ${spaceRequiredEJ} square meters`);
    console.log(`Starting garden area: ${startingArea} square meters`);
    console.log('The space required is within the available space.');
} catch (error) {
    // Handle the error and log an appropriate message
    console.error('Error:', error.message);
}
