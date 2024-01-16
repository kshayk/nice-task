const express = require('express');
const {fetchMenu} = require('./dataAdapter');
const EventEmitter = require('node:events');

const app = express();

app.use(express.json());

app.get('/menu', async (req, res) => {
    // pull menu from data source (first check redis, then database)
    const menu = await fetchMenu();
    res.send(menu);
});

app.post('add-menu-item', async (req, res) => {
    const name = req.body.name;
    const price = req.body.price;
    const description = req.body.description;

    // add menu item to database
    const menu = await fetchMenu();
    menu.push({name, price, description});

    res.send(menu);
});

app.post('/place-order', async (req, res) => {
    const orderData = req.body.dishes; // [{"name": "burger", "quantity": 2, "dish_price": 20, preparation_time: 2}, {"name": "fries", "quantity": 1, "dish_price": 10, preparation_time: 3}]
    const tableId = req.body.table_id; // 2
    const userId = req.body.user_id; // 1
    const specialComments = req.body.special_comments; // ["no onions", "extra ketchup"]

    // validate order data against current menu

    // save user id and table id to database

    // send order to orders queue
    const eventEmitter = new EventEmitter();
    eventEmitter.emit('place-order', {orderData, tableId, specialComments});
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});