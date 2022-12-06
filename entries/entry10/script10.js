$(document).ready(function() {$("#小漩涡").hide(); })
function Read(){

    var l1 = document.getElementById("L1").value;
    var l2 = document.getElementById("L2").value;
    var l3 = document.getElementById("L3").value;
    var l4 = document.getElementById("L4").value;
    var l5 = document.getElementById("L5").value;
    var l6 = document.getElementById("L6").value;
     
    var word = l1+l2+l3+l4+l5+l6;
    if (word != "DAGGER"){
        $(document).ready(function() {$("#小漩涡").hide(); })
    }else{
     $(document).ready(function() {$("#小漩涡").show(); })
     $(document).ready(function() {$("#h1").hide(); })
     $(document).ready(function() {$("#form").hide(); })
    }
 }