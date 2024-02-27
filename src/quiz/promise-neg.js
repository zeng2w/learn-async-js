function checkRowForNegative(row) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const hasNegative = row.some(number => number < 0);
            resolve(hasNegative ? row : null);
        }, 0);
    });
}

function logRowsWithNegatives(array2D) {
    let checkPromises = array2D.map(row => checkRowForNegative(row));

    Promise.all(checkPromises)
        .then(results => {
            results.forEach((result, index) => {
                if (result !== null) {
                    console.log(`Row ${index} contains a negative number:`, result);
                }
            });
        });
}

// Example usage:
const array2D = [
    [1, 2, 3],
    [-4, 5, 6],
    [7, -8, 9],
    [10, 11, 12]
];

logRowsWithNegatives(array2D);
