/*
	New Perspectives on HTML, CSS, and JavaScript
      
	6-3 Homework: Using Array Methods and Event Handlers to Populate Forms

       
    Author: Josh Meech
    Date:   1/15/16

    Filename:         array.js
    Supporting files: 
	
	Function List:
	
	addToEnd
	removeFromEnd
	addToBeginning
	reverseArray
	writeString
	
	
*/

//4. Add an element to the end of one array.
function addToEnd() {
	
	var names = ["Josh", "Lindsey", "Natalie", "Nala", "Luna"];
		
		for {var i = 0; i < name.length; i++) {
			names.push("Griffin");
	
		}
	
		return names;
}

//5. Remove an element from the end of another array.
function removeFromEnd() {
	
	var numbers = [100];
	
		for {var i = 0; i < numbers.length; i++) {
			numbers.pop(1);
		}
		
		return numbers;
}

//6. Add a new element to the beginning of one array.
function addToBeginning() {
	
	var cars = ["Ford", "Chevrolet", "Toyota", "Dodge", "Nissan", "Jeep"];
	
		for  {var i = 0; i < cars.length; i++) {
			cars.unshift("Mazda");
		}
		
		return cars;
}

//7. Add at least one additional array method of your choice.
function reverseArray() {
		
		return names.reverse();
}

//8. Convert an array to a string.
//9. Use the converted string, assign to a string variable, and use it to populate a form field.
function writeString() {
	
	return numbers.toString();
}

//12. Create an additional button with an event handler to complete the operation in step 10.
function runAll() {
	
	addToEnd();
	removeFromEnd();
	addToBeginning();
	reverseArray();
	writeString();
}