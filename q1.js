function splitArrays(inputArray) {
    const uniqueValues = [];
    const duplicateValues = [];
    const seen = {};

    inputArray.forEach(value => {
        seen[value] = (seen[value] || 0) + 1;
        if (seen[value] === 1) {
            uniqueValues.push(value);
        } else {
            duplicateValues.push(value);
        }
    });

    return { unique: uniqueValues, duplicate: duplicateValues };
}

const inputArray = ["my", "name", "is", "my", "location", "is"];
const { unique, duplicate } = splitArrays(inputArray);

console.log("Unique:", unique);
console.log("Duplicate:", duplicate);
