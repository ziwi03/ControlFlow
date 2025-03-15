// Part 1: Growing Pains

// For calculations
const PI = 3.1415;
const radius = 5;
const gardenArea = PI * radius * radius;
const plantSpace = 0.8;
const maxPlants = Math.floor(gardenArea / plantSpace);

// Predict plant growth and give recommendations
function predictGrowth(weeks) {
    let plants = 20; // Starting number of plants

    for (let i = 0; i < weeks; i++) {
        plants *= 2; // Plants double every week
    }

    let capacity = (plants / maxPlants) * 100; // Space used

    console.log("Week", weeks, "- Plant Count:", plants);

    if (capacity > 80) {
        console.log("Recommendation: Prune the plants to prevent overgrowth.");
    } else if (capacity >= 50) {
        console.log("Recommendation: Monitor the plant growth, it's acceptable.");
    } else {
        console.log("Recommendation: There is space, consider planting more.");
    }
}

// Predictions for 1, 2, and 3 weeks
predictGrowth(1);
predictGrowth(2);
predictGrowth(3);

// Part 2: Thinking Bigger
function additionalSpaceNeeded(startPlants, weeks) {
    let plants = startPlants;
    for (let i = 0; i < weeks; i++) {
        plants *= 2;
    }
    let neededSpace = plants * plantSpace;
    let newRadius = Math.sqrt(neededSpace / PI);

    console.log("For", weeks, "weeks with", startPlants, "starting plants:");
    console.log("Additional space needed:", neededSpace.toFixed(2), "square meters");
    console.log("New required radius:", newRadius.toFixed(2), "meters");
}

// Additional space for 100 plants over 10 weeks
additionalSpaceNeeded(100, 10);

// Part 3: Errors
try {
    let plants = 100;
    for (let i = 0; i < 10; i++) {
        plants *= 2;
    }
    let requiredSpace = plants * plantSpace;
    if (requiredSpace > gardenArea) {
        throw new Error("Error: The plants have exceeded the available space!");
    }
    console.log("Plants can fit within the garden.");
} catch (error) {
    console.error(error.message);
}