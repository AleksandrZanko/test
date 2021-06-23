//popup
let openFormButton = document.querySelector('.open-form-button');
let popup = document.querySelector('.popup');
let overlay = document.querySelector('.overlay');

openFormButton.addEventListener('click', () => {
  popup.classList.add('popup--active');
  overlay.classList.add('popup--active');
  deletePopupImage();
});

overlay.addEventListener('click', () => {
  popup.classList.remove('popup--active');
  overlay.classList.remove('popup--active');
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		if (popup.classList.contains("popup--active")) {
			popup.classList.remove("popup--active");
			overlay.classList.remove("popup--active");
		}
	}
});	



//form
const formElem = document.getElementById('formElem');
let formButton = formElem.querySelector('.form-button');

let contactUs = document.querySelector('.contact-us');
let contactUsButtons = document.querySelectorAll('.contact-button');
let requestCounter = 0;

formElem.onsubmit = async (e) => {
	e.preventDefault();

  deletePopupImage();

  let response = await fetch('https://api.tachyon-analytics.com/predict', { 
		method: 'POST',
		body: new FormData(formElem)
	});

	let result = await response.json();
  requestCounter++;

  let img = new Image();
  img.src = "https://api.tachyon-analytics.com/predict/" + result.url;
  img.className = "popup-image";
  popup.appendChild(img);

  if(requestCounter === 3) {
    formButton.disabled = true;
    contactUs.classList.add('contact-us--active');
  }
};

function deletePopupImage() {
  let popupImages = document.querySelectorAll('.popup-image');
  if(popupImages) {
    for(let item of popupImages) {
      item.remove();
    }
  }
}


//contact-us popup
for(let item of contactUsButtons) {
  item.addEventListener('click', endAttemps)
}

function endAttemps() {
  contactUs.classList.remove('contact-us--active');
  requestCounter = 0;
  formButton.disabled = false;
  popup.classList.remove('popup--active');
  overlay.classList.remove('popup--active');
}