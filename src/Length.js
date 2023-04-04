export default class Length {
  constructor() {
    this.length = document.getElementById('length');
    this.textarea = document.getElementById('textarea');
  }
  setLength() {
    this.length.innerHTML = textarea.value.length;
  }
  setLiveLength() {
    this.textarea.addEventListener('input', () => {
      this.setLength();
    });
  }
}
