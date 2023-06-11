/**
 * Title: condon-dessert.js
 * Author: Laurel Condon
 * Date: 9 June 2023
 * Description: dessert.js page for restaurant app
 */

import { Product } from "./condon-product.js";

export class Dessert extends Product {
    constructor(name, price) {
        super(name,price);
    }
}