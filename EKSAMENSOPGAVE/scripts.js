/*
var arr = [3, 5, 3, 2, 3, 8, 3]; 
var pred1 = 3; 
var pred2 = 2; 
var numbers = []; 

function predetermined() {
    for (var i = 0; i < arr.length; i++) {
        if (arr[0] === 3) {
            var num = arr[i];
            //numbers.splice(index, 0, num); 
            //numbers[num] = numbers[num] ? numbers[num] + 1 : 1; 
            //numbers.push(num); 
            numbers =+ num; 
        }
        return numbers; 
    }
}
console.log(numbers); 
*/

//Funktion
function prede(arr, myArray, num1, num2) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == num1 || arr[i] == num2); {
            var indexNum1 = arr.indexOf(num1); 
            var indexNum2 = arr.indexOf(num2);
            myArray.push(indexNum1, indexNum2); 
        }
        return myArray; 
    }
}
console.log(prede([3, 5, 4, 2], [], 3, 2)); 

//Class
class Fisk {
    constructor(arr, myArray, num1, num2) {
        this.arr = arr; 
        this.myArray = myArray; 
        this.num1 = num1; 
        this.num2 = num2; 
    }
    prede() {
        for (var i = 0; i < this.arr.length; i++) {
            if (this.arr[i] == this.num1 || this.arr[i] == this.num2); {
                //Returnerer første index, hvor elementet forekommer.
                var indexNum1 = this.arr.indexOf(this.num1);
                var indexNum2 = this.arr.indexOf(this.num2); 
                this.myArray.push(indexNum1, indexNum2);
            }
            return this.myArray;
        }
    }
}
fisk1 = new Fisk([3, 5, 4, 2], [], 5, 4); 
console.log(fisk1.prede()); 