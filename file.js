
function getinputval(){
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
//    document.write(fname)
    // alert(fname);
    // document.getElementById("paragraph").innerHTML = 'Your First name is  ' + fname + '.';
    // document.getElementById("paragraphh").innerHTML = 'Your Last name is  ' + lname + '.';
    var a = parseInt(fname)
    var b = parseInt(lname)
    var sumation = a+b

    alert (sumation)
}