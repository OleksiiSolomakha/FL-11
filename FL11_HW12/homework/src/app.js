const rootNode = document.getElementById('root');

const todoItems = [];

const hash3 = location.hash = '#/modify/:item_id';
const hash2 = location.hash = '#/add';
const hash1 = location.hash = '';

const page1 = document.querySelector('.first_page');
const page2 = document.querySelector('.add_page');
const page3 = document.querySelector('.modify_page');

function hashChange() {
  if (location.hash === hash1) {
    page1.style.display = 'block';
  } else {
    page1.style.display = 'none';
  }
  if (location.hash === hash2) {
    page2.style.display = 'block';
  } else {
    page2.style.display = 'none';
  }
  if (location.hash === hash3) {
    page3.style.display = 'block';
  } else {
    page3.style.display = 'none';
  }
}
window.addEventListener('hashchange', hashChange);

function saveToLocalStorage() {
  const toString = JSON.stringify(todoItems);
  localStorage.setItem('todo', toString);
}

let addBtn = document.querySelector('.add_task_btn');
addBtn.addEventListener('click', () => {
  location.hash = hash2;
});

let cancelBtn = document.querySelector('.cancel_btn');
cancelBtn.addEventListener('click', () => {
  location.hash = hash1;
});

let list = document.querySelector('.list');
let saveBtn = document.querySelector('.save_btn');
saveBtn.addEventListener('click', () => {
  let todo = document.querySelector('.input').value;
  addTask(todo);
  location.hash = hash1;
});

let editItem = document.querySelector('.item');
editItem.addEventListener('click', () => {
  location.hash = hash3;
})

let delBtn = document.querySelector('.delete_btn');
list.addEventListener('click', () => {
  let li = document.querySelector('.li');
  list.removeChild(li);
});

(function() {
  const dataFromLS = JSON.parse(this.localStorage.getItem('todo'));
  if (dataFromLS) {
    todoItems.push(...dataFromLS);
    dataFromLS.forEach((item) => {
      if (item.description === `${item}`) {
        item.isDone = true;
      }
      const checked = item.isDone ? 'checked' : '';
      const li = `
      <li class="li">
      <input type="checkbox" class="checkbox" ${checked}>
      <p class="item">${item.description}</p>
      <button class="delete_btn">X</button>
      </li>
      `
      list.innerHTML += li;
    })
  }
})()

function addTask (todo) {
  const newTask = {
    id: todoItems.length + 1,
    description: todo,
    isDone: false
  }
  todoItems.push(newTask);
  saveToLocalStorage();
  let item = `
  <li class="li">
  <input type="checkbox" class="checkbox">
  <p class="item">${todo}</p>
  <button class="delete_btn">X</button>
  </li>
  `;
  list.innerHTML += item;
  let empty = document.querySelector('.empty');
  if (list.length > 0) {
    empty.style.display = 'none';
  }
}






