const EventEmitter = require('node:events');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const notificationEventEmitter = new EventEmitter();

notificationEventEmitter.on('order-ready', async (eventData) => {
    console.log('\nOrder notification received', eventData);

    // send notification to client

    promptOrderData();
});

function promptOrderData() {
    readline.question('Paste notification data json here:', orderData => {
        const orderDataObject = JSON.parse(orderData);

        notificationEventEmitter.emit('order-ready', orderDataObject);
    });
}

promptOrderData();
