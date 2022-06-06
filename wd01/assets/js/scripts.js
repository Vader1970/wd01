// to log title string to console
console.log("WD02 Javascript Assessment by Vaders Development");

// lets class id "my-form" (gets through document.getElementID) be defined as a variable myForm
let myForm = document.getElementById("my-form");

// addEventListener listerns out for the class id "submit" (when Add button is clicked) and processes handleSubmit()
myForm.addEventListener("submit", handleSubmit);

// function for when user clicks on Add button will prevent it from submitting a form i.e page refresh
function handleSubmit(preventrefresh) {

  // prevent submitting of from by preventing default
  preventrefresh.preventDefault();

  // activates when Add button is clicked
  submit();
}

// call function submit() when Add button is clicked
function submit() {

  // define user input value through html atribute [data-item] (gets through window document.querySelector) and assign to constant variable value
  const value = document.querySelector("[data-item]").value;

  // get html element ul (gets through window document querySelector) and assign to constant variable ul
  const ul = document.querySelector("ul");

  // create a constant variable li (list) element (by document.createElement)
  const li = document.createElement("li");

  // append child li to parent ul
  ul.appendChild(li);

  //user input text = value, and the value will be injected into the html when button Add is clicked
  li.innerHTML = value;

  // clear text in text box ([data-iem]) ready for next input by setting value to blank
  document.querySelector("[data-item]").value = "";
}