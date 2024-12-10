function show(){
    var male = document.getElementsByName("gender")[0];
    var female = document.getElementsByName("gender")[1];
    var other = document.getElementsByName("gender")[2];
    
    var res = document.getElementById("output");

    
    if(male.checked){
        res.style.color = "Green";
        res.innerHTML = male.value;
    }
    else if(female.checked){
        res.style.color = "Green";
        res.innerHTML = female.value;
    }
    else if(other.checked){
        res.style.color = "Green";
        res.innerHTML = other.value;
    }
    else{
        res.style.color = "Red";
        res.innerHTML = "Option Not Selected";
    }
}