const EventEmitter = require('node:events');
const {aggregateBill} = require('./bill');
const {prepareOrder,handleSpecialComments} = require('./chef');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const ordersEventEmitter = new EventEmitter();


// Mocking queue functionality here
ordersEventEmitter.on('place-order', async (eventData) => {
    console.log('\nOrder placed', eventData);
    const {orderData: dishData, tableId, specialComments} = eventData;

    const preparedItems = await prepareOrder(dishData);

    const hasRejected = preparedItems.some(item => item.status === 'rejected');

    if (hasRejected) {
        // handle failed order
        console.error('Order failed');
    }

    const bill = aggregateBill(dishData);
    handleSpecialComments(specialComments);

    const notificationOrderData = [];
    dishData.forEach(order => {
        notificationOrderData.push(...new Array(order.quantity).fill(order.name));
    });

    const notificationData = {
        orderData: notificationOrderData,
        tableId,
        bill
    };

    console.log('\nnotification placed', notificationData)

    const notificationsEventEmitter = new EventEmitter();
    notificationsEventEmitter.emit('order-ready', notificationData);

    promptOrderData();
});

function promptOrderData() {
    readline.question('Paste order data json here:', orderData => {
        const orderDataObject = JSON.parse(orderData);

        ordersEventEmitter.emit('place-order', orderDataObject);
    });
}

promptOrderData();


