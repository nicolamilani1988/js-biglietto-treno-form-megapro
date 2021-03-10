var pricePerKm = 0.21;
var ticketPrice = 0;

// istruzioni per bottone GENERA #create
var createBtn = document.getElementById("create");

createBtn.addEventListener("click", function(){

  var nameInput = document.getElementById("name").value;
  console.log(nameInput);

  var kmInput = parseInt(document.getElementById("km").value);
  console.log(kmInput);

  var ageInput = document.getElementById("age").value;
  console.log(ageInput);

  if(nameInput !== "" && kmInput > 0 && ageInput !== ""){
    // istruzioni per cella offerta + costo biglietto
    var offer = document.getElementById("offer-type");
    if(ageInput == "1"){
      ticketPrice = pricePerKm*kmInput*0.8;
      offer.innerHTML = "Sconto Minorenni";
    } else if (ageInput == "3"){
      ticketPrice = pricePerKm*kmInput*0.6;
      offer.innerHTML = "Sconto Senior";
    } else {
      ticketPrice = pricePerKm*kmInput;
      offer.innerHTML = "Standard";
    }

    console.log(ticketPrice);
    document.getElementById("ticket-price").innerHTML = parseFloat(ticketPrice.toFixed(2));

    // istruzioni per generare codice biglietto random
    var codeRnd = Math.floor(Math.random()*10000)+1;
    document.getElementById("ticket-code").innerHTML = codeRnd;

    // istruzioni per assegnare carrozza al ticket
    var carrozza = 0;
    for(var i=0;i<10;i++){
      if(codeRnd>=(i*1000) && codeRnd <(i+1)*1000){
        carrozza = i+1;
        document.getElementById("carrozza").innerHTML = carrozza;
      }
    }

    // istruzioni per stampare nome
    document.getElementById("passenger-name").innerHTML = nameInput;

  } else {
    alert("Inserisci i valori correttamente"); //alert errore inserimento dati
  }

})



// istruzioni per bottone ANNULLA #delete
var deleteBtn = document.getElementById("delete");

deleteBtn.addEventListener("click", function(){

  document.getElementById("name").value = "";
  document.getElementById("km").value = "";
  document.getElementById("age").value = "";

})
