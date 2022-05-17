var yourSelect = document.getElementById("pickedroom"); 

function  getvalue(){
    // prevents reloading after getting data 
    event.preventDefault();
    // get value in options 
    roomname =  yourSelect.options[ yourSelect.selectedIndex].text;
    var numberInput = parseInt(document.querySelector(".numroom"));

    if (roomname == 'DeluxeA' || roomname == 'DeluxeB'  || roomname == 'DeluxeC' ){
        totalcost = numberInput*15000;
        console.log(totalcost)
        document.getElementById('paragraph').innerHTML = "Pay " + totalcost;   
    } 
    else{
        totalcost =  numberInput*10000;
        document.getElementById('paragraph').innerHTML = "pay " + totalcost;  
    } 

}
  