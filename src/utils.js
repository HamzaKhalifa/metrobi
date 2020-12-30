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
}

export default utils;