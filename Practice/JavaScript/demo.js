function display(){

    var name = document.getElementsByName("name")[0];
    console.log(name);
    var res = document.getElementById("output");

    if(name.value==""){
        res.style.color="red";
        res.innerHTML = "No User Logged In";
    }
    else{
        res.style.color="green";
        res.innerHTML = "Good Morning, " + name.value + "!!!";
        alert("Hello " + name.value + "!");
    }
}