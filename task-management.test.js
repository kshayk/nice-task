/**
 *      Task 2: Managing asynchronous tasks - Test area
 */

const taskManagement = require( "./task-management");

describe("task-management tests", () => {
    test("test", async () => {
        const tasksResult = await taskManagement.runTasks();
        expect(tasksResult).toHaveLength(3);
        expect(tasksResult[0]).toBe('fulfilled');
        expect(tasksResult[1]).toBe('rejected');
    });
});






