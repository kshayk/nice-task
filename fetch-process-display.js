/**
 *      Task 1: Code Refactoring
 */

function fetchData() {
    // Simulating asynchronous data fetching
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                resolve('Data - Fetched');
            } catch (error) {
                reject(error);
            }
        }, 1000);
    })
}

function processData(data) {
    // Simulating data processing
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                resolve(data.concat(" - Processed"));
            } catch (error) {
                reject(error);
            }
        }, 1000);
    })
}

function displayData(processedData) {
    // Simulating displaying data
    console.log(processedData.concat(" - Displayed"));
}

fetchData().then(processData).then(result => {
    displayData(result);
}).catch(err => {
    console.error(err)
});


