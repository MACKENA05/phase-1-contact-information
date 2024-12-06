//Select DOM element
const form = document.getElementById("addContactForm");
const contactNameImput = document.getElementById("contactName");
const contactList = document.getElementById("contactList")

//Attaching event listeners
  // addEventListeners()
  //syntax:   element.addEventLListener('eventType',function(event){
    //handler code
//})

form.addEventListener("submit", function(event){
    event.preventDefault();  //stop page reload
    const newContactName = contactNameImput.value;
    if (newContactName !==""){
        const li = document.createElement('li');
        li.textContent = newContactName;
        contactList.appendChild(li);
        contactNameImput.value = ""
    }

})