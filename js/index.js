"use strict";

document.addEventListener('DOMContentLoaded', () => {
  let currentLanguage = 'es';
  let translations;

  // Función para cargar las traducciones desde el archivo JSON
  const loadTranslations = async () => {
    const response = await fetch('translations.json');
    translations = await response.json();
    applyTranslations();
  };

  // Función para aplicar las traducciones a los elementos con la clase "translate"
  const applyTranslations = () => {
    const translateElements = document.querySelectorAll('.translate');
    translateElements.forEach(element => {
      const key = element.dataset.key;
      element.textContent = translations[currentLanguage][key];
    });
  };

  // Carga las traducciones al iniciar la página
  loadTranslations();

  // Botón de cambio de idioma a ingles
  const englishButton = document.getElementById('englishButton');
  englishButton.addEventListener('click', (event) => {
    event.preventDefault();
    currentLanguage = 'en';
    englishButton.classList.add('language-selected');
    spanishButton.classList.remove('language-selected');
    applyTranslations();
  });

  // Botón de cambio de idioma a español
  const spanishButton = document.getElementById('spanishButton');
  spanishButton.classList.add('language-selected');
  spanishButton.addEventListener('click', (event) => {
    event.preventDefault();
    currentLanguage = 'es';
    spanishButton.classList.add('language-selected');
    englishButton.classList.remove('language-selected');
    applyTranslations();
  });

  let menu = document.querySelector('.grid-menu');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      //Scroll hacia abajo
      menu.classList.add('menu-background-fixed');
    }
    if (window.scrollY === 0) {
      menu.classList.remove('menu-background-fixed');
    }
  });

  let linkHome = document.getElementById('home-link');
  linkHome.addEventListener('click', (event) => {
    event.preventDefault();
    scrollToTop();
  });
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
});






