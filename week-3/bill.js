/**
 * Title: bill.js
 * Author: Laurel Condon
 * Date: 9 June 2023
 * Description: bill.js page for restaurant app
 */

// Class declared for the Bill
export class Bill {
    constructor() {
       this. _beverages = [];
       this. _appetizers = [];
       this. _mainCourses = [];
       this._desserts = [];   
    }
// Adds new beverage
    addBeverage(beverage) {
        this._beverages.push(beverage);
    }
// adds new appetizer    
    addAppetizer(appetizer) {
        this._appetizers.push(appetizer);
    }
// adds new main course    
    addMainCourse(mainCourse) {
        this._mainCourses.push(mainCourse);
    }
//adds new dessert    
    addDessert(dessert) {
        this._desserts.push(dessert);
    }
// function to get total of items 
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

        return total.toFixed(2);
    }
}


