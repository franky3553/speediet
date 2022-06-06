
// - - - - - - - - - - - - setPlates Functions - - - - - - - - - - - -

function setStarter1(event){

   if (event.keyCode == 53) {
      let starter1 = document.getElementById("starter1").value; // - - - get starter1 text
      document.getElementById(actual).innerHTML = starter1; // - - - set starter1 text in "actual" cell
   }
}

function setStarter2(event){

   if (event.keyCode == 54) {
      let starter2 = document.getElementById("starter2").value;
      document.getElementById(actual).innerHTML = starter2;
   }
}

function setMain1(event){

   if (event.keyCode == 53) {
      let main1 = document.getElementById("main1").value;
      document.getElementById(actual).innerHTML = main1;
   }
}

function setMain2(event){

   if (event.keyCode == 54) {
      let main2 = document.getElementById("main2").value;
      document.getElementById(actual).innerHTML = main2;
   }
}

function setDessert1(event){

   if (event.keyCode == 53) {
      let dessert1 = document.getElementById("dessert1").value;
      document.getElementById(actual).innerHTML = dessert1;
   }
}


function setDessert2(event){

   if (event.keyCode == 54) {
      let dessert2 = document.getElementById("dessert2").value;
      document.getElementById(actual).innerHTML = dessert2;
   }
}

// - - - - - - - - - - - - global Functions - - - - - - - - - - - -

function globalDelete(event){

   if (event.keyCode == 55) {
      document.getElementById(otroA).innerHTML = "   ";
      document.getElementById(otroB).innerHTML = "   ";
      document.getElementById(otroC).innerHTML = "   ";
      
   }
}

function globalAbsolute(event){

   if (event.keyCode == 56) {
      document.getElementById(otroA).innerHTML = "Absolute";
      document.getElementById(otroB).innerHTML = "Absolute";
      document.getElementById(otroC).innerHTML = "Absolute";
      
   }
}

function globalTurmix(event){

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

   setStarter1(event);
   setStarter2(event);

   globalDelete(event);
   globalAbsolute(event);
   globalTurmix(event);
}

function pressReaction1B(event) {
   actual = "hab1platB";

   otroA = "hab1platA";
   otroB = "hab1platB";
   otroC = "hab1platC";

   setMain1(event);
   setMain2(event);

   globalDelete(event);
   globalAbsolute(event);
   globalTurmix(event);
}

function pressReaction1C(event) {
   actual = "hab1platC";

   otroA = "hab1platA";
   otroB = "hab1platB";
   otroC = "hab1platC";

   setDessert1(event);
	setDessert2(event);

   globalDelete(event);
   globalAbsolute(event);
   globalTurmix(event);
}



function pressReaction2A(event) {
   actual = "hab2platA";

   otroA = "hab2platA";
   otroB = "hab2platB";
   otroC = "hab2platC";

   setStarter1(event);
   setStarter2(event);

	globalDelete(event);
	globalAbsolute(event);
	globalTurmix(event);
}

function pressReaction2B(event) {
   actual = "hab2platB";

   otroA = "hab2platA";
   otroB = "hab2platB";
   otroC = "hab2platC";

   setMain1(event);
   setMain2(event);

	globalDelete(event);
	globalAbsolute(event);
	globalTurmix(event);
}

function pressReaction2C(event) {
   actual = "hab2platC";

   otroA = "hab2platA";
   otroB = "hab2platB";
   otroC = "hab2platC";

   setDessert1(event);
	setDessert2(event);

	globalDelete(event);
	globalAbsolute(event);
	globalTurmix(event);
}



function pressReaction3A(event) {
   actual = "hab3platA";

   otroA = "hab3platA";
   otroB = "hab3platB";
   otroC = "hab3platC";

   setStarter1(event);
   setStarter2(event);

	globalDelete(event);
	globalAbsolute(event);
	globalTurmix(event);
}

