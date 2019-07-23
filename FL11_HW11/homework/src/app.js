let rootNode = document.getElementById('root');
let mainInput = document.querySelector('.input');
let addBtn = document.querySelector('.addBtn');
let form = document.querySelector('.form');
let list = document.querySelector('.list');
let li = document.querySelector('li');
let lastItem = document.querySelector('.maximum');
let maxItem = 10;

form.addEventListener('submit', e => {
  e.preventDefault();
  let action = mainInput.value.trim();
  if(action.length){
    addAction(action);
    form.reset();
  } 
  if(list.length > maxItem) {
    lastItem.style.display = 'block';
  }
})

// Create action
let addAction = (action) => {
  let html = `
    <li class="list-item">
    <span class="list-wrap">
      <input type="checkbox" />
      <label>${action}</label>
      <i class="material-icons edit">edit</i>
    </span>
    <i class="material-icons delete">delete</i>
    </li>
  `;
  list.innerHTML += html;
}

// Delete action
list.addEventListener('click', e => {
  if(e.target.className === 'material-icons delete') {
    e.target.parentElement.remove();
  }  
})

// Edit action
li.addEventListener('click', e => {
  if (e.target.className === 'material-icons edit') {
    let html = `
      <input type="text"/>
      <i class="material-icons save">save</i>
    `;
    e.target.parentElement.innerHTML = html;
  }
})

// Save action
li.addEventListener('click', e => {
  if(e.target.className === 'material-icons save') {
    let html = `
    <span class='list-wrap'>
      <input type="checkbox" class="material-icons checkbox" />
        <label>${0}</label>
        <i class="material-icons edit">edit</i>
      </span>
      <i class="material-icons delete">delete</i>
    `;
    e.target.parentElement.innerHTML = html;
  }
})



