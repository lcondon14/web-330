/**
 * Title: shopping-cart.js
 * Author: Laurel Condon
 * Date: 22 June 2023
 * Description: Shopping cart js for Bobs Auto Repair
 */



export class ShoppingCart {
    constructor() {
        this.products = [];
    }

count() {
    return this.products.length;
}

add(product) {
    this.products.push(product);
}

*[Symbol.iterator]() {
    for (let product of this.products) {
        yield product;
    }
}
};