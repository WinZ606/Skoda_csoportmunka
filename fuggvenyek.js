let articleElem = document.getElementById("art");

export function egyAutoMegjelenit(lista, index) {
  const autoDiv = document.createElement('div');
  autoDiv.classList.add('modellek');

  autoDiv.innerHTML = `
    <h3>${lista[index].nev}</h3>
    <img src="${lista[index].kep}" alt="skoda">
    <p>${lista[index].ar}</p>
    <div class="gombok">
      <button id="konf-${index}" class="kocsi${index}">Konfigurálás</button>
      <button>Rendelés</button>
    </div>
  `;

  articleElem.appendChild(autoDiv);

  const konfGomb = document.getElementById(`konf-${index}`);
  
  if (konfGomb) {
    konfGomb.addEventListener('click', () => {
      console.log(`Autó neve: ${lista[index].nev}`);
      console.log(`Autó kép: ${lista[index].kep}`);
      console.log(`Autó ára: ${lista[index].ar}`);
    });
  }
}

export function autoMegjelenit(lista) {
  for (let index = 0; index < lista.length; index++) {
    egyAutoMegjelenit(lista, index);
  }
}
