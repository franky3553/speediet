function createFunction1(event){

   if (event.keyCode == 53) {
      let starter1 = document.getElementById("starter1").value; // - - - get starter1 text
      document.getElementById(actual).innerHTML = starter1; // - - - set starter1 text in "actual" cell
   }
}

function createFunction2(event){

   if (event.keyCode == 54) {
      let starter2 = document.getElementById("starter2").value;
      document.getElementById(actual).innerHTML = starter2;
   }
}

function createFunction3(event){

   if (event.keyCode == 53) {
      let main1 = document.getElementById("main1").value;
      document.getElementById(actual).innerHTML = main1;
   }
}

function createFunction4(event){

   if (event.keyCode == 54) {
      let main2 = document.getElementById("main2").value;
      document.getElementById(actual).innerHTML = main2;
   }
}

function createFunction5(event){

   if (event.keyCode == 53) {
      let dessert1 = document.getElementById("dessert1").value;
      document.getElementById(actual).innerHTML = dessert1;
   }
}


function createFunction6(event){

   if (event.keyCode == 54) {
      let dessert2 = document.getElementById("dessert2").value;
      document.getElementById(actual).innerHTML = dessert2;
   }
}

function createFunction7(event){

   if (event.keyCode == 55) {
      document.getElementById(otroA).innerHTML = "   ";
      document.getElementById(otroB).innerHTML = "   ";
      document.getElementById(otroC).innerHTML = "   ";
      
   }
}

function createFunction8(event){

   if (event.keyCode == 56) {
      document.getElementById(otroA).innerHTML = "Absolute";
      document.getElementById(otroB).innerHTML = "Absolute";
      document.getElementById(otroC).innerHTML = "Absolute";
      
   }
}

function createFunction9(event){

   if (event.keyCode == 57) {
      document.getElementById(otroA).innerHTML = "Turmix";
      document.getElementById(otroB).innerHTML = "Turmix";
      document.getElementById(otroC).innerHTML = "Turmix";
      
   }
}

// - - - - - - - - - - - - Functions ROW 1/5 - - - - - - - - - - - -

function pressReaction1A(event) {
   actual = "hab1platA"; // select "actual" cell

   otroA = "hab1platA";
   otroB = "hab1platB";
   otroC = "hab1platC";

   createFunction1(event);
   createFunction2(event);

   createFunction7(event);
   createFunction8(event);
   createFunction9(event);
}

function pressReaction1B(event) {
   actual = "hab1platB";

   otroA = "hab1platA";
   otroB = "hab1platB";
   otroC = "hab1platC";

   createFunction3(event);
   createFunction4(event);

   createFunction7(event);
   createFunction8(event);
   createFunction9(event);
}

function pressReaction1C(event) {
   actual = "hab1platC";

   otroA = "hab1platA";
   otroB = "hab1platB";
   otroC = "hab1platC";

   createFunction5(event);
	createFunction6(event);

   createFunction7(event);
   createFunction8(event);
   createFunction9(event);
}



function pressReaction2A(event) {
   actual = "hab2platA";

   otroA = "hab2platA";
   otroB = "hab2platB";
   otroC = "hab2platC";

   createFunction1(event);
   createFunction2(event);

	createFunction7(event);
	createFunction8(event);
	createFunction9(event);
}

function pressReaction2B(event) {
   actual = "hab2platB";

   otroA = "hab2platA";
   otroB = "hab2platB";
   otroC = "hab2platC";

   createFunction3(event);
   createFunction4(event);

	createFunction7(event);
	createFunction8(event);
	createFunction9(event);
}

function pressReaction2C(event) {
   actual = "hab2platC";

   otroA = "hab2platA";
   otroB = "hab2platB";
   otroC = "hab2platC";

   createFunction5(event);
	createFunction6(event);

	createFunction7(event);
	createFunction8(event);
	createFunction9(event);
}



