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

    if(ageInput == "1"){
      ticketPrice = pricePerKm*kmInput*0.8;
      document.getElementById("offer-type").innerHTML = "Sconto Minorenni";
    } else if (ageInput == "3"){
      ticketPrice = pricePerKm*kmInput*0.6;
      document.getElementById("offer-type").innerHTML = "Sconto Senior";
    } else {
      ticketPrice = pricePerKm*kmInput;
      document.getElementById("offer-type").innerHTML = "Standard";
    }

    console.log(ticketPrice);
    document.getElementById("ticket-price").innerHTML = parseFloat(ticketPrice.toFixed(2));

    var codeRnd = Math.floor(Math.random()*1000)+1;
    document.getElementById("ticket-code").innerHTML = codeRnd;

    var carrozza = 0;
    for(var i=0;i<10;i++){
      if(codeRnd>=(i*100) && codeRnd <(i+1)*100){
        carrozza = i+1;
        document.getElementById("carrozza").innerHTML = carrozza;
      }
    }

    document.getElementById("passenger-name").innerHTML = nameInput;


  } else {
    alert("Inserisci i valori correttamente");
  }

})



var deleteBtn = document.getElementById("delete");

// deleteBtn.addEventListener("click", function(){
//   var canc = document.getElementsByClassName("example color")
//   canc.value = "";
//
// })
