function crearSelectorDeIdioma() {
  // Crear el elemento "select" con las opciones de idioma
  const select = document.createElement('select');
  const optionEs = document.createElement('option');
  optionEs.value = 'es';
  optionEs.textContent = 'Español';
  const optionEn = document.createElement('option');
  optionEn.value = 'en';
  optionEn.textContent = 'English';
  const optionCa = document.createElement('option');
  optionCa.value = 'ca';
  optionCa.textContent = 'Català';
  select.appendChild(optionEs);
  select.appendChild(optionEn);
  select.appendChild(optionCa);

  // Agregar un evento "change" al elemento "select" para cambiar el idioma
  select.addEventListener('change', (event) => {
    const lang = event.target.value;
    // Cargar el archivo JSON correspondiente al idioma
    fetch(`languages/${lang}.json`)
      .then(response => response.json())
      .then(traducciones => {
        // Asignar las traducciones a los elementos del HTML
        document.getElementById('saludo-key1').textContent = traducciones['saludo-key1'];

        document.getElementById('presentacion-key1').textContent = traducciones['presentacion-key1'];
        document.getElementById('presentacion-key2').textContent = traducciones['presentacion-key2'];
        document.getElementById('presentacion-key3').textContent = traducciones['presentacion-key3'];

        document.getElementById('href-key1').textContent= traducciones['href-key1'];
        document.getElementById('href-key2').textContent= traducciones['href-key2'];
        document.getElementById('href-key3').textContent = traducciones['href-key3'];
        document.getElementById('href-key4').textContent = traducciones['href-key4'];
        document.getElementById('href-key5').textContent = traducciones['href-key5'];
        document.getElementById('href-key1').setAttribute('href', '#about_me');
        document.getElementById('href-key2').setAttribute('href', '#studies');
        document.getElementById('href-key3').setAttribute('href', '#experience');
        document.getElementById('href-key4').setAttribute('href', '#skills');
        document.getElementById('href-key5').setAttribute('href', '#contact'); 

        document.getElementById('about_me_h2').textContent = traducciones['about_me_h2'];
        document.getElementById('about_me_p1').textContent = traducciones['about_me_p1'];
        document.getElementById('about_me_p2').textContent = traducciones['about_me_p2'];
        document.getElementById('about_me_p3').textContent = traducciones['about_me_p3'];

        document.getElementById('studies_h2').textContent = traducciones['studies_h2'];
        document.getElementById('studies_p1').textContent = traducciones['studies_p1'];
        document.getElementById('studies_p2').textContent = traducciones['studies_p1'];
        
        document.getElementById('experience_h2').textContent = traducciones['experience_h2'];
        document.getElementById('experience_p1').textContent = traducciones['experience_p1'];
        document.getElementById('experience_p2').textContent = traducciones['experience_p2'];
        document.getElementById('experience_p3').textContent = traducciones['experience_p3'];
        document.getElementById('experience_p4').textContent = traducciones['experience_p4'];
        document.getElementById('experience_li1').textContent = traducciones['experience_li1'];
        document.getElementById('experience_li2').textContent = traducciones['experience_li2'];
        document.getElementById('experience_li3').textContent = traducciones['experience_li3'];
        document.getElementById('experience_li4').textContent = traducciones['experience_li4'];
        document.getElementById('experience_li5').textContent = traducciones['experience_li5'];
        document.getElementById('experience_li6').textContent = traducciones['experience_li6'];
        document.getElementById('experience_li7').textContent = traducciones['experience_li7'];

        document.getElementById('skills_h2').textContent = traducciones['skills_h2'];
        document.getElementById('skills_li1').textContent = traducciones['skills_li1'];
        document.getElementById('skills_li2').textContent = traducciones['skills_li2'];
        document.getElementById('skills_li3').textContent = traducciones['skills_li3'];
        document.getElementById('skills_li4').textContent = traducciones['skills_li4'];
        document.getElementById('skills_li5').textContent = traducciones['skills_li5'];

        document.getElementById('contact_h2').textContent = traducciones['contact_h2'];
      }); 
  });

  // Agregar el elemento "select" al elemento "div" con el identificador "language-switcher"
  document.getElementById('language-switcher').appendChild(select);
}