function pressReaction3A(event) {
   actual = "hab3platA";

   otroA = "hab3platA";
   otroB = "hab3platB";
   otroC = "hab3platC";

   createFunction1(event);
   createFunction2(event);

	createFunction7(event);
	createFunction8(event);
	createFunction9(event);
}

function pressReaction3B(event) {
   actual = "hab3platB";

   otroA = "hab3platA";
   otroB = "hab3platB";
   otroC = "hab3platC";

   createFunction3(event);
   createFunction4(event);

	createFunction7(event);
	createFunction8(event);
	createFunction9(event);
}

function pressReaction3C(event) {
   actual = "hab3platC";

   otroA = "hab3platA";
   otroB = "hab3platB";
   otroC = "hab3platC";

   createFunction5(event);
	createFunction6(event);

	createFunction7(event);
	createFunction8(event);
	createFunction9(event);
}



function pressReaction4A(event) {
   actual = "hab4platA";

   otroA = "hab4platA";
   otroB = "hab4platB";
   otroC = "hab4platC";

   createFunction1(event);
   createFunction2(event);

	createFunction7(event);
	createFunction8(event);
	createFunction9(event);
}

function pressReaction4B(event) {
   actual = "hab4platB";

   otroA = "hab4platA";
   otroB = "hab4platB";
   otroC = "hab4platC";

   createFunction3(event);
   createFunction4(event);

	createFunction7(event);
	createFunction8(event);
	createFunction9(event);
}

function pressReaction4C(event) {
   actual = "hab4platC";

   otroA = "hab4platA";
   otroB = "hab4platB";
   otroC = "hab4platC";


   createFunction5(event);
	createFunction6(event);

	createFunction7(event);
	createFunction8(event);
	createFunction9(event);
}



function pressReaction5A(event) {
   actual = "hab5platA";

   otroA = "hab5platA";
   otroB = "hab5platB";
   otroC = "hab5platC";

   createFunction1(event);
   createFunction2(event);

	createFunction7(event);
	createFunction8(event);
	createFunction9(event);
}

function pressReaction5B(event) {
   actual = "hab5platB";

   otroA = "hab5platA";
   otroB = "hab5platB";
   otroC = "hab5platC";

   createFunction3(event);
   createFunction4(event);

	createFunction7(event);
	createFunction8(event);
	createFunction9(event);
}

function pressReaction5C(event) {
   actual = "hab5platC";

   otroA = "hab5platA";
   otroB = "hab5platB";
   otroC = "hab5platC";

   createFunction5(event);
	createFunction6(event);

	createFunction7(event);
	createFunction8(event);
	createFunction9(event);
}

// - - - - - - - - - - - - Functions ROW 6/10 - - - - - - - - - - - -

function pressReaction6A(event) {
   actual = "hab6platA";

   otroA = "hab6platA";
   otroB = "hab6platB";
   otroC = "hab6platC";

   createFunction1(event);
   createFunction2(event);

	createFunction7(event);
	createFunction8(event);
	createFunction9(event);
}

function pressReaction6B(event) {
   actual = "hab6platB";

   otroA = "hab6platA";
   otroB = "hab6platB";
   otroC = "hab6platC";

   createFunction3(event);
   createFunction4(event);

	createFunction7(event);
	createFunction8(event);
	createFunction9(event);
}

function pressReaction6C(event) {
   actual = "hab6platC";

   otroA = "hab6platA";
   otroB = "hab6platB";
   otroC = "hab6platC";

   createFunction5(event);
	createFunction6(event);

	createFunction7(event);
	createFunction8(event);
	createFunction9(event);
}



function pressReaction7A(event) {
   actual = "hab7platA";

   otroA = "hab7platA";
   otroB = "hab7platB";
   otroC = "hab7platC";

   createFunction1(event);
   createFunction2(event);

	createFunction7(event);
	createFunction8(event);
	createFunction9(event);
}

