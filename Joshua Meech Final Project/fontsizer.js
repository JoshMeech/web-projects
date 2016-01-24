/*
   New Perspectives on HTML, CSS, and JavaScript
   Tutorial 13
   Case Problem 1

   Author: Josh Meech
   Date:   1/19/16

   Function List
   =============

   startup()
      Run when the Web page is loaded; applies the onclick
      event handlers to the font buttons.

   resizeText()
      Changes the inline font-size style for the document body,
      based on the value of the font image button being clicked.
	
*/

/* Run the startup function when the browser loads */
window.onload = startup;

function startup() {
	/* Variable contains all page elements that belong to fontsizer class */
	var fontButtons = document.getElementsByClassName("fontsizer");;
	
	/* Loop through the collection and add event handler to run resizeText function */
	for (var i = 0; i < fontButtons.length; i++) {
      fontButtons[i].onclick = resizeText;
   }
}

function resizeText() {
	/* Using the parseFloat() fucntion, store the numeric value of the button being
		clicked in the fontChange variable */
	var fontChange = parseFloat(this.value);
	
	/* Determine whether inline style has been used to set the default document
		body font size. Test the font size of the document body is equal to an empty 
		string. IF it is set the font size to 1.0em */
	if (document.body.style.fontSize == "") {
      document.body.style.fontSize = "1.0em";
   }
	
	/* Use the parseFloat() function to store the numeric value of the document body
		font size in the currentFontSize variable */
	var currentFontSize = parseFloat(document.body.style.fontSize);
	/* Change the document body font size to the text string "current font size" +
		"font change" + "em". where "current font size" is the value of currentFontSize
		variable and "font change" is the value of the fontChange variable */
	document.body.style.fontSize = currentFontSize + fontChange + "em";
	
}