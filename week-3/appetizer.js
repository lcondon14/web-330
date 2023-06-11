/**
 * Title: condon-appetizer.js
 * Author: Laurel Condon
 * Date: 9 June 2023
 * Description: appetizer.js page for restaurant app
 */

import { Product } from "./product.js";

export class Appetizer extends Product {
    constructor(name, price) {
        super(name, price);
    }
}