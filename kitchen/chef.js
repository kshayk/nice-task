module.exports.prepareOrder = async (orderData) => {
    return Promise.allSettled(orderData.map(async (item) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                try {
                    resolve(item);
                } catch (error) {
                    reject(error);
                }
            }, item.preparation_time * item.quantity * 1000);
        });
    }));
}

module.exports.handleSpecialComments = (specialComments) => {
    // handle comments
}