function pressReaction3B(event) {
   actual = "hab3platB";

   otroA = "hab3platA";
   otroB = "hab3platB";
   otroC = "hab3platC";

   setMain1(event);
   setMain2(event);

	globalDelete(event);
	globalAbsolute(event);
	globalTurmix(event);
}

function pressReaction3C(event) {
   actual = "hab3platC";

   otroA = "hab3platA";
   otroB = "hab3platB";
   otroC = "hab3platC";

   setDessert1(event);
	setDessert2(event);

	globalDelete(event);
	globalAbsolute(event);
	globalTurmix(event);
}



function pressReaction4A(event) {
   actual = "hab4platA";

   otroA = "hab4platA";
   otroB = "hab4platB";
   otroC = "hab4platC";

   setStarter1(event);
   setStarter2(event);

	globalDelete(event);
	globalAbsolute(event);
	globalTurmix(event);
}

function pressReaction4B(event) {
   actual = "hab4platB";

   otroA = "hab4platA";
   otroB = "hab4platB";
   otroC = "hab4platC";

   setMain1(event);
   setMain2(event);

	globalDelete(event);
	globalAbsolute(event);
	globalTurmix(event);
}

function pressReaction4C(event) {
   actual = "hab4platC";

   otroA = "hab4platA";
   otroB = "hab4platB";
   otroC = "hab4platC";


   setDessert1(event);
	setDessert2(event);

	globalDelete(event);
	globalAbsolute(event);
	globalTurmix(event);
}



function pressReaction5A(event) {
   actual = "hab5platA";

   otroA = "hab5platA";
   otroB = "hab5platB";
   otroC = "hab5platC";

   setStarter1(event);
   setStarter2(event);

	globalDelete(event);
	globalAbsolute(event);
	globalTurmix(event);
}

function pressReaction5B(event) {
   actual = "hab5platB";

   otroA = "hab5platA";
   otroB = "hab5platB";
   otroC = "hab5platC";

   setMain1(event);
   setMain2(event);

	globalDelete(event);
	globalAbsolute(event);
	globalTurmix(event);
}

function pressReaction5C(event) {
   actual = "hab5platC";

   otroA = "hab5platA";
   otroB = "hab5platB";
   otroC = "hab5platC";

   setDessert1(event);
	setDessert2(event);

	globalDelete(event);
	globalAbsolute(event);
	globalTurmix(event);
}

// - - - - - - - - - - - - Functions ROW 6/10 - - - - - - - - - - - -

function pressReaction6A(event) {
   actual = "hab6platA";

   otroA = "hab6platA";
   otroB = "hab6platB";
   otroC = "hab6platC";

   setStarter1(event);
   setStarter2(event);

	globalDelete(event);
	globalAbsolute(event);
	globalTurmix(event);
}

function pressReaction6B(event) {
   actual = "hab6platB";

   otroA = "hab6platA";
   otroB = "hab6platB";
   otroC = "hab6platC";

   setMain1(event);
   setMain2(event);

	globalDelete(event);
	globalAbsolute(event);
	globalTurmix(event);
}

function pressReaction6C(event) {
   actual = "hab6platC";

   otroA = "hab6platA";
   otroB = "hab6platB";
   otroC = "hab6platC";

   setDessert1(event);
	setDessert2(event);

	globalDelete(event);
	globalAbsolute(event);
	globalTurmix(event);
}



function pressReaction7A(event) {
   actual = "hab7platA";

   otroA = "hab7platA";
   otroB = "hab7platB";
   otroC = "hab7platC";

   setStarter1(event);
   setStarter2(event);

	globalDelete(event);
	globalAbsolute(event);
	globalTurmix(event);
}

function pressReaction7B(event) {
   actual = "hab7platB";

   otroA = "hab7platA";
   otroB = "hab7platB";
   otroC = "hab7platC";


   setMain1(event);
   setMain2(event);

	globalDelete(event);
	globalAbsolute(event);
	globalTurmix(event);
}

function pressReaction7C(event) {
   actual = "hab7platC";

   otroA = "hab7platA";
   otroB = "hab7platB";
   otroC = "hab7platC";


   setDessert1(event);
	setDessert2(event);

	globalDelete(event);
	globalAbsolute(event);
	globalTurmix(event);
}