function pressReaction7B(event) {
   actual = "hab7platB";

   otroA = "hab7platA";
   otroB = "hab7platB";
   otroC = "hab7platC";


   createFunction3(event);
   createFunction4(event);

	createFunction7(event);
	createFunction8(event);
	createFunction9(event);
}

function pressReaction7C(event) {
   actual = "hab7platC";

   otroA = "hab7platA";
   otroB = "hab7platB";
   otroC = "hab7platC";


   createFunction5(event);
	createFunction6(event);

	createFunction7(event);
	createFunction8(event);
	createFunction9(event);
}



function pressReaction8A(event) {
   actual = "hab8platA";

   otroA = "hab8platA";
   otroB = "hab8platB";
   otroC = "hab8platC";

   createFunction1(event);
   createFunction2(event);

	createFunction7(event);
	createFunction8(event);
	createFunction9(event);
}

function pressReaction8B(event) {
   actual = "hab8platB";

   otroA = "hab8platA";
   otroB = "hab8platB";
   otroC = "hab8platC";

   createFunction3(event);
   createFunction4(event);

	createFunction7(event);
	createFunction8(event);
	createFunction9(event);
}

function pressReaction8C(event) {
   actual = "hab8platC";

   otroA = "hab8platA";
   otroB = "hab8platB";
   otroC = "hab8platC";

   createFunction5(event);
	createFunction6(event);
   
	createFunction7(event);
	createFunction8(event);
	createFunction9(event);
}



function pressReaction9A(event) {
   actual = "hab9platA";

   otroA = "hab9platA";
   otroB = "hab9platB";
   otroC = "hab9platC";

   createFunction1(event);
   createFunction2(event);

	createFunction7(event);
	createFunction8(event);
	createFunction9(event);
}

function pressReaction9B(event) {
   actual = "hab9platB";

   otroA = "hab9platA";
   otroB = "hab9platB";
   otroC = "hab9platC";

   createFunction3(event);
   createFunction4(event);

	createFunction7(event);
	createFunction8(event);
	createFunction9(event);
}

function pressReaction9C(event) {
   actual = "hab9platC";

   otroA = "hab9platA";
   otroB = "hab9platB";
   otroC = "hab9platC";


   createFunction5(event);
	createFunction6(event);

	createFunction7(event);
	createFunction8(event);
	createFunction9(event);
}



function pressReaction10A(event) {
   actual = "hab10platA";

   otroA = "hab10platA";
   otroB = "hab10platB";
   otroC = "hab10platC";

   createFunction1(event);
   createFunction2(event);

	createFunction7(event);
	createFunction8(event);
	createFunction9(event);
}

function pressReaction10B(event) {
   actual = "hab10platB";

   otroA = "hab10platA";
   otroB = "hab10platB";
   otroC = "hab10platC";


   createFunction3(event);
   createFunction4(event);

	createFunction7(event);
	createFunction8(event);
	createFunction9(event);
}

function pressReaction10C(event) {
   actual = "hab10platC";

   otroA = "hab10platA";
   otroB = "hab10platB";
   otroC = "hab10platC";


   createFunction5(event);
	createFunction6(event);

	createFunction7(event);
	createFunction8(event);
	createFunction9(event);
}

// - - - - - - - - - - - - Functions ROW 11/15 - - - - - - - - - - - -

function pressReaction11A(event) {
   actual = "hab11platA";

   otroA = "hab11platA";
   otroB = "hab11platB";
   otroC = "hab11platC";

   createFunction1(event);
   createFunction2(event);

	createFunction7(event);
	createFunction8(event);
	createFunction9(event);
}

function pressReaction11B(event) {
   actual = "hab11platB";

   otroA = "hab11platA";
   otroB = "hab11platB";
   otroC = "hab11platC";


   createFunction3(event);
   createFunction4(event);

	createFunction7(event);
	createFunction8(event);
	createFunction9(event);
}

function pressReaction11C(event) {
   actual = "hab11platC";

   otroA = "hab11platA";
   otroB = "hab11platB";
   otroC = "hab11platC";


   createFunction5(event);
	createFunction6(event);

	createFunction7(event);
	createFunction8(event);
	createFunction9(event);
}



