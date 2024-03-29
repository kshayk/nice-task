/**
 *      Task 2: Managing asynchronous tasks
 */

function task1() {
    return Promise.resolve('Task 1 completed successfully');
}

function task2() {
    return Promise.reject('Task 2 failed');
}

function task3() {
    return Promise.resolve('Task 3 completed successfully');
}

module.exports.runTasks = async () => {
    const promiseRes = await Promise.allSettled([task1(), task2(), task3()]);
    return promiseRes.map(resObject => resObject.status);
}