function pressReaction8A(event) {
   actual = "hab8platA";

   otroA = "hab8platA";
   otroB = "hab8platB";
   otroC = "hab8platC";

   setStarter1(event);
   setStarter2(event);

	globalDelete(event);
	globalAbsolute(event);
	globalTurmix(event);
}

function pressReaction8B(event) {
   actual = "hab8platB";

   otroA = "hab8platA";
   otroB = "hab8platB";
   otroC = "hab8platC";

   setMain1(event);
   setMain2(event);

	globalDelete(event);
	globalAbsolute(event);
	globalTurmix(event);
}

function pressReaction8C(event) {
   actual = "hab8platC";

   otroA = "hab8platA";
   otroB = "hab8platB";
   otroC = "hab8platC";

   setDessert1(event);
	setDessert2(event);
   
	globalDelete(event);
	globalAbsolute(event);
	globalTurmix(event);
}



function pressReaction9A(event) {
   actual = "hab9platA";

   otroA = "hab9platA";
   otroB = "hab9platB";
   otroC = "hab9platC";

   setStarter1(event);
   setStarter2(event);

	globalDelete(event);
	globalAbsolute(event);
	globalTurmix(event);
}

function pressReaction9B(event) {
   actual = "hab9platB";

   otroA = "hab9platA";
   otroB = "hab9platB";
   otroC = "hab9platC";

   setMain1(event);
   setMain2(event);

	globalDelete(event);
	globalAbsolute(event);
	globalTurmix(event);
}

function pressReaction9C(event) {
   actual = "hab9platC";

   otroA = "hab9platA";
   otroB = "hab9platB";
   otroC = "hab9platC";


   setDessert1(event);
	setDessert2(event);

	globalDelete(event);
	globalAbsolute(event);
	globalTurmix(event);
}



function pressReaction10A(event) {
   actual = "hab10platA";

   otroA = "hab10platA";
   otroB = "hab10platB";
   otroC = "hab10platC";

   setStarter1(event);
   setStarter2(event);

	globalDelete(event);
	globalAbsolute(event);
	globalTurmix(event);
}

function pressReaction10B(event) {
   actual = "hab10platB";

   otroA = "hab10platA";
   otroB = "hab10platB";
   otroC = "hab10platC";


   setMain1(event);
   setMain2(event);

	globalDelete(event);
	globalAbsolute(event);
	globalTurmix(event);
}

function pressReaction10C(event) {
   actual = "hab10platC";

   otroA = "hab10platA";
   otroB = "hab10platB";
   otroC = "hab10platC";


   setDessert1(event);
	setDessert2(event);

	globalDelete(event);
	globalAbsolute(event);
	globalTurmix(event);
}

// - - - - - - - - - - - - Functions ROW 11/15 - - - - - - - - - - - -

function pressReaction11A(event) {
   actual = "hab11platA";

   otroA = "hab11platA";
   otroB = "hab11platB";
   otroC = "hab11platC";

   setStarter1(event);
   setStarter2(event);

	globalDelete(event);
	globalAbsolute(event);
	globalTurmix(event);
}

function pressReaction11B(event) {
   actual = "hab11platB";

   otroA = "hab11platA";
   otroB = "hab11platB";
   otroC = "hab11platC";


   setMain1(event);
   setMain2(event);

	globalDelete(event);
	globalAbsolute(event);
	globalTurmix(event);
}

function pressReaction11C(event) {
   actual = "hab11platC";

   otroA = "hab11platA";
   otroB = "hab11platB";
   otroC = "hab11platC";


   setDessert1(event);
	setDessert2(event);

	globalDelete(event);
	globalAbsolute(event);
	globalTurmix(event);
}



function pressReaction12A(event) {
   actual = "hab12platA";

   otroA = "hab12platA";
   otroB = "hab12platB";
   otroC = "hab12platC";

   setStarter1(event);
   setStarter2(event);

	globalDelete(event);
	globalAbsolute(event);
	globalTurmix(event);
}