function pressReaction12A(event) {
   actual = "hab12platA";

   otroA = "hab12platA";
   otroB = "hab12platB";
   otroC = "hab12platC";

   createFunction1(event);
   createFunction2(event);

	createFunction7(event);
	createFunction8(event);
	createFunction9(event);
}

function pressReaction12B(event) {
   actual = "hab12platB";

   otroA = "hab12platA";
   otroB = "hab12platB";
   otroC = "hab12platC";


   createFunction3(event);
   createFunction4(event);

	createFunction7(event);
	createFunction8(event);
	createFunction9(event);
}

function pressReaction12C(event) {
   actual = "hab12platC";

   otroA = "hab12platA";
   otroB = "hab12platB";
   otroC = "hab12platC";

   createFunction5(event);
	createFunction6(event);

	createFunction7(event);
	createFunction8(event);
	createFunction9(event);
}



function pressReaction13A(event) {
   actual = "hab13platA";

   otroA = "hab13platA";
   otroB = "hab13platB";
   otroC = "hab13platC";

   createFunction1(event);
   createFunction2(event);

	createFunction7(event);
	createFunction8(event);
	createFunction9(event);
}

function pressReaction13B(event) {
   actual = "hab13platB";

   otroA = "hab13platA";
   otroB = "hab13platB";
   otroC = "hab13platC";


   createFunction3(event);
   createFunction4(event);

	createFunction7(event);
	createFunction8(event);
	createFunction9(event);
}

function pressReaction13C(event) {
   actual = "hab13platC";

   otroA = "hab13platA";
   otroB = "hab13platB";
   otroC = "hab13platC";


   createFunction5(event);
	createFunction6(event);

	createFunction7(event);
	createFunction8(event);
	createFunction9(event);
}



function pressReaction14A(event) {
   actual = "hab14platA";

   otroA = "hab14platA";
   otroB = "hab14platB";
   otroC = "hab14platC";

   createFunction1(event);
   createFunction2(event);

	createFunction7(event);
	createFunction8(event);
	createFunction9(event);
}

function pressReaction14B(event) {
   actual = "hab14platB";

   otroA = "hab14platA";
   otroB = "hab14platB";
   otroC = "hab14platC";


   createFunction3(event);
   createFunction4(event);

	createFunction7(event);
	createFunction8(event);
	createFunction9(event);
}

function pressReaction14C(event) {
   actual = "hab14platC";

   otroA = "hab14platA";
   otroB = "hab14platB";
   otroC = "hab14platC";


   createFunction5(event);
	createFunction6(event);

	createFunction7(event);
	createFunction8(event);
	createFunction9(event);
}



function pressReaction15A(event) {
   actual = "hab15platA";

   otroA = "hab15platA";
   otroB = "hab15platB";
   otroC = "hab15platC";

   createFunction1(event);
   createFunction2(event);

	createFunction7(event);
	createFunction8(event);
	createFunction9(event);
}

function pressReaction15B(event) {
   actual = "hab15platB";

   otroA = "hab15platA";
   otroB = "hab15platB";
   otroC = "hab15platC";

   createFunction3(event);
   createFunction4(event);

	createFunction7(event);
	createFunction8(event);
	createFunction9(event);
}

function pressReaction15C(event) {
   actual = "hab15platC";

   otroA = "hab15platA";
   otroB = "hab15platB";
   otroC = "hab15platC";


   createFunction5(event);
	createFunction6(event);

	createFunction7(event);
	createFunction8(event);
	createFunction9(event);
}

// - - - - - - - - - - - - Functions ROW 16/20 - - - - - - - - - - - -

function pressReaction16A(event) {
   actual = "hab16platA";

   otroA = "hab16platA";
   otroB = "hab16platB";
   otroC = "hab16platC";

   createFunction1(event);
   createFunction2(event);

	createFunction7(event);
	createFunction8(event);
	createFunction9(event);
}

