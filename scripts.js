document.addEventListener("DOMContentLoaded", function(event) { 
var op1 = box1.value;
var op2 = box2.value;

function callback () {
    return result;
};
addBtn.onclick=davidsLib.add(op1, op2, callback);
subtractBtn.onclick=davidsLib.subtract(op1, op2, callback);
multiplyBtn.onclick=davidsLib.multiply(op1, op2, callback);
divideBtn.onclick=davidsLib.divide(op1, op2, callback);
});//end of DOMContentLoaded


//bonus points to get LOADING on the button while the function is running