import SlideNav from './slide.js';

const slide = new SlideNav('.slide', '.slide-warpper');
slide.init();
slide.addArrow('.prev', '.next');
slide.addControl('.custom-controls');
