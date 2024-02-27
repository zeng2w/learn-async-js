
function sumRow(row) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let sum = row.reduce((acc, curr) => acc + curr, 0);
            resolve(sum);
        }, 0);
    });
}

function sum2DArrayConcurrently(array2D) {
    return new Promise((resolve) => {
        let rowSumsPromises = array2D.map(row => sumRow(row));

        Promise.all(rowSumsPromises)
            .then(rowSums => {
                let totalSum = rowSums.reduce((acc, curr) => acc + curr, 0);
                resolve(totalSum);
            });
    });
}

const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

sum2DArrayConcurrently(array2D)
    .then(totalSum => console.log(`Total Sum: ${totalSum}`))
    .catch(error => console.error(error));