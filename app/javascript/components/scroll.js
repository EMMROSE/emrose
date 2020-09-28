const scrolledFx = () => {

  if (window.matchMedia("(max-width: 400px)").matches) {
  /* the view port is at max 400 pixels wide */
    const form = document.querySelector('#js-scroll');
    if (form) {
      window.addEventListener('scroll', () => {
        if (window.scrollY >= 600) {
          form.classList.add('margin-form1');
          // form.style.setProperty('top', `${x*0.5}px`)
          // form.style.setProperty('left', `-${x}px`)
       } else {
          form.classList.remove('margin-form1');
        }
      });
    }
    const mockup = document.querySelector('#js-scroll-mockup');
    if (mockup) {
      window.addEventListener('scroll', () => {
        if (window.scrollY >= 600) {
          mockup.classList.add('mockupmove1');
        } else {
          mockup.classList.remove('mockupmove1');
        }
      });
    }
} else if (window.matchMedia("(min-width: 900px)").matches) {
  /* the view port is less than 900 pixels wide */
  const form = document.querySelector('#js-scroll');
    if (form) {
      window.addEventListener('scroll', () => {
        if (window.scrollY >= 330) {
          // const x = scrollY - 330
          form.classList.add('margin-form1');
          // form.style.setProperty('top', `${x*0.5}px`)
          // form.style.setProperty('left', `-${x}px`)
       } else {
          form.classList.remove('margin-form1');
        }
      });
    }
    const mockup = document.querySelector('#js-scroll-mockup');
    if (mockup) {
      window.addEventListener('scroll', () => {
        if (window.scrollY >= 330) {
          mockup.classList.add('mockupmove1');
        } else {
          mockup.classList.remove('mockupmove1');
        }
      });
    }
}
  if (window.matchMedia("(max-width: 400px)").matches) {
    const formbis = document.querySelector('#js-scroll-bis');
    if (formbis) {
      window.addEventListener('scroll', () => {
        if (window.scrollY >= 750) {
          formbis.classList.add('margin-form2');
        } else {
          formbis.classList.remove('margin-form2');
        }
      });
    }
    const mockupbis = document.querySelector('#js-scroll-mockupbis');
    if (mockupbis) {
      window.addEventListener('scroll', () => {
        if (window.scrollY >= 750) {
          mockupbis.classList.add('mockupmove2');
        } else {
          mockupbis.classList.remove('mockupmove2');
        }
      });
    }
  } else if (window.matchMedia("(min-width: 900px)").matches) {
      const formbis = document.querySelector('#js-scroll-bis');
      if (formbis) {
        window.addEventListener('scroll', () => {
          if (window.scrollY >= 975) {
            const y = scrollY - 3300
            formbis.classList.add('margin-form2');
          } else {
            formbis.classList.remove('margin-form2');
          }
        });
      }
      const mockupbis = document.querySelector('#js-scroll-mockupbis');
      if (mockupbis) {
        window.addEventListener('scroll', () => {
          if (window.scrollY >= 975) {
            mockupbis.classList.add('mockupmove2');
          } else {
            mockupbis.classList.remove('mockupmove2');
          }
        });
      }
  }
  if (window.matchMedia("(max-width: 400px)").matches) {
    const formter = document.querySelector('#js-scroll-ter');
    if (formter) {
      window.addEventListener('scroll', () => {
        if (window.scrollY >= 1400) {
          formter.classList.add('margin-form4');
        } else {
          formter.classList.remove('margin-form4');
        }
      });
    }
    const mockupter = document.querySelector('#js-scroll-mockupter');
    if (mockupter) {
      window.addEventListener('scroll', () => {
        if (window.scrollY >= 1400) {
          mockupter.classList.add('mockupmove1');
        } else {
          mockupter.classList.remove('mockupmove1');
        }
      });
    }
  } else if (window.matchMedia("(min-width: 900px)").matches) {
    const formter = document.querySelector('#js-scroll-ter');
    if (formter) {
      window.addEventListener('scroll', () => {
        if (window.scrollY >= 1650) {
          formter.classList.add('margin-form4');
        } else {
          formter.classList.remove('margin-form4');
        }
      });
    }
    const mockupter = document.querySelector('#js-scroll-mockupter');
    if (mockupter) {
      window.addEventListener('scroll', () => {
        if (window.scrollY >= 1650) {
          mockupter.classList.add('mockupmove1');
        } else {
          mockupter.classList.remove('mockupmove1');
        }
      });
    }
  }
}

export { scrolledFx }



