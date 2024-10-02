const list = document.getElementById("list")
const input = document.getElementById("input")
const button = document.getElementById("task-btn")

button.addEventListener('click', () => {
    const myItem = input.value;
    input.value = '';

    const listItem = document.getElementById("list-item");
    const listText = document.createElement('span');
    const listBtn = document.createElement('button');

    listItem.appendChild(listText);
    listText.textContent = myItem
    listItem.appendChild(listBtn);
    listBtn.textContent = 'Delete';
    list.appendChild(listItem);


    listBtn.addEventListener('click', ()=> {
        list.removeChild(listItem);
    });

    input.focus();
})
