var yourSelect = document.getElementById("pickedroom"); 
var numberofrooms =  parseFloat(document.getElementsByClassName("numroom").value);

 
function  getvalue(){
    // prevents reloading after getting data 
    event.preventDefault();
   
    var roompicked;
     room =  yourSelect.options[ yourSelect.selectedIndex].text;
    if (room == 'DeluxeA'){
        totalcost = numberofrooms*15000;
        document.getElementById('paragraph').innerHTML = "Pay " + totalcost;   
    } 
    else if (room == 'DeluxeB'){
        totalcost = numberofrooms*15000;
        alert(totalcost)
        document.getElementById('paragraph').innerHTML = "pay " + totalcost; 
    }
    else if (room == 'DeluxeC'){
        totalcost = numberofrooms*15000;
        document.getElementById('paragraph').innerHTML = "pay " + totalcost;  
    }else{
        totalcost = numberofrooms*10000;
        alert(totalcost)
        document.getElementById('paragraph').innerHTML = "pay " + totalcost;  
    } 

}
  