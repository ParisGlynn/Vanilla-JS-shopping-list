const itemForm = document.querySelector('.itemForm');
const submitBtn = document.querySelector('.submitBtn');
const itemInput = document.querySelector('.itemInput');
const itemList = document.querySelector('.itemList');
const clearBtn = document.querySelector('.clear');
const filter = document.querySelector('#filterText');

// Event Listeners
itemForm.addEventListener('submit', submitForm);
itemList.addEventListener('click', removeAnItem);
clearBtn.addEventListener('click', clearList);
filter.addEventListener('input', filterList);

noItems();

function submitForm(e) {
  const newItem = itemInput.value;
  if(newItem === '') {
    return;
  }

  

  e.preventDefault();
  const li = document.createElement('li');
  const button = document.createElement('button');
  const icon = document.createElement('i');
  const text = document.createTextNode(`${itemInput.value}`);

  li.appendChild(text);
  icon.className = 'fa-solid fa-xmark removeItem';

  button.appendChild(icon);
  li.appendChild(button);
  itemList.appendChild(li);

  noItems();

  addItemToStorage(newItem);
}

function removeAnItem(e) {
  if(e.target.classList.contains('removeItem')) {
    if(confirm('Are You Sure?')) {
      e.target.parentElement.parentElement.remove();
    }
  }
  noItems();
}

function clearList(e) {
  while(itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
  }
  noItems();
}

// Check if no items in shopping list
function noItems() {
  const items = itemList.querySelectorAll('li');
  if(items.length === 0) {
    filter.style.display = 'none';
    clearBtn.style.display = 'none';
  } else {
    filter.style.display = 'block';
    clearBtn.style.display = 'block';
  }
}

function filterList(e) {
  const text = e.target.value.toLowerCase();
  const items = itemList.querySelectorAll('li');
  items.forEach(item => {
    const itemName = item.firstChild.textContent.toLowerCase();
    
    if(itemName.indexOf(text) != -1) {
      item.style.display = 'flex';
    } else {
      item.style.display = 'none';
    }
  });
}

function addItemToStorage(item) {
  let itemsFromStorage;
  if(localStorage.getItem('items') === null) {
    itemsFromStorage = [];
  } else {
    itemsFromStorage = JSON.parse(localStorage.getItem('items'));
  } 

  itemsFromStorage.push(item);
  localStorage.setItem('items', JSON.stringify(itemsFromStorage));
}