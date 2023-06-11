/**
 * Title: bill.js
 * Author: Laurel Condon
 * Date: 9 June 2023
 * Description: bill.js page for restaurant app
 */

export class Bill {
    _beverages = [];
    _appetizers = [];
    _mainCourses = [];
    _desserts = [];

    addBeverage(beverage) {
        this._beverages.push(beverage);
    }
    addAppetizer(appetizer) {
        this._appetizers.push(appetizer);
    }
    addMainCourse(mainCourse) {
        this._mainCourses.push(mainCourse);
    }
    addDessert(dessert) {
        this._desserts.push(dessert);
    }

    getTotal() {
        let total = 0;
        let beverageTotal = this._beverages.forEach(function(beverage) {
            total += parseFloat(beverage.price);
        })
        let appetizerTotal = this_appetizers.forEach(function(appetizer) {
            total += parseFloat(appetizer.price);
        })
        let mainCourseTotal = this_mainCourses.forEach(function(mainCourse) {
            total += parseFloat(mainCourse.price);
        })
        let dessertTotal = this._desserts.forEach(function(dessert) {
            total += parseFloat(dessert.price);
        })

        return total
    }
}