
//hämtar id för knapp, lägger till eventlistener och kallar på funktion
let myBtn = document.getElementById("myBtn").addEventListener("click", myFunction);
//hämtar "p" element och deklarerar variabel för resultat
let para = document.getElementById("resultat")
let result;

//Skapar funktion för att räkna ut  
function myFunction() {
    let tal1 = document.getElementById("num1").value;   //Hämta id för första talet
    let tal2 = document.getElementById("num2").value;   //Hämta id för andra talet
    let val = document.getElementById("val").selectedIndex; //hämtar selected index för select
    let usrChoice = document.getElementsByTagName("option")[val].value; //hämtar nuvarande option för select index
    console.log(usrChoice);                             //kontrollerar så att man får ett värde från option tag


    //Räknar ihop resultat från talen beroende på vilket aritmetisk
    switch (usrChoice)
    {
        case "+": 
            result = Number(tal1) + Number(tal2)
            para.innerHTML = result;
            break;
        
        case "-":
            result = Number(tal1) - Number(tal2)
             para.innerHTML = result;
             break;

         case "/":
             result = Number(tal1) / Number(tal2)
             para.innerHTML = result;
             break;

        case "x":
             result = Number(tal1) * Number(tal2)
             para.innerHTML = result;
             break;
        default: 
        console.log("not a number");        //Om det inte är ett nummer så loggar konsollen ut detta

    }
}
