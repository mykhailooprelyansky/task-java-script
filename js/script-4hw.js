// Task number one
// const account = {
//   owner: "Mango",
//   balance: 24000,
//   discount: 0.1,
//   orders: ["order-1", "order-2", "order-3"],
//   changeDiscount(value) {
//     this.discount = value;
//   },
//   showOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost;
//     this.orders.push(order);
//   },
// };

// account.changeDiscount(0.15);
// console.log(account.discount);

// console.table(account.showOrders());

// account.addOrder(5000, "order-4");
// console.log(account.balance);
// console.table(account.showOrders());

// Task number two

const inventory = {
  items: ["Knife", "Gas mask"],
  add(itemName) {
    console.log(`Adding ${itemName} to inventory`);
    this.items.push(itemName);
  },
  remove(itemName) {
    console.log(`Removing ${itemName} from inventory`);
    this.items = this.items.filter((item) => item !== itemName);
  },
};
const invokeInventoryAction = function (itemName, action) {
  console.log(`Invoking action on ${itemName}`);
  action.call(inventory, itemName);
};
invokeInventoryAction("Medkit", inventory.add);

console.log(inventory.items);
invokeInventoryAction("Gas mask", inventory.remove);

console.log(inventory.items);
