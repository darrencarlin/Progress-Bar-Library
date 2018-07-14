function Scrollbar() {
  'use strict';

  const [body] = [document.body];

  const template = document.createElement('div');
  template.setAttribute('id', 'topBar');
  template.setAttribute('class', 'top-bar');
  body.prepend(template);

  // default settings

  const settings = {
    pos: 'top',
    color: '#66ccff',
    size: '10px',
    width: '0px',
    top: '0px',
    left: '0px',
    position: 'fixed'
  };

  // default styling

  Object.assign(template.style, {
    background: settings.color,
    width: settings.width,
    top: settings.top,
    position: settings.position
  });

  // functions

  const run = function run() {
    window.addEventListener('scroll', () => {
      const docHeight = body.scrollHeight;
      const winHeight = window.innerHeight;
      const winTop = document.scrollingElement.scrollTop;
      const scrolled = winTop / (docHeight - winHeight) * 100;
      template.style.width = `${scrolled}%`;
    });
  };

  this.add = function add(options) {

    if (typeof options === 'object' || typeof options === 'undefined') {

      // update with settings passed in
      const newSettings = Object.assign({}, settings, options);

      // update style of template
      Object.assign(template.style, {
        height: newSettings.size,
        background: newSettings.color

      });
      run();

    } else {
      console.error('You must pass in an object with your settings');
    }
  };

}
