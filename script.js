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
    //creating ouur variables that renders to our total or screen
    var number = "";
  var total=0;
    var newnumber = "";
    var operator = "";
    var totaldiv = $("#total");
    totaldiv.text("0");
    //to render numbers to the DOM and clear numbers
    $("#numbers a").not("#clear,#clearall").click(function(){
   number += $(this).text();
   totaldiv.text(number);
   testNumLength(number);
   });
   //for our operators
   $(" #side > a").not("#equals, #decimal").click(function(){
       operator = $(this).text();
       console.log('operator:', operator);
       newnumber = number;
       number = "";
       totaldiv.text(operator);
   });
   //creating a clear and clearall function
   $("#clear,#clearall").click(function(){
		number = "";
		totaldiv.text("0");
		if ($(this).attr("id") === "clearall") {
			newnumber = "";
		}
    });
    //creating our operators function
    function calculate(total,operator,number){
  var total = 0;
        for (i=0;i<operator.length;i++){
            if(operator===$(this).text()){
            number===number;
            }
        }
        if (operator > 0) {
            number+=total;
            totaldiv.text(number);
        } else {
            number += total;
            totaldiv.text(number);
        testNumLength(number);
        }
  }
  //n finally our equal sign should provide an answer to whatever mathematical operation rendered
  $("#equals").click(function(){
      if (operator === "+"){
    		total = (parseFloat(number, 10) + parseFloat(newnumber,10)).toString(10);
    		totaldiv.text(total);
    	} else if (operator === "-"){
    		total = (parseFloat(newnumber, 10) - parseFloat(number,10)).toString(10);
    		totaldiv.text(total);
    	} else if (operator === "÷"){
    		total = (parseFloat(newnumber, 10) / parseFloat(number,10)).toString(10);
    		totaldiv.text(total);
    	} else if (operator === "×"){
    		total = (parseFloat(newnumber, 10) * parseFloat(number,10)).toString(10);
    		totaldiv.text(total);

            } if (total === "NaN") {
                number = "";
                totaldiv.text("0");
            }

    	totaldiv.text(total);
    	testNumLength(number);
      number="";
      newnumber="";

    });
  return ;
})
