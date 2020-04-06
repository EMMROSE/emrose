import Typed from 'typed.js';

const type = document.querySelector('.banner-typed-text');

  const loadDynamicBannerText = () => {
  if (type) {
      new Typed( type, {
        strings: ["mots", "verbes", "adjectif"],
        typeSpeed: 100,
        attr: 'placeholder',
        bindInputFocusEvents: true,
        loop: true
      });
    }
  }

export { loadDynamicBannerText };
