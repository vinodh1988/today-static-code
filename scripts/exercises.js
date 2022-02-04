current="box1";

function toggle(){
    if(current=="box1") {
      document.getElementById("two").innerHTML="<h1> Default Text </h1>";
      document.getElementById("one").innerHTML="";
      current="box2"
    }
    else{
      document.getElementById("one").innerHTML="<h1> Default Text </h1>";
      document.getElementById("two").innerHTML=""; 
      current="box1" 
    }
}