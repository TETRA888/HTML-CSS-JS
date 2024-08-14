var number = 5;
var string = 'Hello there';
var isFriendly = true;
var arrayexample = [1,2,3,4,68];

console.log('wows devs');

if(number == 10){
    console.log('the number is 10')
}
else{
    console.log('the number is not 10')
}

document.getElementById("box").innerHTML = number;

function listGroceries(){
    for(var i = 0; i < arrayexample.length; i ++){
        console.log(arrayexample[i])
    }
    console.log('completed')
}

listGroceries();

document.getElementById('box').addEventListener('click',function(){
    alert('this is clicked');
});