function pressReaction16B(event) {
   actual = "hab16platB";

   otroA = "hab16platA";
   otroB = "hab16platB";
   otroC = "hab16platC";


   createFunction3(event);
   createFunction4(event);

	createFunction7(event);
	createFunction8(event);
	createFunction9(event);
}

function pressReaction16C(event) {
   actual = "hab16platC";

   otroA = "hab16platA";
   otroB = "hab16platB";
   otroC = "hab16platC";


   createFunction5(event);
	createFunction6(event);

	createFunction7(event);
	createFunction8(event);
	createFunction9(event);
}



function pressReaction17A(event) {
   actual = "hab17platA";

   otroA = "hab17platA";
   otroB = "hab17platB";
   otroC = "hab17platC";

   createFunction1(event);
   createFunction2(event);

	createFunction7(event);
	createFunction8(event);
	createFunction9(event);
}

function pressReaction17B(event) {
   actual = "hab17platB";

   otroA = "hab17platA";
   otroB = "hab17platB";
   otroC = "hab17platC";


   createFunction3(event);
   createFunction4(event);

	createFunction7(event);
	createFunction8(event);
	createFunction9(event);
}

function pressReaction17C(event) {
   actual = "hab17platC";

   otroA = "hab17platA";
   otroB = "hab17platB";
   otroC = "hab17platC";


   createFunction5(event);
	createFunction6(event);

	createFunction7(event);
	createFunction8(event);
	createFunction9(event);
}



function pressReaction18A(event) {
   actual = "hab18platA";

   otroA = "hab18platA";
   otroB = "hab18platB";
   otroC = "hab18platC";

   createFunction1(event);
   createFunction2(event);

	createFunction7(event);
	createFunction8(event);
	createFunction9(event);
}

function pressReaction18B(event) {
   actual = "hab18platB";

   otroA = "hab18platA";
   otroB = "hab18platB";
   otroC = "hab18platC";


   createFunction3(event);
   createFunction4(event);

	createFunction7(event);
	createFunction8(event);
	createFunction9(event);
}

function pressReaction18C(event) {
   actual = "hab18platC";

   otroA = "hab18platA";
   otroB = "hab18platB";
   otroC = "hab18platC";

   createFunction5(event);
	createFunction6(event);

	createFunction7(event);
	createFunction8(event);
	createFunction9(event);
}



function pressReaction19A(event) {
   actual = "hab19platA";

   otroA = "hab19platA";
   otroB = "hab19platB";
   otroC = "hab19platC";

   createFunction1(event);
   createFunction2(event);

	createFunction7(event);
	createFunction8(event);
	createFunction9(event);
}

function pressReaction19B(event) {
   actual = "hab19platB";

   otroA = "hab19platA";
   otroB = "hab19platB";
   otroC = "hab19platC";

   createFunction3(event);
   createFunction4(event);

	createFunction7(event);
	createFunction8(event);
	createFunction9(event);
}

function pressReaction19C(event) {
   actual = "hab19platC";

   otroA = "hab19platA";
   otroB = "hab19platB";
   otroC = "hab19platC";


   createFunction5(event);
	createFunction6(event);

	createFunction7(event);
	createFunction8(event);
	createFunction9(event);
}



function pressReaction20A(event) {
   actual = "hab20platA";

   otroA = "hab20platA";
   otroB = "hab20platB";
   otroC = "hab20platC";

   createFunction1(event);
   createFunction2(event);

	createFunction7(event);
	createFunction8(event);
	createFunction9(event);
}

function pressReaction20B(event) {
   actual = "hab20platB";

   otroA = "hab20platA";
   otroB = "hab20platB";
   otroC = "hab20platC";


   createFunction3(event);
   createFunction4(event);

	createFunction7(event);
	createFunction8(event);
	createFunction9(event);
}

