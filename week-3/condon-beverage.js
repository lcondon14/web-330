/**
 * Title: condon-beverage.js
 * Author: Laurel Condon
 * Date: 9 June 2023
 * Description: beverage.js for restaurant app
 */

import { Product } from "./condon-product";

export class Beverage extends Product {
    constructor(name, price)
    {
        super(name, price);
    }
}