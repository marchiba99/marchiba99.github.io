function aplicarTraducciones() {
  // Obtener el valor del atributo "lang" del elemento "html"
  const lang = document.documentElement.lang;

  // Cargar el archivo JSON correspondiente al idioma
  fetch(`languages/${lang}.json`)
    .then(response => response.json())
    .then(traducciones => {
      // Asignar las traducciones a los elementos del HTML
      document.getElementById('hola').textContent = traducciones['key1'];
      // Aquí puedes seguir asignando las traducciones a otros elementos del HTML
    });
}