function pressReaction20C(event) {
   actual = "hab20platC";

   otroA = "hab20platA";
   otroB = "hab20platB";
   otroC = "hab20platC";


   createFunction5(event);
	createFunction6(event);

	createFunction7(event);
	createFunction8(event);
	createFunction9(event);
}

// - - - - - - - - - - - - Functions ROW 21/25 - - - - - - - - - - - -

function pressReaction21A(event) {
   actual = "hab21platA";

   otroA = "hab21platA";
   otroB = "hab21platB";
   otroC = "hab21platC";

   createFunction1(event);
   createFunction2(event);

	createFunction7(event);
	createFunction8(event);
	createFunction9(event);
}

function pressReaction21B(event) {
   actual = "hab21platB";

   otroA = "hab21platA";
   otroB = "hab21platB";
   otroC = "hab21platC";


   createFunction3(event);
   createFunction4(event);

	createFunction7(event);
	createFunction8(event);
	createFunction9(event);
}

function pressReaction21C(event) {
   actual = "hab21platC";

   otroA = "hab21platA";
   otroB = "hab21platB";
   otroC = "hab21platC";

   createFunction5(event);
	createFunction6(event);

	createFunction7(event);
	createFunction8(event);
	createFunction9(event);
}



function pressReaction22A(event) {
   actual = "hab22platA";

   otroA = "hab22platA";
   otroB = "hab22platB";
   otroC = "hab22platC";

   createFunction1(event);
   createFunction2(event);

	createFunction7(event);
	createFunction8(event);
	createFunction9(event);
}

function pressReaction22B(event) {
   actual = "hab22platB";

   otroA = "hab22platA";
   otroB = "hab22platB";
   otroC = "hab22platC";


   createFunction3(event);
   createFunction4(event);

	createFunction7(event);
	createFunction8(event);
	createFunction9(event);
}

function pressReaction22C(event) {
   actual = "hab22platC";

   otroA = "hab22platA";
   otroB = "hab22platB";
   otroC = "hab22platC";


   createFunction5(event);
	createFunction6(event);

	createFunction7(event);
	createFunction8(event);
	createFunction9(event);
}



function pressReaction23A(event) {
   actual = "hab23platA";

   otroA = "hab23platA";
   otroB = "hab23platB";
   otroC = "hab23platC";

   createFunction1(event);
   createFunction2(event);

	createFunction7(event);
	createFunction8(event);
	createFunction9(event);
}

function pressReaction23B(event) {
   actual = "hab23platB";

   otroA = "hab23platA";
   otroB = "hab23platB";
   otroC = "hab23platC";

   createFunction3(event);
   createFunction4(event);

	createFunction7(event);
	createFunction8(event);
	createFunction9(event);
}

function pressReaction23C(event) {
   actual = "hab23platC";

   otroA = "hab23platA";
   otroB = "hab23platB";
   otroC = "hab23platC";

   createFunction5(event);
	createFunction6(event);

	createFunction7(event);
	createFunction8(event);
	createFunction9(event);
}



function pressReaction24A(event) {
   actual = "hab24platA";

   otroA = "hab24platA";
   otroB = "hab24platB";
   otroC = "hab24platC";

   createFunction1(event);
   createFunction2(event);

	createFunction7(event);
	createFunction8(event);
	createFunction9(event);
}

function pressReaction24B(event) {
   actual = "hab24platB";

   otroA = "hab24platA";
   otroB = "hab24platB";
   otroC = "hab24platC";


   createFunction3(event);
   createFunction4(event);

	createFunction7(event);
	createFunction8(event);
	createFunction9(event);
}

function pressReaction24C(event) {
   actual = "hab24platC";

   otroA = "hab24platA";
   otroB = "hab24platB";
   otroC = "habvplatC";

   createFunction5(event);
	createFunction6(event);

	createFunction7(event);
	createFunction8(event);
	createFunction9(event);
}



function pressReaction25A(event) {
   actual = "hab25platA";

   otroA = "hab25platA";
   otroB = "hab25platB";
   otroC = "hab25platC";

   createFunction1(event);
   createFunction2(event);

	createFunction7(event);
	createFunction8(event);
	createFunction9(event);
}

