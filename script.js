function createFunction1(event){

   if (event.keyCode == 53) {
      let starter1 = document.getElementById("starter1").value; // - - - get starter1 text
      document.getElementById(actual).innerHTML = starter1; // - - - set starter1 text in "actual" cell
   }
} 

function pressReaction1A(event) {
   actual = "hab1platA"; // select "actual" cell
   createFunction1(event);
}