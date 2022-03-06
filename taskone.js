var number =[0,0,0,0,0,0,1]
console.log(number);
 var arr = [];

function box(){
    for(i = number.length -1; i >= 0 ; i--){
         arr += number[i]

    }

    return arr;
}

console.log(box(number));





var number = [1,3,0,5,0,7,0];
var sum = []

function findsum(){
    

    for(var i of number){

        sum += i
    }

    return sum
}

console.log(findsum());

var number = [1,2,0,5];
var sum = []

function findsum(){
    

    for(var i of number){

        sum += i
    }

    return sum
}

console.log(findsum());