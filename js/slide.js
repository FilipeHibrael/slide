export default class Slide {
  constructor(slide, warrper) {
    this.slide = document.querySelector(slide);
    this.warapper = document.querySelector(warrper);
  }

  onStart(event) {
    event.preventDefault();
    this.warapper.addEventListener('mousemove', this.onMove);
  }

  onMove() {}

  onEnd() {
    this.warapper.removeEventListener('mousemove', this.onMove);
  }

  addSlideEvents() {
    this.warapper.addEventListener('mousedown', this.onStart);
    this.warapper.addEventListener('mouseup', this.onEnd);
  }

  bindEvents() {
    this.onStart = this.onStart.bind(this);
    this.onMove = this.onMove.bind(this);
    this.onEnd = this.onEnd.bind(this);
  }

  init() {
    this.bindEvents();
    this.addSlideEvents();
    return this;
  }
}
