// Check to make sure its connected
// console.log("hello")
var start = 0;

$(document).ready(function() {
    $('#plus').on('click', function() { 
        let originalNumber = parseInt($("#inputField").val());
        let sum = start+= originalNumber;
        if (sum < 0) {
            $("h1").css("color", "red");
         } else{
            $("h1").css("color", "black");
         }
        $("#output").text(sum);
    });

    $('#minus').on('click', function() { 
        let originalNumber = parseInt($("#inputField").val());
        let sum = start-= originalNumber;
        if (sum < 0) {
            $("h1").css("color", "red");
         } else{
            $("h1").css("color", "black");
         }

        $("#output").text(sum);
    });
});


