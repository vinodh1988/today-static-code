console.log("Hello World")

a=12
b="Rohan"
c='ravi'
d=true
e=34.43

console.log(a,b,c,d,e)

f={sno:1,name:"Rajan"}

console.log(f)

console.log(f.sno)
console.log(f['name'])

f.city="Nagpur"
console.log(f)
//collection of objects
a=[23,23,536,true,"Ram"]

console.log(a)

console.log(f.state)

console.log(a[0])

console.log(typeof(a),typeof(b),typeof(c),typeof(e),typeof(f))

a[90]="Hey"
console.log(a)
console.log(window.a)

console.log(window)

let pics=['mickey.png','superman.png','tom.png']
function changePicture(){
   var index=Math.floor(Math.random()*3)
   document.images[0].src=pics[index];
}

function changePicture1(){
    var index=Math.floor(Math.random()*3)
    document.getElementById("button1").src=pics[index];
 }
 function setValue(){
    document.forms[0].boxcolor.valueg=document.forms[0].original.value;
 }
 function formValidation(){
     
     document.getElementById("validation-message").textContent=""
     var data=document.forms[0].boxcolor.value;

     if(data==undefined || data.length==0)
        document.getElementById("validation-message").textContent="No color is entered";
     
    else
        document.getElementById("image-container").style.backgroundColor=data;
 }
 

setInterval(changePicture1,1000);
