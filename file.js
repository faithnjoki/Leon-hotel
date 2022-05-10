
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
function Person(first,last,favcolor,country){
    this.firstname = first;
    this.lastname = last;
    this.favouritecolor = favcolor;
    this.countryofbirth = country;

}
const paul = new Person ('paul','ndemo','blue','kenya');
