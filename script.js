$(document).ready(function(){
  //to create maximum amount of numbers in input screen
  var testNumLength = function(number) {
        if (number.length > 9) {
            totaldiv.text(number.substr(number.length,9));
            if (number.length > 15) {
                number = "";
                totaldiv.text("Err");
            }
        }
    };
})
