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

function pressReaction1A(event) {
   actual = "hab1platA"; // select "actual" cell

   createFunction1(event);
   createFunction2(event);
}

function pressReaction1B(event) {
   actual = "hab1platB";

   createFunction3(event);
   createFunction4(event);
}