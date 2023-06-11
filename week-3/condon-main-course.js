/**
 * Title: condon-main-course.js
 * Author: Laurel Condon
 * Date: 4 June 2023
 * Description: main-course.js page for restaurant app
 */

import { Product } from "./condon-product.js";

export class MainCourse extends Product {
    constructor(name, price) {
        super(name, price);
    }
}