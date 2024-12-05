//Define a variable contacts
let contacts = [];          //will be used to store the contact 

//function to add a new contact

function addContact(name,phone,email){
     let contact = {
        name:name,
        phone: phone,
        email: email
  };
  contacts.push(contact);   //push contact into the contacts arrays
}

// Adding some contacts to the array
addContact("John Doe", "0703-456-789", "johndoe@example.com");
addContact("Jane Smith", "0707-654-321", "janesmith@example.com");
addContact("Alice Johnson", "0705-000-111", "alice.johnson@example.com");
 
// //callback function to display a contact
function displayContact(contact, index) {
        console.log(`${index+1}. Name: ${contact.name}, Phone: ${contact.phone}, Email: ${contact.email}`);
};

//  Function to process contacts using a callback
 function processContacts(callback){
   contacts.forEach(callback);   //// Iterate over each contact and call the callback
 }

// // Process the contacts and display them
processContacts(displayContact);


// function displayContactDetails(contact){
//      console.log('contact Details:')
//      for (let key in contact){
//         console.log(`${key}:${contact[key]}`);
//      }

// }
// console.log('Detailed Contact Information')
// processContacts(displayContactDetails);