function pressReaction12B(event) {
   actual = "hab12platB";

   otroA = "hab12platA";
   otroB = "hab12platB";
   otroC = "hab12platC";


   setMain1(event);
   setMain2(event);

	globalDelete(event);
	globalAbsolute(event);
	globalTurmix(event);
}

function pressReaction12C(event) {
   actual = "hab12platC";

   otroA = "hab12platA";
   otroB = "hab12platB";
   otroC = "hab12platC";

   setDessert1(event);
	setDessert2(event);

	globalDelete(event);
	globalAbsolute(event);
	globalTurmix(event);
}



function pressReaction13A(event) {
   actual = "hab13platA";

   otroA = "hab13platA";
   otroB = "hab13platB";
   otroC = "hab13platC";

   setStarter1(event);
   setStarter2(event);

	globalDelete(event);
	globalAbsolute(event);
	globalTurmix(event);
}

function pressReaction13B(event) {
   actual = "hab13platB";

   otroA = "hab13platA";
   otroB = "hab13platB";
   otroC = "hab13platC";


   setMain1(event);
   setMain2(event);

	globalDelete(event);
	globalAbsolute(event);
	globalTurmix(event);
}

function pressReaction13C(event) {
   actual = "hab13platC";

   otroA = "hab13platA";
   otroB = "hab13platB";
   otroC = "hab13platC";


   setDessert1(event);
	setDessert2(event);

	globalDelete(event);
	globalAbsolute(event);
	globalTurmix(event);
}



function pressReaction14A(event) {
   actual = "hab14platA";

   otroA = "hab14platA";
   otroB = "hab14platB";
   otroC = "hab14platC";

   setStarter1(event);
   setStarter2(event);

	globalDelete(event);
	globalAbsolute(event);
	globalTurmix(event);
}

function pressReaction14B(event) {
   actual = "hab14platB";

   otroA = "hab14platA";
   otroB = "hab14platB";
   otroC = "hab14platC";


   setMain1(event);
   setMain2(event);

	globalDelete(event);
	globalAbsolute(event);
	globalTurmix(event);
}

function pressReaction14C(event) {
   actual = "hab14platC";

   otroA = "hab14platA";
   otroB = "hab14platB";
   otroC = "hab14platC";


   setDessert1(event);
	setDessert2(event);

	globalDelete(event);
	globalAbsolute(event);
	globalTurmix(event);
}



function pressReaction15A(event) {
   actual = "hab15platA";

   otroA = "hab15platA";
   otroB = "hab15platB";
   otroC = "hab15platC";

   setStarter1(event);
   setStarter2(event);

	globalDelete(event);
	globalAbsolute(event);
	globalTurmix(event);
}

function pressReaction15B(event) {
   actual = "hab15platB";

   otroA = "hab15platA";
   otroB = "hab15platB";
   otroC = "hab15platC";

   setMain1(event);
   setMain2(event);

	globalDelete(event);
	globalAbsolute(event);
	globalTurmix(event);
}

function pressReaction15C(event) {
   actual = "hab15platC";

   otroA = "hab15platA";
   otroB = "hab15platB";
   otroC = "hab15platC";


   setDessert1(event);
	setDessert2(event);

	globalDelete(event);
	globalAbsolute(event);
	globalTurmix(event);
}

// - - - - - - - - - - - - Functions ROW 16/20 - - - - - - - - - - - -

function pressReaction16A(event) {
   actual = "hab16platA";

   otroA = "hab16platA";
   otroB = "hab16platB";
   otroC = "hab16platC";

   setStarter1(event);
   setStarter2(event);

	globalDelete(event);
	globalAbsolute(event);
	globalTurmix(event);
}

function pressReaction16B(event) {
   actual = "hab16platB";

   otroA = "hab16platA";
   otroB = "hab16platB";
   otroC = "hab16platC";


   setMain1(event);
   setMain2(event);

	globalDelete(event);
	globalAbsolute(event);
	globalTurmix(event);
}

