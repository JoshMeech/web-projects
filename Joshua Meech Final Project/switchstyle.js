/*
   New Perspectives on HTML5, CSS, and JavaScript
   Tutorial 14
   Tutorial Case

   Author: Josh Meech
   Date:   1/18/16

   Filename: switchstyle.js


   Functions List:


   changeStyle(sheet)
      Changes style sheet from the currently active sheet to whatever style sheet
      is clicked by the user from the specified style sheet title indicated by
      the sheet parameter

*/

function changeStyle(sheet) {
	
	/* Loop through all of the link elements */
   var links = document.getElementsByTagName("link");
   for (var i = 0; i < links.length; i++) {

      /* Pick out only the links from preferred or
         alternate style sheets */
      if ( (links[i].rel == "stylesheet" || 
            links[i].rel == "alternate stylesheet") &&
            links[i].hasAttribute("title") ) {

         /* Disable the style sheets whose title does
            not match the sheet parameter */
         if (links[i].title != sheet) links[i].disabled = true
         else links[i].disabled = false;

      }

   }
}

