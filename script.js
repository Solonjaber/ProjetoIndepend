/*Menu*/
const body = document.querySelector("body"),
  sidebar = body.querySelector(".sidebar"),
  toggle = body.querySelector(".toggle"),
  searchBtn = body.querySelector(".search-box"),
  modeSwitch = body.querySelector(".toggle-switch"),
  modeText = body.querySelector(".mode-text");

toggle.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});

searchBtn.addEventListener("click", () => {
  sidebar.classList.remove("close");
});

modeSwitch.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    modeText.innerText = "Light Mode";
  } else {
    modeText.innerText = "Dark Mode";
  }
});

/*
// Função para navegar para a página 
function navigateToPage(href) {

  if (!href) {
    return;
  }

  const pageId = href.split('#')[1];

  document.querySelectorAll('.page-content').forEach(page => {
    page.style.display = 'none';
  });

  const page = document.getElementById(pageId);
  if (page) { 
    page.style.display = 'block';
  }

}

document.addEventListener("DOMContentLoaded", function() {

  document.querySelectorAll('.nav-link').forEach(function(link) {

    link.addEventListener('click', e => {
      
      e.preventDefault();
      // console.log(link);

      const page2 = link.getAttribute('href');

      navigateToPage(page2);
      // console.log(link.getAttribute('href'));

    });

  });

});
*/

/*Formulario de notificação*/
const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
});



