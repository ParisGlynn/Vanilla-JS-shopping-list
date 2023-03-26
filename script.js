const itemForm = document.querySelector('.itemForm');
const submitBtn = document.querySelector('.submitBtn');
const itemInput = document.querySelector('.itemInput');
const itemList = document.querySelector('.itemList');

// Event Listeners
itemForm.addEventListener('submit', submitForm);
itemList.addEventListener('click', removeAnItem);

function submitForm(e) {
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
}

function removeAnItem(e) {
  if(e.target.classList.contains('removeItem')) {
    e.target.parentElement.parentElement.remove();
  }
}