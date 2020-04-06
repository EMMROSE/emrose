const buttonEffect = () => {

  const formContainer = document.querySelector('.form-container');

  if (formContainer) {
    const activities = document.querySelectorAll('.form-container .activity-choices .activity-choice');

    // Add click effect on activities radio-button
    activities.forEach((activity) => {
      activity.addEventListener('click', (event) => {
        let previousActivity = document.querySelector('.activity-choice.active')
          if (previousActivity !== null) {
            previousActivity.classList.remove('active');
        }
        event.currentTarget.classList.add('active');
      });
    });

};

export { buttonEffect }
