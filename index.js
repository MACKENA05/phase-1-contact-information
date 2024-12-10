// Select DOM elements
const form = document.getElementById("addContactForm");
const contactNameInput = document.getElementById("contactName");
const contactList = document.getElementById("contactList");
const searchInput = document.getElementById("searchInput");

// Attaching event listeners
form.addEventListener("submit", function(event) {
    event.preventDefault();  // Stop page reload
    const newContactName = contactNameInput.value.trim();  // Trim to avoid leading/trailing spaces
    if (newContactName !== "") {
        // Create new list item
        const li = document.createElement('li');
        li.textContent = newContactName;

        // Create delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add("delete-btn");
        
        // Append the delete button to the li element
        li.appendChild(deleteButton);

        // Append the li to the contact list
        contactList.appendChild(li);

        // Clear the input field after adding the contact
        contactNameInput.value = "";
    }
});

// Adding event listener for search
searchInput.addEventListener("input", function() {
    const query = searchInput.value.toLowerCase();
    const contacts = contactList.getElementsByTagName('li');
    // let foundMatch = false;  // Flag to check if there's a match

    for (let li of contacts) {
        const contactName = li.firstChild.textContent.toLowerCase();  // Get the text content and convert to lowercase
        if (contactName.includes(query)) {
            li.style.display = "";  // Show contact if it matches the search query
            // foundMatch = true;  // Mark that a match was found
        } else {
            li.style.display = "none";  // Hide contact if it doesn't match
        }
    }

});

// Event listener for delete button
contactList.addEventListener('click', function(event) {
    if (event.target.classList.contains("delete-btn")) {
        const li = event.target.parentElement;  // Get the parent li element of the delete button
        li.remove();  // Remove the contact (li) from the list
    }
});
