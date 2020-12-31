const utils = {
    question1FindDulpicates: (ray) => {
        let results = [];
        let sorted = ray.sort();
        
        for (let i = 0; i < sorted.length - 1; i++) {
            if (sorted[i + 1] === sorted[i] && results.indexOf(sorted[i]) === -1)  
                results.push(sorted[i]);
        }

        return results;
    },
    question2AsyncFunction: async (ray) => {
        let resolves = ray.map((element, index) => {
            let seconds = Math.pow(2, index) * 1000;
            return new Promise(resolve => setTimeout(() => {
                console.log(element);
                resolve();
            }, seconds))
        });

        await Promise.all(resolves);
    },
    question4IsOpenedAndClosedProperly: (entry) => {
        // The principle should be like this: The last one that gets opened should be the first one that gets closed. 
        // We then keep the indexes for the ones that get opened in an array
        // And check if a closing one's index matches the last element that got opened
        let openingBrackets = ['{', '[', '('];
        let closingBrackets = ['}', ']', ')'];
        let openedBrackets = [];

        for (let element of entry) { 
            let isAnOpeningBracket = openingBrackets.indexOf(element) !== -1;
            let isAClosingBracket = closingBrackets.indexOf(element) !== -1

            // If the element isn't even a bracket 
            if (!isAnOpeningBracket && !isAClosingBracket) return false;

            // If it's an opening bracket
            if (isAnOpeningBracket) {
                openedBrackets.push(openingBrackets.indexOf(element));
            } else {
                if (openedBrackets.pop() !== closingBrackets.indexOf(element)) return false;
            }
        }

        return openedBrackets.length === 0;
    },
    question7GetMaxValue: (carrotTypes, capacity) => {
        let scores = carrotTypes.map((carrotType, index) => ({index, score: carrotType.price / carrotType.kg}));
        let sortedScores = scores.sort((a, b) => b.score - a.score);
        let remaining = capacity;
        let value = 0;

        for (let i = 0; i < sortedScores.length; i++) {
            let index = sortedScores[i].index;
            let carrotType = carrotTypes[index];

            let howMuchCanTake = parseInt(remaining / (carrotType.kg));
            remaining -= howMuchCanTake * carrotType.kg;
            value += howMuchCanTake * carrotType.price;
        }

        return value;
    },
    question5FindingHighestFloorSolution1(floors, remainingEggs, startFrom = 0, finishAt = floors.length - 1) {
        // If we have got only one remaining egg, then we brute force the search.
        if (remainingEggs === 1) {
            for (let i = startFrom; i <= finishAt; i++) {
                if (!floors[i])
                    return i;
            }
        }

        // The principle consists of diving the entire building into 2 and checking the middle. 
        // If the egg can be dropped from the middle, then we start making our tests on the higher part of the building. 
        // If the egg can't be dropped from the middle, then we start making our test on the lower part of the building
        let nexStartFrom, nextFinishAt;
        let middle = parseInt((finishAt - startFrom) / 2) + startFrom;
        if (floors[middle]) {
            nexStartFrom = middle + 1;
            nextFinishAt = finishAt;
        } else {
            remainingEggs--;
            nexStartFrom = startFrom;
            nextFinishAt = middle - 1;
        }

        // If we have divided our building enough times until we are only left with one floor, then we make one final test on this last floor
        if (nexStartFrom === nextFinishAt) {
            if (floors[nexStartFrom]) return nexStartFrom + 1;
            else return nexStartFrom;
        }

        // We do the same recursive processing on the valid half of the building (either higher or lower depending on the above condition)
        return this.question5FindingHighestFloorSolution1(floors, remainingEggs, nexStartFrom, nextFinishAt);
    },
    // white: [true, true, true, true, true, false, false], [true, false, false]
    // The principle: 
    // If we got one egg (worst scenario), then we start testing from the first floor. 
    // If we got 100 eggs (best scenario), then we start testing 
    question5FindHighestFloorSolution2(floors, remainingEggs, startingFloor = 0) {
        // If there isn't even one floor from which the egg can be dropped, then we just return -1
        if (floors.indexOf(true) === -1) return -1;
        
        // We starting testing from the highest floor given the number of eggs we have
        // If we have 2 eggs, then we start testing from floor 2 (index 1 in the array)
        let floorToTest = (startingFloor + remainingEggs) - 1;
        if (floors[floorToTest]) {
            return this.question5FindHighestFloorSolution2(floors, remainingEggs, startingFloor + remainingEggs);
        } else {
            for (let i = floorToTest - 1; i >= startingFloor - 1; i--) {
                // If there there is no floor from which the egg can be dropped, i will drop beneath 0
                // But this condition will never be met here since we are already making a test for this at the beginning of the function. So it's just a bonus test
                if (i < 0) return -1;

                if (floors[i]) {
                    // (i + 1) because the first element in the list is referred to as floor 1, not floor 0
                    return i + 1;
                }
            }

            return -1;
        }
    }
}

export default utils;