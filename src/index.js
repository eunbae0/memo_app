import _ from 'lodash';
import './reset.css';
import './style.scss';

// function showLength() {
const element = document.createElement('div');
// // 이제 Lodash를 스크립트로 가져왔습니다.
// element.innerHTML = _.join(['Hello', 'webpack'], ' ');
// return element;
const textarea = document.getElementsByTagName('textarea')[0];
const length = document.getElementById('length');
textarea.addEventListener('input', (e) => {
  length.innerHTML = textarea.value.length;
});
// }

let currentId = '';

// function addMemo() {
const addButton = document.getElementById('add');
const section = document.getElementsByTagName('section')[0];
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
    length.innerHTML = textarea.value.length;
  });

  // toggle
  currentId = newId;
  const value = newMemo.innerHTML.replace(/<br>/g, '\n');
  textarea.value = value;
  section.childNodes.forEach(
    (child) => child.nodeName === 'DIV' && child.classList.remove('current')
  );
  newMemo.classList.add('current');
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
      length.innerHTML = textarea.value.length;
    })
);

textarea.addEventListener('input', () => {
  const currentMemo = document.getElementById(currentId);
  const value = textarea.value.replace(/\n/g, '<br>');
  currentMemo.innerHTML = value;
});

// document.body.appendChild(showLength());
// document.body.appendChild(addMemo());
