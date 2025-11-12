const customer = {
  username: "Mango",
  balance: 24000,
  discount: 0.1,
  orders: ["Burger", "Pizza", "Salad"],
  // Change code below this line
  getBalance() {
    return this.balance;
  },
  getDiscount() {
    return this.discount;
  },
  setDiscount(value) {
    this.discount = value;
  },
  getOrders() {
    return this.orders;
  },
  addOrder(cost, order) {
    this.balance -= cost - cost * this.discount;
    this.orders.push(order);
  },
  // Change code above this line
};

class Storage {
  #items;

  constructor(items) {
    this.#items = items;
  }

  getItems() {
    return this.#items;
  }

  addItem(newItem) {
    this.#items.push(newItem);
  }
  removeItem(itemToRemove) {
    if (this.#items.includes(itemToRemove)) {
      this.#items = this.#items.filter((item) => item !== itemToRemove);
    }
  }
}

class StringBuilder {
  #value;

  constructor(initialValue) {
    this.#value = initialValue;
  }

  getValue() {
    return this.#value;
  }

  padEnd(str) {
    this.#value = `${this.#value}${str}`;
  }

  padStart(str) {
    this.#value = `${str}${this.#value}`;
  }

  padBoth(str) {
    this.#value = `${str}${this.#value}${str}`;
  }
}
