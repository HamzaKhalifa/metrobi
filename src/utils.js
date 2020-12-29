const utils = {
    question1FindDulpicates: (ray) => {
        let results = [];
        let sorted = ray.sort();
        
        for (let i = 0; i < sorted.length - 1; i++) {
            if (sorted[i + 1] == sorted[i])  
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
        let ourBrackets = new Map();
        ourBrackets.set('{', '}');
        ourBrackets.set('[', ']');
        ourBrackets.set('(', ')');

        if (entry.length % 2 !== 0) return false;

        for (let i = 0; i < entry.length / 2; i++) {
            let closure = entry[entry.length - (i + 1)];

            if (ourBrackets.get(entry[i]) == undefined) return false; 
            if (ourBrackets.get(entry[i]) != closure) return false;
        }

        return true;
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