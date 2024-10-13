// Get the necessary DOM elements
const list = document.getElementById("list");
const input = document.getElementById("input");
const button = document.getElementById("task-btn");

// Event listener for the "Add Task" button
button.addEventListener('click', () => {
    // Get the value of the input field and clear it
    const myItem = input.value.trim();

    // Check if the input is empty, avoid adding empty tasks
    if (myItem === '') {
        alert('Please enter a valid task.');
        return;
    }

    input.value = '';

    // Create a new list item (li) element
    const listItem = document.createElement("li");
    listItem.setAttribute("id", "list-item");

    // Create a span to hold the task text
    const listText = document.createElement('span');
    listText.textContent = myItem;

    // Create a delete button for the task
    const listBtn = document.createElement('button');
    listBtn.textContent = 'Delete';
    listBtn.classList.add('delete');

    // Append the text and the delete button to the list item
    listItem.appendChild(listText);
    listItem.appendChild(listBtn);

    // Append the list item to the task list
    list.appendChild(listItem);

    // Event listener for the delete button to remove the task
    listBtn.addEventListener('click', () => {
        list.removeChild(listItem);
    });

    // Automatically focus back to the input field for the next task
    input.focus();
});
