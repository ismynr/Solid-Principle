const Item = require("./Item");
const Order = require("./Order");
const OrderHistory = require("./OrderHistory");
const OrderViewer = require("./OrderViewer");

const item = new Item();

const order = new Order();
order.addItem(item);

const orderViewer = new OrderViewer();
orderViewer.printOrder(order);

const orderHistory = new OrderHistory();
orderHistory.getDailyHistory();