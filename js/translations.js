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
        document.getElementById('hola').textContent = traducciones['key1'];
        // Aquí puedes seguir asignando las traducciones a otros elementos del HTML
      });
  });

  // Agregar el elemento "select" al elemento "div" con el identificador "language-switcher"
  document.getElementById('language-switcher').appendChild(select);
}