function pressReaction25B(event) {
   actual = "hab25platB";

   otroA = "hab25platA";
   otroB = "hab25platB";
   otroC = "hab25platC";


   createFunction3(event);
   createFunction4(event);

	createFunction7(event);
	createFunction8(event);
	createFunction9(event);
}

function pressReaction25C(event) {
   actual = "hab25platC";

   otroA = "hab25platA";
   otroB = "hab25platB";
   otroC = "hab25platC";

   createFunction5(event);
	createFunction6(event);

	createFunction7(event);
	createFunction8(event);
	createFunction9(event);
}

// - - - - - - - - - - - - Functions ROW 25/30 - - - - - - - - - - - -

function pressReaction26A(event) {
   actual = "hab26platA";

   otroA = "hab26platA";
   otroB = "hab26platB";
   otroC = "hab26platC";

   createFunction1(event);
   createFunction2(event);

	createFunction7(event);
	createFunction8(event);
	createFunction9(event);
}

function pressReaction26B(event) {
   actual = "hab26platB";

   otroA = "hab26platA";
   otroB = "hab26platB";
   otroC = "hab26platC";

   createFunction3(event);
   createFunction4(event);

	createFunction7(event);
	createFunction8(event);
	createFunction9(event);
}

function pressReaction26C(event) {
   actual = "hab26platC";

   otroA = "hab26platA";
   otroB = "hab26platB";
   otroC = "hab26platC";


   createFunction5(event);
	createFunction6(event);

	createFunction7(event);
	createFunction8(event);
	createFunction9(event);
}


function pressReaction27A(event) {
   actual = "hab27platA";

   otroA = "hab27platA";
   otroB = "hab27platB";
   otroC = "hab27platC";

   createFunction1(event);
   createFunction2(event);

	createFunction7(event);
	createFunction8(event);
	createFunction9(event);
}

function pressReaction27B(event) {
   actual = "hab27platB";

   otroA = "hab27platA";
   otroB = "hab27platB";
   otroC = "hab27platC";


   createFunction3(event);
   createFunction4(event);

	createFunction7(event);
	createFunction8(event);
	createFunction9(event);
}

function pressReaction27C(event) {
   actual = "hab27platC";

   otroA = "hab27platA";
   otroB = "hab27platB";
   otroC = "hab27platC";


   createFunction5(event);
	createFunction6(event);

	createFunction7(event);
	createFunction8(event);
	createFunction9(event);
}


function pressReaction28A(event) {
   actual = "hab28platA";

   otroA = "hab28platA";
   otroB = "hab28platB";
   otroC = "hab28platC";

   createFunction1(event);
   createFunction2(event);

	createFunction7(event);
	createFunction8(event);
	createFunction9(event);
}

function pressReaction28B(event) {
   actual = "hab28platB";

   otroA = "hab28platA";
   otroB = "hab28platB";
   otroC = "hab28platC";


   createFunction3(event);
   createFunction4(event);

	createFunction7(event);
	createFunction8(event);
	createFunction9(event);
}

function pressReaction28C(event) {
   actual = "hab28platC";

   otroA = "hab28platA";
   otroB = "hab28platB";
   otroC = "hab28platC";

   createFunction5(event);
	createFunction6(event);

	createFunction7(event);
	createFunction8(event);
	createFunction9(event);
}



function pressReaction29A(event) {
   actual = "hab29platA";

   otroA = "hab29platA";
   otroB = "hab29platB";
   otroC = "hab29platC";

   createFunction1(event);
   createFunction2(event);

	createFunction7(event);
	createFunction8(event);
	createFunction9(event);
}

function pressReaction29B(event) {
   actual = "hab29platB";

   otroA = "hab29platA";
   otroB = "hab29platB";
   otroC = "hab29platC";


   createFunction3(event);
   createFunction4(event);

	createFunction7(event);
	createFunction8(event);
	createFunction9(event);
}

