var yourSelect = document.getElementById("pickedroom"); 
var numberInput = document.querySelector("input[type='number']");




function  getvalue(){
    // prevents reloading after getting data 
    event.preventDefault();
    // get value in options 
    roomname =  yourSelect.options[ yourSelect.selectedIndex].text;
    var totalrooms;
    totalrooms = numberInput.valueAsNumber;    

    if (roomname == 'DeluxeA' || roomname == 'DeluxeB'  || roomname == 'DeluxeC' ){
        totalcost = totalrooms*15000;
        
        document.getElementById('paragraph').innerHTML = "Pay " + totalcost;   
    } 
    else{
        totalcost =  totalrooms*10000;
        console.log(totalcost)
        document.getElementById('paragraph').innerHTML = "pay " + totalcost;  
    } 

}
  