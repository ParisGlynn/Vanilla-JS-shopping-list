const itemForm = document.querySelector('.itemForm');
const submitBtn = document.querySelector('.submitBtn');
const itemInput = document.querySelector('.itemInput');
const itemList = document.querySelector('.itemList');

itemForm.addEventListener('submit', submitForm);

function submitForm(e) {
  e.preventDefault();
  const li = document.createElement('li');
  const button = document.createElement('button');
  const icon = document.createElement('i');
  const text = document.createTextNode(`${itemInput.value}`);

  li.appendChild(text);
  icon.className = 'fa-solid fa-xmark';

  button.appendChild(icon);
  li.appendChild(button);
  itemList.appendChild(li);
}