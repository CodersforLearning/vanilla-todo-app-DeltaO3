// Selectors?
const taskName = document.getElementById("taskName");
const taskAdd = document.getElementById("taskAdd"); //When submitted a task
const taskLength = document.getElementById("incomplete").getElementsByTagName("li");
const completeLength = document.getElementById("complete").getElementsByTagName("li");
const taskList = document.getElementById("incomplete");
const completeList = document.getElementById("complete");

//Main function
const addToList = (e) => {
	e.preventDefault();
	if(taskName.value == "") {
		alert("Empty task.");
		return;
	} 
	//Add the element
	const li = document.createElement("li");
	// Child: Ul.li.value is the full tree structure ( i believe)
	li.appendChild(document.createTextNode(taskName.value));
	taskList.appendChild(li);
	taskName.value = "";
	console.log(taskLength.length);

	//add buttons
	taskSelect = document.createElement("button");
	taskSelect.className = "select";
	taskSelect.innerHTML = "\u2713";
	li.appendChild(taskSelect);
	taskDelete = document.createElement("button");
	taskDelete.className = "delete";
	taskDelete.innerHTML = "\u{1F5D1}";
	li.appendChild(taskDelete);


	/*Delete tasks - cant seem to move this function outside (bad practice?) - has to be a way. 
	 BELIEVE its something to do with the way addeventlistener works - 
	 i cant pass arguments that i'd need to the normal way*/
	taskDelete.addEventListener('click', function() {
		(li.parentNode).removeChild(li);
	} )

	//Moves to the complete list
	taskSelect.addEventListener('click', function() {
		if (li.parentNode == taskList) {
			completeList.appendChild(li);
			li.querySelector(".select").innerHTML = "\u274C";
		}
		else {
			taskList.appendChild(li);
			li.querySelector(".select").innerHTML = "\u2713"
		}
	})
}

taskAdd.addEventListener("submit", addToList);
