
while(prekesKaina <= 0 || isNaN(prekesKaina)){
    var prekesKaina = prompt("Įveskite prekės kainą")
    var prekesKaina = Number(prekesKaina)
    console.log("Prekės kaina: " + prekesKaina.toFixed(2) + "€")
}
if(prekesKaina > 0){
    var pristatymas = confirm("Ar reikalingas pristatymas į namus? (Okay/cancel)")
} if (pristatymas){
    var miestas = prompt("Į kurį miestą reiks pristatyti?")
    var pristatymas = 2
    console.log("Pristatymas: " + pristatymas + "€")
    var suma = pristatymas + prekesKaina
    console.log("Iš viso: " + suma.toFixed(2) + "€")
    console.log("Prekę pristatysime į " + miestas + " per 1-3 dienas.")
} else {
    alert("Prekę galite atsiimti nemokamai Vilniuje adresu Gedimino pr. 1a")
    console.log("Prekę galite atsiimti nemokamai Vilniuje adresu Gedimino pr. 1a")
}


