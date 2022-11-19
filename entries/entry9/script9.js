$(document).ready(function() {alert("Input the correct password to find Xue's secret.")})

$(document).ready(function() {$("#保险柜打开").hide(); })
$(document).ready(function() {$("#粉企鹅").hide(); })


function Calculate(){

   var n1 = document.getElementById("N1").value;
   var n2 = document.getElementById("N2").value;
   var n3 = document.getElementById("N3").value;
   var n4 = document.getElementById("N4").value;
   var n5 = document.getElementById("N5").value;
   var n6 = document.getElementById("N6").value;
    
   var sum = n1+n2+n3+n4+n5+n6;
   if (sum != 987122){
    $(document).ready(function() {$("#保险柜打开").hide(); })
   }else{
    $(document).ready(function() {$("#保险柜打开").show(); })
    $(document).ready(function() {$("#保险柜").hide(); })
    $(document).ready(function() {
        $("#保险柜打开").click(function(){$("#粉企鹅").show(); $("#保险柜打开").hide();
                          $("#桌面背景").animate({opacity:'0.1'}) });})
   }
}



