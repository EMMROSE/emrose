const scrolledFx = () => {
  const form = document.querySelector('#js-scroll');
  if (form) {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 3000) {
        const x = scrollY - 3000
        form.style.setProperty('top', `${x*0.5}px`)
        form.style.setProperty('left', `-${x}px`)
      } else if (window.scrollY >= 3200) {
        form.style.setProperty('top', `33%`)
        form.style.setProperty('left', `-20vh`)
      } else {
        form.classList.add('margin-form2');
      }
    });
  }
  const mockup = document.querySelector('#js-scroll-mockup');
  if (mockup) {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 3000) {
        const a = scrollY - 3000
        mockup.style.setProperty('top', `${a*0.2}px`)
        mockup.style.setProperty('left', `${a*0.4}px`)
      } else if (window.scrollY >= 3250){
        const b = scrollY - 3300
        mockup.style.setProperty('top', `${b*0.1}px`)
      }
    });
  }
  const formbis = document.querySelector('#js-scroll-bis');
  if (formbis) {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 3200) {
        const y = scrollY - 3300
        formbis.style.setProperty('top', `33%`)
        formbis.style.setProperty('right', `-${y*0.33}px`)
      } else {
        form.classList.add('margin-form3');
      }
    });
  }
  const mockupbis = document.querySelector('#js-scroll-mockupbis');
  if (mockupbis) {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 3200) {
        const z = scrollY - 3300
        mockupbis.style.setProperty('top', `${z*0.2}px`)
      } else if (window.scrollY >= 3250){
        const w = scrollY - 3300
        mockupbis.style.setProperty('top', `${z*0.1}px`)
      }
    });
  }
  const formter = document.querySelector('#js-scroll-ter');
  if (formter) {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 3900) {
        formter.classList.add('margin-form4');
      } else {
        formter.classList.remove('margin-form4');
      }
    });
  }
  const mockupter = document.querySelector('#js-scroll-mockupter');
  if (mockupter) {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 3900) {
        const c = scrollY - 3900
        mockupter.style.setProperty('top', `${c*0.2}px`)
        mockupter.style.setProperty('left', `${c*0.4}px`)
      } else if (window.scrollY >= 3950){
        const d = scrollY - 3900
        mockupter.style.setProperty('top', `${d*0.1}px`)
      }
    });
  }
}

export { scrolledFx }
