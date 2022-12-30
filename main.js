const btnSubmit = document.querySelector(".btn-submit");
const stars = document.querySelectorAll("input[name=star]");
const toastMessage = document.querySelector(".toast");

btnSubmit.addEventListener('click', (e) => {
  e.preventDefault();
  if (validation()) {
    for (let i = 0; i < stars.length; i++) {
      if (stars[i].checked) {
        const starSelected = document.querySelector('.star-selected');
        const thankyouContainer = document.querySelector('.star-thankyou-container');
  
        starSelected.innerHTML = stars[i].value;
  
        document.querySelector('.loader').classList.remove('hide');
        setTimeout(() => {
          document.querySelector('.loader').classList.add('hide');
          btnSubmit.parentElement.classList.add('hide');
          thankyouContainer.classList.remove('hide');
        }, 1500);
      }
    }
  } else {
    toastMessage.classList.add("active");
    setTimeout(() => {
      toastMessage.classList.remove("active")
    }, 3000);
  }
});

function validation() { 
  let isValid = false;
  stars.forEach((star) => {
    if (star.checked) {
      isValid = true;
    }
  });
  
  return isValid;
}