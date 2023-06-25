/**
 * Title: product.js
 * Author: Laurel Condon
 * Date: 22 June 2023
 * Description: product js for bobs auto repair
 */




export class Product {
    constructor(name, price) {
        this.id = Math.random().toString(16).slice(2);
        this.name = name;
        this.price = price;
    }
};
