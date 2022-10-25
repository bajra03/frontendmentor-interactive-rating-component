const btnSubmit = document.querySelector('.btn-submit');

btnSubmit.addEventListener('click', (e) => { 
  e.preventDefault();
  const stars = document.getElementsByName('star');  

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
})