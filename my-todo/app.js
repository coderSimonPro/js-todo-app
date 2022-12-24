const todoValue = document.querySelector('.todoTextFiled');
const addTodoBtn = document.querySelector('.addBtn');
const myForm = document.getElementById('myForm');
const todoLists = document.querySelector('.todoLists');


//add evenlistener for submit form..
//add todos.
myForm.addEventListener('submit', function (e) {
    e.preventDefault()
    let myValue = todoValue.value;
    var listItem = document.createElement('li');
    todoLists.appendChild(listItem);
    listItem.innerHTML = myValue;
    var remove_buttons = document.createElement('button');
    remove_buttons.innerHTML = 'delete';
    remove_buttons.classList.add('removeBtn');
    listItem.appendChild(remove_buttons);
    let childElement1 = document.querySelector('.todoMsgalert').firstElementChild;
    childElement1.classList.remove('removeMsg');
    childElement1.classList.add('showMessage');
    childElement1.style.opacity = 1;
    childElement1.innerText = 'Todo Added';
    setTimeout(() => {
        childElement1.style.opacity = 0;
    }, 1000);
    myForm.reset();
    

    //Remove todos 
    remove_buttons.addEventListener('click', function (e) {
        e.preventDefault()
        listItem.parentNode.removeChild(listItem);
        let childElement2 = document.querySelector('.todoMsgalert').firstElementChild;
        childElement2.classList.remove('showMessage');
        childElement2.classList.add('removeMsg');
        childElement2.style.opacity = 1;
        childElement2.innerText = 'Todo Removed';
        setTimeout(() => {
            childElement2.style.opacity = 0;
        }, 1000);
        
    });
   
   
})





 