function pressReaction16C(event) {
   actual = "hab16platC";

   otroA = "hab16platA";
   otroB = "hab16platB";
   otroC = "hab16platC";


   setDessert1(event);
	setDessert2(event);

	globalDelete(event);
	globalAbsolute(event);
	globalTurmix(event);
}



function pressReaction17A(event) {
   actual = "hab17platA";

   otroA = "hab17platA";
   otroB = "hab17platB";
   otroC = "hab17platC";

   setStarter1(event);
   setStarter2(event);

	globalDelete(event);
	globalAbsolute(event);
	globalTurmix(event);
}

function pressReaction17B(event) {
   actual = "hab17platB";

   otroA = "hab17platA";
   otroB = "hab17platB";
   otroC = "hab17platC";


   setMain1(event);
   setMain2(event);

	globalDelete(event);
	globalAbsolute(event);
	globalTurmix(event);
}

function pressReaction17C(event) {
   actual = "hab17platC";

   otroA = "hab17platA";
   otroB = "hab17platB";
   otroC = "hab17platC";


   setDessert1(event);
	setDessert2(event);

	globalDelete(event);
	globalAbsolute(event);
	globalTurmix(event);
}



function pressReaction18A(event) {
   actual = "hab18platA";

   otroA = "hab18platA";
   otroB = "hab18platB";
   otroC = "hab18platC";

   setStarter1(event);
   setStarter2(event);

	globalDelete(event);
	globalAbsolute(event);
	globalTurmix(event);
}

function pressReaction18B(event) {
   actual = "hab18platB";

   otroA = "hab18platA";
   otroB = "hab18platB";
   otroC = "hab18platC";


   setMain1(event);
   setMain2(event);

	globalDelete(event);
	globalAbsolute(event);
	globalTurmix(event);
}

function pressReaction18C(event) {
   actual = "hab18platC";

   otroA = "hab18platA";
   otroB = "hab18platB";
   otroC = "hab18platC";

   setDessert1(event);
	setDessert2(event);

	globalDelete(event);
	globalAbsolute(event);
	globalTurmix(event);
}



function pressReaction19A(event) {
   actual = "hab19platA";

   otroA = "hab19platA";
   otroB = "hab19platB";
   otroC = "hab19platC";

   setStarter1(event);
   setStarter2(event);

	globalDelete(event);
	globalAbsolute(event);
	globalTurmix(event);
}

function pressReaction19B(event) {
   actual = "hab19platB";

   otroA = "hab19platA";
   otroB = "hab19platB";
   otroC = "hab19platC";

   setMain1(event);
   setMain2(event);

	globalDelete(event);
	globalAbsolute(event);
	globalTurmix(event);
}

function pressReaction19C(event) {
   actual = "hab19platC";

   otroA = "hab19platA";
   otroB = "hab19platB";
   otroC = "hab19platC";


   setDessert1(event);
	setDessert2(event);

	globalDelete(event);
	globalAbsolute(event);
	globalTurmix(event);
}



function pressReaction20A(event) {
   actual = "hab20platA";

   otroA = "hab20platA";
   otroB = "hab20platB";
   otroC = "hab20platC";

   setStarter1(event);
   setStarter2(event);

	globalDelete(event);
	globalAbsolute(event);
	globalTurmix(event);
}

function pressReaction20B(event) {
   actual = "hab20platB";

   otroA = "hab20platA";
   otroB = "hab20platB";
   otroC = "hab20platC";


   setMain1(event);
   setMain2(event);

	globalDelete(event);
	globalAbsolute(event);
	globalTurmix(event);
}

function pressReaction20C(event) {
   actual = "hab20platC";

   otroA = "hab20platA";
   otroB = "hab20platB";
   otroC = "hab20platC";


   setDessert1(event);
	setDessert2(event);

	globalDelete(event);
	globalAbsolute(event);
	globalTurmix(event);
}

