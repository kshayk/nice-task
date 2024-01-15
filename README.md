**Assignment for Code Interview**

&nbsp;
&nbsp;


**Task 1: Code Refactoring**

    Description:
You've been provided with JavaScript file **fetch-process-display.js** which has a set of functions: **fetchData**, **processData**, **displayData**
that simulate asynchronous data fetching, processing, and display. There is also a piece of code that runs those functions in predefined order.
You can just run the **fetch-process-display.js** script to see its output.
Your task is to identify problems with the given code and refactor it according to best practices of asynchronous programming in JavaScript.
During the refactoring process, your main objective is to improve the structure and readability of the code.

    Tasks:
1. Identify the issues presented in the **fetch-process-display.js** file - name as much as possible.
2. Refactor the code
3. Ensure the refactored code retains the same functionality - execution of the script should produce the same output to the console

&nbsp;

    Quick setup
1. Clone the repository and open the **nice-candidate-assignment** project in your IDE
2. Open terminal and run **npm install**
3. If you don't want to use an IDE you can do the assignment in the online editor like: https://playcode.io/

Good luck with the assignment!

&nbsp;
&nbsp;

**Task 2: Managing asynchronous tasks**

    Description:
You've been provided with JavaScript file **task-management.js** which has 3 functions: **task1**, **task2** and **task3**
that simulate asynchronous processing. Function **task2** is failing intentionally. Your goal is to write a new function **runAllTasks(tasks)** that executes those functions in parallel
where *tasks* parameter is a list of functions to be executed.
Once all tasks complete a new function should return the following output:

    [
        'Task 1 completed successfully',
        'Task 2 failed',
        'Task 3 completed successfully'
    ]

During writing a new function you're highly encouraged to write comprehensive unit test to ensure the expected functionality.
Use **task-management.test.js** test file for your convenience.
If you don't want to use an IDE you can do the assignment in the online editor like: https://playcode.io/

Good luck with the assignment!
