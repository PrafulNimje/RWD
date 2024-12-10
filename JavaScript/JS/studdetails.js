// Students name is ABC XYZ .
// He is enrolled for course FSD Java in Karve Road branch .
// He already completed C Prog, SQL .
// He is passed with 90% in graduation.

function studentDetails(){
    var first = document.getElementById('f1').value
    var last = document.getElementById('l1').value
    var course = document.getElementById('s1').value
    
    var ch1 = document.getElementById('c').checked
    var ch2 = document.getElementById('sql').checked
    var ch3 = document.getElementById('mongodb').checked
    var ch4 = document.getElementById('RWD').checked
    var ch5 = document.getElementById('java').checked

    var center = document.getElementById('c1').value
    var percent = document.getElementById('t1').value
   
    
    var name= first+ " " + last;
    document.getElementById('name').innerHTML = name;
    
    document.getElementById('percent').innerHTML = percent;

    document.getElementById('course').innerHTML = course;

    document.getElementById('center').innerHTML = center;

    var mod=''
    if(ch1 == true){
        mod = mod + document.getElementById('C').value
    }
    if(ch2 == true){
        mod = mod + ', '+ document.getElementById('sql').value
    }
    if(ch3 == true){
        mod =mod + ', '+ document.getElementById('mongodb').value
    }
    if(ch4 == true){
        mod =mod + ', '+ document.getElementById('RWD').value
    }
    if(ch5 == true){
        mod =mod + ', '+ document.getElementById('java').value
    }

    document.getElementById('modules').innerHTML = mod;

    var male = document.getElementById('r1').checked;
    var female = document.getElementById('r1').checked;
    var gender = ''
    if(male == true && female == false){
        gender = 'male'
    }
    else if(male == false && female == true){
        gender = 'female'
    }

    if(gender == 'male'){

    }
}


