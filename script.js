//RA3Ex7 - Activitats ràpides DOM JSç

//1 - Selecció: Usa querySelector per canviar el color d'un <h1> quan la pàgina carregui.
const titol = document.querySelector('#titol-principal');
titol.style.color = 'crimson';

//2 - Contingut: Fes que un paràgraf <p> mostri "Hola Món" usant textContent.
const paragraf = document.getElementById('paragraf-hola');
paragraf.textContent = 'Hola Món';

//3 - Atributs: Canvia la 'src' d'una imatge <img> usant setAttribute.
const imatge = document.getElementById('imatge-canviant');
imatge.setAttribute('src', 'https://ceutec.hn/wp-content/uploads/2024/07/cuales-son-lenguajes-programacion.png');

//4 - Estils: Canvia el color de fons (backgroundColor) d'un element en fer-li clic.
const caixaEstil = document.getElementById('caixa-estil');
caixaEstil.addEventListener('click', function () {
    caixaEstil.style.backgroundColor = '#aed9f7';
});
//5 - Classes: Crea un botó que afegeixi/tregui la classe 'actiu' amb classList.toggle.
const botoToggle = document.getElementById('boto-toggle');
const textClasse = document.getElementById('text-classe');
botoToggle.addEventListener('click', function () {
    textClasse.classList.toggle('actiu');
});

//6 - Esdeveniments: Afegeix un addEventListener a un botó perquè tregui una alerta (alert).
const botoAlerta = document.getElementById('boto-alerta');
botoAlerta.addEventListener('click', function () {
    alert('Has clicat el botó!');
});

//7 - Estructura: Crea un nou <li> amb createElement i afegeix-lo a una <ul> amb appendChild.
const botoAfegir = document.getElementById('boto-afegir');
botoAfegir.addEventListener('click', function () {
    const nouLi = document.createElement('li');
    nouLi.textContent = 'Nou element';
    const llista = document.getElementById('llista-compra');
    llista.appendChild(nouLi);
});

//8 - Eliminació: Fes que un element desaparegui en fer-li clic usant el mètode remove().
const elementEliminar = document.getElementById('element-eliminar');
elementEliminar.addEventListener('click', function () {
    elementEliminar.remove();
});