// - - - - - - - - - - - - Functions ROW 21/25 - - - - - - - - - - - -

function pressReaction21A(event) {
   actual = "hab21platA";

   otroA = "hab21platA";
   otroB = "hab21platB";
   otroC = "hab21platC";

   setStarter1(event);
   setStarter2(event);

	globalDelete(event);
	globalAbsolute(event);
	globalTurmix(event);
}

function pressReaction21B(event) {
   actual = "hab21platB";

   otroA = "hab21platA";
   otroB = "hab21platB";
   otroC = "hab21platC";


   setMain1(event);
   setMain2(event);

	globalDelete(event);
	globalAbsolute(event);
	globalTurmix(event);
}

function pressReaction21C(event) {
   actual = "hab21platC";

   otroA = "hab21platA";
   otroB = "hab21platB";
   otroC = "hab21platC";

   setDessert1(event);
	setDessert2(event);

	globalDelete(event);
	globalAbsolute(event);
	globalTurmix(event);
}



function pressReaction22A(event) {
   actual = "hab22platA";

   otroA = "hab22platA";
   otroB = "hab22platB";
   otroC = "hab22platC";

   setStarter1(event);
   setStarter2(event);

	globalDelete(event);
	globalAbsolute(event);
	globalTurmix(event);
}

function pressReaction22B(event) {
   actual = "hab22platB";

   otroA = "hab22platA";
   otroB = "hab22platB";
   otroC = "hab22platC";


   setMain1(event);
   setMain2(event);

	globalDelete(event);
	globalAbsolute(event);
	globalTurmix(event);
}

function pressReaction22C(event) {
   actual = "hab22platC";

   otroA = "hab22platA";
   otroB = "hab22platB";
   otroC = "hab22platC";


   setDessert1(event);
	setDessert2(event);

	globalDelete(event);
	globalAbsolute(event);
	globalTurmix(event);
}



function pressReaction23A(event) {
   actual = "hab23platA";

   otroA = "hab23platA";
   otroB = "hab23platB";
   otroC = "hab23platC";

   setStarter1(event);
   setStarter2(event);

	globalDelete(event);
	globalAbsolute(event);
	globalTurmix(event);
}

function pressReaction23B(event) {
   actual = "hab23platB";

   otroA = "hab23platA";
   otroB = "hab23platB";
   otroC = "hab23platC";

   setMain1(event);
   setMain2(event);

	globalDelete(event);
	globalAbsolute(event);
	globalTurmix(event);
}

function pressReaction23C(event) {
   actual = "hab23platC";

   otroA = "hab23platA";
   otroB = "hab23platB";
   otroC = "hab23platC";

   setDessert1(event);
	setDessert2(event);

	globalDelete(event);
	globalAbsolute(event);
	globalTurmix(event);
}



function pressReaction24A(event) {
   actual = "hab24platA";

   otroA = "hab24platA";
   otroB = "hab24platB";
   otroC = "hab24platC";

   setStarter1(event);
   setStarter2(event);

	globalDelete(event);
	globalAbsolute(event);
	globalTurmix(event);
}

function pressReaction24B(event) {
   actual = "hab24platB";

   otroA = "hab24platA";
   otroB = "hab24platB";
   otroC = "hab24platC";


   setMain1(event);
   setMain2(event);

	globalDelete(event);
	globalAbsolute(event);
	globalTurmix(event);
}

function pressReaction24C(event) {
   actual = "hab24platC";

   otroA = "hab24platA";
   otroB = "hab24platB";
   otroC = "hab24platC";

   setDessert1(event);
	setDessert2(event);

	globalDelete(event);
	globalAbsolute(event);
	globalTurmix(event);
}



function pressReaction25A(event) {
   actual = "hab25platA";

   otroA = "hab25platA";
   otroB = "hab25platB";
   otroC = "hab25platC";

   setStarter1(event);
   setStarter2(event);

	globalDelete(event);
	globalAbsolute(event);
	globalTurmix(event);
}

