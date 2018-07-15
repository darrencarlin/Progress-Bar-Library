function Scroll() {
  'use strict';

  const [body] = [document.body];

  // create element and attach attributes

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
    bottom: '',
    left: '0px',
    position: 'fixed',
    transition: 'width .2s linear'
  };

  // default styling

  Object.assign(template.style, {
    background: settings.color,
    width: settings.width,
    top: settings.top,
    left: settings.left,
    position: settings.position,
    transition: settings.transition
  });

  // functions

  const run = function run() {

    window.addEventListener('scroll', () => {
      const docHeight = body.scrollHeight;
      const winHeight = window.innerHeight;
      const winTop = document.scrollingElement.scrollTop;
      const scrolled = winTop / (docHeight - winHeight) * 100;
      template.style.width = `${Math.floor(scrolled)}%`;
    });
  };

  this.add = function add(options) {

    const opts = options;

    // check if options are passed in as object or not at all

    if (typeof options === 'object' || typeof options === 'undefined') {

      if (options.pos === 'bottom') {
        opts.top = '';
        opts.bottom = '0px';
      }

      // update scrollbar with new settings passed in through options

      const ns = Object.assign({}, settings, options);

      // update style of template
      Object.assign(template.style, {
        height: ns.size,
        background: ns.color,
        transition: ns.transition,
        top: ns.top,
        bottom: ns.bottom
      });

      run();

    } else {
      console.error('You must pass in an object with your settings');
    }
  };

}

// export as global variable

global.Scrollbar = Scroll;
