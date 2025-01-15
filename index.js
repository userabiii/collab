function subscribe(){
    const buttonElement = document.querySelector('button');
    if(buttonElement.innerHTML=== 'Subscribe'){
        buttonElement.innerHTML = 'Subscribed'
    }
    else{
        buttonElement.innerHTML = 'Subscribe'
    }   
}


var a= 10;
var b= 20;

function add(a,b) {
    console.log(a+b)

}
add()