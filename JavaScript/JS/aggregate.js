function add() {
    var num1 = parseInt(document.form1.num1.value);
    var num2 = parseInt(document.form1.num2.value);
    document.form1.ans.value = num1+num2;
}
function sub() {
    var num1 = parseInt(document.form1.num1.value);
    var num2 = parseInt(document.form1.num2.value);
    document.form1.ans.value = num1-num2;
}
function mul() {
    var num1 = parseInt(document.form1.num1.value);
    var num2 = parseInt(document.form1.num2.value);
    document.form1.ans.value = num1*num2;
}
function divide() {
    var num1 = parseInt(document.form1.num1.value);
    var num2 = parseInt(document.form1.num2.value);
    document.form1.ans.value = num1/num2;
}