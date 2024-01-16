module.exports.aggregateBill = (orderData) => {
    return orderData.reduce((bill, item) => {
        return bill + (item.dish_price * item.quantity);
    }, 0);
}