function pressReaction25B(event) {
   actual = "hab25platB";

   otroA = "hab25platA";
   otroB = "hab25platB";
   otroC = "hab25platC";


   setMain1(event);
   setMain2(event);

	globalDelete(event);
	globalAbsolute(event);
	globalTurmix(event);
}

function pressReaction25C(event) {
   actual = "hab25platC";

   otroA = "hab25platA";
   otroB = "hab25platB";
   otroC = "hab25platC";

   setDessert1(event);
	setDessert2(event);

	globalDelete(event);
	globalAbsolute(event);
	globalTurmix(event);
}

// - - - - - - - - - - - - Functions ROW 25/30 - - - - - - - - - - - -

function pressReaction26A(event) {
   actual = "hab26platA";

   otroA = "hab26platA";
   otroB = "hab26platB";
   otroC = "hab26platC";

   setStarter1(event);
   setStarter2(event);

	globalDelete(event);
	globalAbsolute(event);
	globalTurmix(event);
}

function pressReaction26B(event) {
   actual = "hab26platB";

   otroA = "hab26platA";
   otroB = "hab26platB";
   otroC = "hab26platC";

   setMain1(event);
   setMain2(event);

	globalDelete(event);
	globalAbsolute(event);
	globalTurmix(event);
}

function pressReaction26C(event) {
   actual = "hab26platC";

   otroA = "hab26platA";
   otroB = "hab26platB";
   otroC = "hab26platC";


   setDessert1(event);
	setDessert2(event);

	globalDelete(event);
	globalAbsolute(event);
	globalTurmix(event);
}


function pressReaction27A(event) {
   actual = "hab27platA";

   otroA = "hab27platA";
   otroB = "hab27platB";
   otroC = "hab27platC";

   setStarter1(event);
   setStarter2(event);

	globalDelete(event);
	globalAbsolute(event);
	globalTurmix(event);
}

function pressReaction27B(event) {
   actual = "hab27platB";

   otroA = "hab27platA";
   otroB = "hab27platB";
   otroC = "hab27platC";


   setMain1(event);
   setMain2(event);

	globalDelete(event);
	globalAbsolute(event);
	globalTurmix(event);
}

function pressReaction27C(event) {
   actual = "hab27platC";

   otroA = "hab27platA";
   otroB = "hab27platB";
   otroC = "hab27platC";


   setDessert1(event);
	setDessert2(event);

	globalDelete(event);
	globalAbsolute(event);
	globalTurmix(event);
}


function pressReaction28A(event) {
   actual = "hab28platA";

   otroA = "hab28platA";
   otroB = "hab28platB";
   otroC = "hab28platC";

   setStarter1(event);
   setStarter2(event);

	globalDelete(event);
	globalAbsolute(event);
	globalTurmix(event);
}

function pressReaction28B(event) {
   actual = "hab28platB";

   otroA = "hab28platA";
   otroB = "hab28platB";
   otroC = "hab28platC";


   setMain1(event);
   setMain2(event);

	globalDelete(event);
	globalAbsolute(event);
	globalTurmix(event);
}

function pressReaction28C(event) {
   actual = "hab28platC";

   otroA = "hab28platA";
   otroB = "hab28platB";
   otroC = "hab28platC";

   setDessert1(event);
	setDessert2(event);

	globalDelete(event);
	globalAbsolute(event);
	globalTurmix(event);
}



function pressReaction29A(event) {
   actual = "hab29platA";

   otroA = "hab29platA";
   otroB = "hab29platB";
   otroC = "hab29platC";

   setStarter1(event);
   setStarter2(event);

	globalDelete(event);
	globalAbsolute(event);
	globalTurmix(event);
}

function pressReaction29B(event) {
   actual = "hab29platB";

   otroA = "hab29platA";
   otroB = "hab29platB";
   otroC = "hab29platC";


   setMain1(event);
   setMain2(event);

	globalDelete(event);
	globalAbsolute(event);
	globalTurmix(event);
}

