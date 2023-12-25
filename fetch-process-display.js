/**
 *      Task 1: Code Refactoring
 */

function fetchData(callback) {
    // Simulating asynchronous data fetching
    setTimeout(() => {
        try {
            const data = 'Data - Fetched';
            callback(null, data);
        } catch (error) {
            callback(error, null);
        }
    }, 1000);
}

function processData(data, callback) {
    // Simulating data processing
    setTimeout(() => {
        try {
            const processedData = data.concat(" - Processed");
            callback(null, processedData);
        } catch (error) {
            callback(error, null);
        }
    }, 1000);
}

function displayData(processedData) {
    // Simulating displaying data
    console.log(processedData.concat(" - Displayed"));
}

function fetchProcessAndDisplayData() {
    fetchData((error, data) => {
        if (error)
            console.error(error.message);
        else {
            processData(data, (error, processedData) => {
                if (error)
                    console.error(error.message);
                else {
                    displayData(processedData);
                }
            });
        }
    });
}

