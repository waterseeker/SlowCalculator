document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('addBtn').addEventListener('click', myAdd);
    document.getElementById('subtractBtn').addEventListener('click', mySubtract);
    document.getElementById('multiplyBtn').addEventListener('click', myMultiply);
    document.getElementById('divideBtn').addEventListener('click', myDivide);

    //on click change text of the add button  to loading
        function loadingTextAdd () {
            addBtn.innerHTML = "<span class='loading'>LOADING</span>";
        }
    document.getElementById('addBtn').addEventListener('click', loadingTextAdd);
    
    
    //on click change text of the subtract button  to loading
        function loadingTextSubtract () {
            subtractBtn.innerHTML = "<span class='loading'>LOADING</span>";
        }
    document.getElementById('subtractBtn').addEventListener('click', loadingTextSubtract);
    
    //on click change text of the multiply button  to loading
        function loadingTextMultiply () {
            multiplyBtn.innerHTML = "<span class='loading'>LOADING</span>";
        }
    document.getElementById('multiplyBtn').addEventListener('click', loadingTextMultiply);
    
    //on click change text of the divide button  to loading
        function loadingTextDivide () {
            divideBtn.innerHTML = "<span class='loading'>LOADING</span>";
        }
    document.getElementById('divideBtn').addEventListener('click', loadingTextDivide);
    
    function myAdd() {
       var x= document.getElementById('firstNum').value;
       var y= document.getElementById('secondNum').value;
   
    //add function
        davidsLib.add(x, y, function(err, result) {
            addBtn.innerHTML = "Add";
            if (err) {
                alert ("A timeout has occurred");
            } else {
                alert (result);
            }
        });
    }

function mySubtract() {
    var x = document.getElementById('firstNum').value;
    var y=document.getElementById('secondNum').value;

    //subtract function
    davidsLib.subtract(x, y, function(err, result) {
        subtractBtn.innerHTML = "Subtract";
        if (err) {
            alert ("A timeout has occurred");
        } else {
            alert (result);
        }
    });
}

function myMultiply() {
    var x = document.getElementById('firstNum').value;
    var y=document.getElementById('secondNum').value;

    //multiply function
    davidsLib.multiply(x, y, function(err, result) {
        multiplyBtn.innerHTML = "Multiply";
        if (err) {
            alert ("A timeout has occurred");
        } else {
            alert (result);
        }
    });

}

function myDivide() {
    var x = document.getElementById('firstNum').value;
    var y=document.getElementById('secondNum').value;

    //divide function
    davidsLib.divide(x, y, function(err, result) {
        divideBtn.innerHTML = "Divide";
        if (err) {
            alert ("A timeout has occurred");
        } else {
            alert (result);
        }
    });

}
//ending tag for page
});