function load(){
    code="Sno: "+document.forms[0].sno.value+"<br/>";
    code+="Name: "+document.forms[0].name.value+"<br/>";
    code+="City: "+document.forms[0].city.value+"<br/>";

    document.getElementById("target").innerHTML=code;
}