

// var number =[true,false,true,false,true,false]


// function array(){
//     var newArray = []

//     for( var num of number ){
//         newArray += num[true]
       
        
        
//     }

//     return newArray
// }

// console.log(array(number));

function countTrue (arry) {
    var count=0
    for (i=count; i<arry.length; i++){
        if(arry[i]==true)
        count++;
    }
    console.log(count);
}
countTrue([true , true , false , true , false]);