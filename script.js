$(document).ready(function(){
  //to create maximum amount of numbers in input screen
  var testNumLength = function(number) {
        if (number.length > 9 ) {
            totaldiv.text(number.substr(number.length,9));
            if (number.length > 10) {
                number = "";
                totaldiv.text("err");
            }
        }
    };

     var totalDoesOverflow = function(total){
	if (total.length > 9){
	totaldiv.text(total.substr(total.length,9));
	if (total.length > 10){
	   total = '';
	   totaldiv.text("err");
	}
	}
};


  /*
  var checkNan = function(total){

  if ($(this).attr("id") === "equals") {
			total = "";
      totaldiv.text(total)
		}
    })
  };
//for the NAN property
var tocheckNan = function(total){
  if (!isNaN(total)) {
    totaldiv.text('error');
  }
}
var myStr = "NotaNumber";
if (!isNaN(total)) {
  console.log('error');
}
var myNum = 3;

myNum += parseInt(myStr) || 0;
The key is the "|| 0", basically, if parseInt() does not return a number the || operator is invoked
which then returns 0 instead. Very clean and only 3 more characters than norma
    */
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
                totaldiv.text("0")||0;
                return;
            }

    	totaldiv.text(total);
      totalDoesOverflow(total);
      number="";
      newnumber="";

    });
  return ;
})
