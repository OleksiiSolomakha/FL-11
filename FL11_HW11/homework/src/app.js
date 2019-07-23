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

mainInput.addEventListener('focus', function () {
  addBtn.removeAttribute('disabled', '');
  addBtn.style.backgroundColor = '#4BBBFE';
})

// Create action
let addAction = (action) => {
  let input = `
    <li class="list-item">
    <span class="list-wrap">
      <input type="checkbox" />
      <label>${action}</label>
      <i class="material-icons edit">edit</i>
    </span>
    <i class="material-icons delete">delete</i>
    </li>
  `;
  list.innerHTML += input;
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
    let input = `
      <input type="text"/>
      <i class="material-icons save">save</i>
    `;
    e.target.parentElement.innerHTML = input;
  }
})

// Save action
li.addEventListener('click', e => {
  if(e.target.className === 'material-icons save') {
    let input = `
    <span class='list-wrap'>
      <input type="checkbox" class="material-icons checkbox" />
        <label>${0}</label>
        <i class="material-icons edit">edit</i>
      </span>
      <i class="material-icons delete">delete</i>
    `;
    e.target.parentElement.innerHTML = input;
  }
})

let checked = () => {
  let check = document.querySelectorAll('.checkbox');
  for (let i = 0; i < check.length; i++) {
    check[i].addEventListener('change', (e) => {
      e.preventDefault();
      if (check[i].checked) {
        check[i].disabled = true;
      }
    })
  }
}
checked();

//Drag & drop
let drag;
list.addEventListener('dragstart', function (e) {
  drag = e.target;
  
});

list.addEventListener('dragleave', function (e) {
  e.target.style.transform = '';
});

list.addEventListener('dragover', function (e) {
  if(e.target.className === 'list-item'){
    e.target.style.transform = 'translateX(10px)';
    e.preventDefault();
  }
});

list.addEventListener('drop', function (e) {
  if(e.target.className === 'list-item'){
    e.preventDefault();
    list.insertBefore(drag, e.target);
    e.target.style.transform = '';
  }
});



