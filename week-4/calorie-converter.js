/**
 * Title: calorie-converter.js
 * Author: Laurel Condon
 * Date: 18 June 2023
 * Description: calorie converter js file
 */

import { FoodModel } from "./food-model";

export class CalorieConverter {
    static data = [
        new FoodModel(1007, "Egg", 78),
        new FoodModel(1008, "Apple", 95),
        new FoodModel(1009, "Hamburger", 354),
        new FoodModel(1010, "Fries", 400),
        new FoodModel(1011, "Banana", 105),
        new FoodModel(1012, "Soda", 150),
    ];

    static find(name) {
        let foodlist = this.data.filter((food) => food.name.toLowerCase() === name);
        return foodlist;
    }
}