function pressReaction29C(event) {
   actual = "hab29platC";

   otroA = "hab29platA";
   otroB = "hab29platB";
   otroC = "hab29platC";

   setDessert1(event);
	setDessert2(event);

	globalDelete(event);
	globalAbsolute(event);
	globalTurmix(event);
}



function pressReaction30A(event) {
   actual = "hab30platA";

   otroA = "hab30platA";
   otroB = "hab30platB";
   otroC = "hab30platC";

   setStarter1(event);
   setStarter2(event);

	globalDelete(event);
	globalAbsolute(event);
	globalTurmix(event);
}

function pressReaction30B(event) {
   actual = "hab30platB";

   otroA = "hab30platA";
   otroB = "hab30platB";
   otroC = "hab30platC";


   setMain1(event);
   setMain2(event);

	globalDelete(event);
	globalAbsolute(event);
	globalTurmix(event);
}

function pressReaction30C(event) {
   actual = "hab30platC";

   otroA = "hab30platA";
   otroB = "hab30platB";
   otroC = "hab30platC";

   setDessert1(event);
	setDessert2(event);

	globalDelete(event);
	globalAbsolute(event);
	globalTurmix(event);
}

// - - - - - - - - - - - - Functions ROW 31/33 - - - - - - - - - - - -

function pressReaction31A(event) {
   actual = "hab31platA";

   otroA = "hab31platA";
   otroB = "hab31platB";
   otroC = "hab31platC";

   setStarter1(event);
   setStarter2(event);

	globalDelete(event);
	globalAbsolute(event);
	globalTurmix(event);
}

function pressReaction31B(event) {
   actual = "hab31platB";

   otroA = "hab31platA";
   otroB = "hab31platB";
   otroC = "hab31platC";


   setMain1(event);
   setMain2(event);

	globalDelete(event);
	globalAbsolute(event);
	globalTurmix(event);
}

function pressReaction31C(event) {
   actual = "hab31platC";

   otroA = "hab31platA";
   otroB = "hab31platB";
   otroC = "hab31platC";


   setDessert1(event);
	setDessert2(event);

	globalDelete(event);
	globalAbsolute(event);
	globalTurmix(event);
}


function pressReaction32A(event) {
   actual = "hab32platA";

   otroA = "hab32platA";
   otroB = "hab32platB";
   otroC = "hab32platC";

   setStarter1(event);
   setStarter2(event);

	globalDelete(event);
	globalAbsolute(event);
	globalTurmix(event);
}

function pressReaction32B(event) {
   actual = "hab32platB";

   otroA = "hab32platA";
   otroB = "hab32platB";
   otroC = "hab32platC";

   setMain1(event);
   setMain2(event);

	globalDelete(event);
	globalAbsolute(event);
	globalTurmix(event);
}

function pressReaction32C(event) {
   actual = "hab32platC";

   otroA = "hab32platA";
   otroB = "hab32platB";
   otroC = "hab32platC";

   setDessert1(event);
	setDessert2(event);

	globalDelete(event);
	globalAbsolute(event);
	globalTurmix(event);
}



function pressReaction33A(event) {
   actual = "hab33platA";

   otroA = "hab33platA";
   otroB = "hab33platB";
   otroC = "hab33platC";

   setStarter1(event);
   setStarter2(event);

	globalDelete(event);
	globalAbsolute(event);
	globalTurmix(event);
}

function pressReaction33B(event) {
   actual = "hab33platB";

   otroA = "hab33platA";
   otroB = "hab33platB";
   otroC = "hab33platC";


   setMain1(event);
   setMain2(event);

	globalDelete(event);
	globalAbsolute(event);
	globalTurmix(event);
}

function pressReaction33C(event) {
   actual = "hab33platC";

   otroA = "hab33platA";
   otroB = "hab33platB";
   otroC = "hab33platC";


   setDessert1(event);
	setDessert2(event);

	globalDelete(event);
	globalAbsolute(event);
	globalTurmix(event);
}

// - - - - - - - - - - - - Print Function - - - - - - - - - - - -

function printFunction() { 
   window.print(); 
 }