function pressReaction29C(event) {
   actual = "hab29platC";

   otroA = "hab29platA";
   otroB = "hab29platB";
   otroC = "hab29platC";

   createFunction5(event);
	createFunction6(event);

	createFunction7(event);
	createFunction8(event);
	createFunction9(event);
}



function pressReaction30A(event) {
   actual = "hab30platA";

   otroA = "hab30platA";
   otroB = "hab30platB";
   otroC = "hab30platC";

   createFunction1(event);
   createFunction2(event);

	createFunction7(event);
	createFunction8(event);
	createFunction9(event);
}

function pressReaction30B(event) {
   actual = "hab30platB";

   otroA = "hab30platA";
   otroB = "hab30platB";
   otroC = "hab30platC";


   createFunction3(event);
   createFunction4(event);

	createFunction7(event);
	createFunction8(event);
	createFunction9(event);
}

function pressReaction30C(event) {
   actual = "hab30platC";

   otroA = "hab30platA";
   otroB = "hab30platB";
   otroC = "hab30platC";

   createFunction5(event);
	createFunction6(event);

	createFunction7(event);
	createFunction8(event);
	createFunction9(event);
}

// - - - - - - - - - - - - Functions ROW 31/33 - - - - - - - - - - - -

function pressReaction31A(event) {
   actual = "hab31platA";

   otroA = "hab31platA";
   otroB = "hab31platB";
   otroC = "hab31platC";

   createFunction1(event);
   createFunction2(event);

	createFunction7(event);
	createFunction8(event);
	createFunction9(event);
}

function pressReaction31B(event) {
   actual = "hab31platB";

   otroA = "hab31platA";
   otroB = "hab31platB";
   otroC = "hab31platC";


   createFunction3(event);
   createFunction4(event);

	createFunction7(event);
	createFunction8(event);
	createFunction9(event);
}

function pressReaction31C(event) {
   actual = "hab31platC";

   otroA = "hab31platA";
   otroB = "hab31platB";
   otroC = "hab31platC";


   createFunction5(event);
	createFunction6(event);

	createFunction7(event);
	createFunction8(event);
	createFunction9(event);
}


function pressReaction32A(event) {
   actual = "hab32platA";

   otroA = "hab32platA";
   otroB = "hab32platB";
   otroC = "hab32platC";

   createFunction1(event);
   createFunction2(event);

	createFunction7(event);
	createFunction8(event);
	createFunction9(event);
}

function pressReaction32B(event) {
   actual = "hab32platB";

   otroA = "hab32platA";
   otroB = "hab32platB";
   otroC = "hab32platC";

   createFunction3(event);
   createFunction4(event);

	createFunction7(event);
	createFunction8(event);
	createFunction9(event);
}

function pressReaction32C(event) {
   actual = "hab32platC";

   otroA = "hab32platA";
   otroB = "hab32platB";
   otroC = "hab32platC";

   createFunction5(event);
	createFunction6(event);

	createFunction7(event);
	createFunction8(event);
	createFunction9(event);
}



function pressReaction33A(event) {
   actual = "hab33platA";

   otroA = "hab33platA";
   otroB = "hab33platB";
   otroC = "hab33platC";

   createFunction1(event);
   createFunction2(event);

	createFunction7(event);
	createFunction8(event);
	createFunction9(event);
}

function pressReaction33B(event) {
   actual = "hab33platB";

   otroA = "hab33platA";
   otroB = "hab33platB";
   otroC = "hab33platC";


   createFunction3(event);
   createFunction4(event);

	createFunction7(event);
	createFunction8(event);
	createFunction9(event);
}

function pressReaction33C(event) {
   actual = "hab33platC";

   otroA = "hab33platA";
   otroB = "hab33platB";
   otroC = "hab33platC";


   createFunction5(event);
	createFunction6(event);

	createFunction7(event);
	createFunction8(event);
	createFunction9(event);
}