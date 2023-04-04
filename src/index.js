import _ from 'lodash';
import './reset.css';
import './style.scss';

import Length from './Length.js';
const length = new Length();
length.setLiveLength();

let currentId = '';

// function addMemo() {
const addButton = document.getElementById('add');
const section = document.getElementById('memoWrapper');
addButton.addEventListener('click', () => {
  const currentMemoCount = section.childElementCount - 1;
  const newMemo = document.createElement('div');
  const newId = (currentMemoCount + 1).toString();
  newMemo.id = newId;
  newMemo.innerHTML = '새로운 노트';
  newMemo.addEventListener('click', () => {
    currentId = newId;
    const value = newMemo.innerHTML.replace(/<br>/g, '\n');
    textarea.value = value;
    section.childNodes.forEach(
      (child) => child.nodeName === 'DIV' && child.classList.remove('current')
    );
    newMemo.classList.add('current');
    length.setLength();
    // textarea.focus();
  });

  // toggle
  currentId = newId;
  const value = newMemo.innerHTML.replace(/<br>/g, '\n');
  textarea.value = value;
  section.childNodes.forEach(
    (child) => child.nodeName === 'DIV' && child.classList.remove('current')
  );
  newMemo.classList.add('current');
  // textarea.focus();
  length.setLength();
  section.insertBefore(newMemo, addButton);
});
// }

const listButton = document.getElementById('list');
listButton.addEventListener('click', () => {
  if (section.classList.contains('list')) section.classList.remove('list');
  else section.classList.add('list');
});

section.childNodes.forEach(
  (child) =>
    child.nodeName === 'DIV' &&
    child.addEventListener('click', () => {
      currentId = child.id;
      const value = child.innerHTML.replace(/<br>/g, '\n');
      textarea.value = value;
      section.childNodes.forEach(
        (child) => child.nodeName === 'DIV' && child.classList.remove('current')
      );
      child.classList.add('current');
      length.setLength();
      // textarea.focus();
    })
);

textarea.addEventListener('input', () => {
  const currentMemo = document.getElementById(currentId);
  const value = textarea.value.replace(/\n/g, '<br>');
  currentMemo.innerHTML = value;
});

// document.body.appendChild(showLength());
// document.body.appendChild(addMemo());
