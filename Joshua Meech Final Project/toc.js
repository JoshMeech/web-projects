/*
   New Perspectives on HTML5, CSS, and JavaScript
   Tutorial 14
   Tutorial Case

   Author: Josh Meech
   Date:   1/18/16

   Filename: toc.js


   Function List
   =============

   makeTOC()
      Generates the text of the table of contents
      as a nested list

   createList(source, TOCList, headings)
      Creates a TOC list based on the source document,
      list items are appended to TOCList,
      the list items are based on the element names
      specified in the headings array

   expandCollapse()
      Expands and collapses the nested lists in the TOC

   expandCollapseDoc()
      Expands and collapses the source document to match
      to the TOC

   isHidden(object)
      Determines whether a TOC list item is hidden in the document


*/

/* Generate a table of contents based on h1 through h6
	headings when the page is loaded by the browser */
	window.onload = makeTOC;
	
/* function to generate the TOC as a nested list */
function makeTOC() {
	
	/* Source document on which the TOC is based */
	var source = document.getElementById("doc");
	
	/* Location of the table of contents box */
	var TOC = document.getElementById("toc");
	
	/* Entries i the source document on which the 
		table of contents is based */
	var headings = ["H1", "H2", "H3", "H4", "H5", "H6"];
	
	/* Write a heading in the TOC box */
	TOC.innerHTML = "<h1>Table of Contents</h1>";
	
	/* Create an ordered list element */
	var TOCList = document.createElement("ol");
	
	/* Append the list to the TOC */
	TOC.appendChild(TOCList);
	
	/* Create the list of table of contents entries */
	createList(source, TOCList, headings);
	
}

function createList(source, TOCList, headings) {
	
	/* Store the level of the previous list item
		0 = top level, 1 = 2nd level, 2 = 3rd level, etc. */
		var prevLevel = 0;
		
	/* Keep a running count of the TOC entries from the 
		source document */
	var entryNum = 0;
	
	/* Loop through all of the child nodes of object,
		sibling by sibling until no child nodes are left */
	for (var n = source.firstChild; n != null; n = n.nextSibling) {
		
		/* Determines the heading level (if any) of the current node */
		var nodeLevel = headings.indexOf(n.nodeName);
		
		/* If the node comes from a heading element, create a list item
			and append it to the TOC */
		if (nodeLevel != -1) {
			
			/* Add an id attribute to the element to be used as the target
				of a hypertext link */
			entryNum++;
			if (n.id == "") n.id = "heading" + entryNum;
			
			var listItem = document.createElement("li");
			listItem.id = "TOC" + n.id;
			
			/* Create a link to the heading node in the source document */
			var linkItem = document.createElement("a");
			linkItem.innerHTML = n.innerHTML;
			linkItem.href = "#" + n.id;
			
			/* Append the hypertext link to the TOC list item */
			listItem.appendChild(linkItem);
			
			if (nodeLevel == prevLevel) {
				/* Append the list item to the current list */
				TOCList.appendChild(listItem);
			}
			
			else if (nodeLevel > prevLevel) {
				
				/* Start a new nested list */
				var nestedList = document.createElement("ol");
				nestedList.appendChild(listItem);
				
				/* Create a plus-minus box */
				var plusMinusBox = document.createElement("span");
				plusMinusBox.innerHTML = "-";
				
				/* Insert the plus-minus box directly before
					the last item in the current list */
				TOCList.lastChild.insertBefore(plusMinusBox, TOCList.lastChild.lastChild);
				
				/* Expand and collapse the TOC and the document when
					the plus-minus box is clicked */
				plusMinusBox.onclick = expandCollapse;
				
				/* Append nested list to last item in the current list */
				TOCList.lastChild.appendChild(nestedList);
				
				/* Change the current llst to the nested list */
				TOCList = nestedList;
				
			}
			
			else {
				/* Append the list item to a higher nested list */
				
				/* Calculate the difference between the previous level
					and the higher-order level */
				var levelUp = prevLevel - nodeLevel;
				
				/* Change the current list to the higher-order list */
				for (var i = 1; i <= levelUp; i++) {
					TOCList = TOCList.parentNode.parentNode;
				}
				
				TOCList.appendChild(listItem);
			}
			
			/* Update the previous node level value to the current level */
			prevLevel = nodeLevel;
		}
		
	}

}

function expandCollapse() {
	/* Reference of the nested list that should be hidden
		or displayed */
	var nestedList = this.nextSibling.nextSibling;
	
	if (this.innerHTML == "-") {
		/* Collapse the nested list, hiding the contents
		and changing the character to + */
		this.innerHTML = "+";
		nestedList.style.display = "none";
		
	} else {
		/* Expand the nested list, displaying the contents 
			and changing the character to - */
		this.innerHTML = "-";
		nestedList.style.display = "";
	}
	
	/* Expand and collapse the source document to match
		the table of contents */
	expandCollapseDoc();
}

function expandCollapseDoc() {
	
	var displayStatus = "";
	var source = document.getElementById("doc");
	headings = ["H1", "H2", "H3", "H4", "H5", "H6"];
	
	/* Loop through every page element in the source document */
	for (var n = source.firstChild; n != null; n = n.nextSibling) {
		
		if (headings.indexOf(n.nodeName) != -1) {
			/* Determine the display status of the matching
				TOC list item */
			var TOCentry = document.getElementById("TOC" + n.id);
			if (isHidden(TOCentry)) displayStatus = "none"
			else displayStatus = "";
		}
		
		if (n.nodeType == 1) {
			/* Set the display only if the node represents 
				a page element */
			n.style.display = displayStatus;
		}
	}
}

function isHidden(object) {
	
	/* Move up the node tree from object, return true if a 
		hidden parent node is found, return false is all parent
		nodes are unhidden */
	for (var n = object; n.nodeName != "BODY"; n = n.parentNode) {
		if (n.style.display == "none") return true;
	}
	
	return false;
}