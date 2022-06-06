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

function pressReaction1A(event) {
   actual = "hab1platA"; // select "actual" cell

   otroA = "hab1platA";
   otroB = "hab1platB";
   otroC = "hab1platC";

   createFunction1(event);
   createFunction2(event);

   createFunction7(event);
   createFunction8(event);
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
}