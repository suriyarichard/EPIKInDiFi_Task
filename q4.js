function flattenObject(obj, parentKey = '') {
    let result = {};

    for (const key in obj) {
        const newKey = parentKey ? `${parentKey}.${key}` : key;

        if (typeof obj[key] === 'object' && obj[key] !== null) {
            // Recursively flatten nested objects
            const flattened = flattenObject(obj[key], newKey);
            result = { ...result, ...flattened };
        } else {
            result[newKey] = obj[key];
        }
    }

    return result;
}

const nestedObject = {
    academics: {
        qualification: "Btech",
        zone: "East"
    },
    address: {
        state: "KA",
        pincode: "121211"
    }
};

const flattenedObject = flattenObject(nestedObject);
console.log(flattenedObject);
