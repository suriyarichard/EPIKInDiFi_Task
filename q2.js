function convertToObjects(stringArray) {
    return stringArray.map(str => {
        const [uniqueId, empNumber, phoneNumber] = str.split(' ');
        return {
            uniqueId,
            empNumber,
            phoneNumber
        };
    });
}

const stringArray = [
    "DB20400045620 1323474 9887554555",
    "DB20450398520 3243434 6877887887",
    "DB20406598420 2332323 5878764564",
    "DB20650398320 4656566 5645645666",
];

const outputArrayOfObject = convertToObjects(stringArray);
console.log(outputArrayOfObject);
