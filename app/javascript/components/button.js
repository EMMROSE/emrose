const activeCheck = () => {
  const activate = document.querySelectorAll('.nav-item');
  let i = 0;
  activate.forEach((element) => {
  element.addEventListener('click', (event) => {
    let previousActivity = document.querySelector('.nav-item.active')
      if (previousActivity !== null) {
        previousActivity.classList.remove('active');
      }
      element.classList.add('active');
      });
  });
};

export { activeCheck };
