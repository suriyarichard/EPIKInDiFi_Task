function sortAscending(arr) {
    return arr.slice().sort((a, b) => a - b);
}

function sortDescending(arr) {
    return arr.slice().sort((a, b) => b - a);
}

const numbers = [5, 2, 8, 1, 7];

const ascendingOrder = sortAscending(numbers);
const descendingOrder = sortDescending(numbers);

console.log("Ascending Order:", ascendingOrder);
console.log("Descending Order:", descendingOrder);
