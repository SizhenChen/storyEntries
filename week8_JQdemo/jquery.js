// try playing with this ALERT - 
// $(document).ready(function() {alert("[hello earthlings]"); })

// JS files comment with two backslash lines 
$(document).ready(function() {$("#ufo").draggable(); })

$(document).ready(function() {$("#cat").draggable(); })

$(document).ready(function() {$("#grapes").draggable(); })

$(document).ready(function() {$("#diamond").draggable(); })

$(document).ready(function() {$("#bananas").draggable(); })

$(document).ready(function() {
    $("#cat").click(function(){$("#bananas").hide(); });})

$(document).ready(function() {
    $("#ufo").click(function(){$("#diamond").hide(); });})

$(document).ready(function() {
    $("#grapes").hover(function(){$("#earthling").css("color", "purple"); });})