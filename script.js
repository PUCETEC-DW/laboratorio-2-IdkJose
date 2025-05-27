let paises = [];

fetch('https://restcountries.com/v3.1/all')
  .then(res => res.json())
  .then(data => {
    paises = data;
    mostrarPaises(paises);
  });

function mostrarPaises(lista) {
  const resultado = document.getElementById('resultado');
  resultado.innerHTML = '';
  lista.forEach(pais => {
    const div = document.createElement('div');
    div.className = 'pais';
    div.innerHTML = `
      <strong>${pais.name.official}</strong><br>
      <img src="${pais.flags.png}" alt="Bandera"><br>
      Región: ${pais.region} | Población: ${pais.population.toLocaleString()}
    `;
    resultado.appendChild(div);
  });
}

document.getElementById('buscar').addEventListener('input', e => {
  const texto = e.target.value.toLowerCase();
  const filtrados = paises.filter(p => 
    p.name.official.toLowerCase().includes(texto)
  );
  mostrarPaises(filtrados);
});
