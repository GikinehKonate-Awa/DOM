# 0376RA4PR1 – Exercicis de DOM

---

## Descripció

Aquest projecte conté 8 exercicis pràctics per aprendre a manipular el DOM (Document Object Model) amb JavaScript pur, sense cap framework ni llibreria externa.

Els exercicis cobreixen les operacions més habituals: selecció d'elements, modificació de contingut, canvi d'atributs i estils, gestió de classes, events, creació i eliminació de nodes.

---

## Estructura del projecte

```
0376RA4PR1/
├── index.html    → Estructura HTML amb els elements de cada exercici
├── style.css     → Estils visuals del projecte
├── script.js     → Solucions JS dels 8 exercicis
└── README.md     → Documentació del projecte
```

---

## Solucions del script

### Ex.1 – Selecció: canviar color del `<h1>`

Usa `querySelector` per obtenir el títol i modifica `style.color` en carregar la pàgina.

```js
const titol = document.querySelector('#titol-principal');
titol.style.color = 'crimson';
```

---

### Ex.2 – Contingut: mostrar text amb `textContent`

Selecciona un `<p>` per `id` i substitueix el seu contingut de text.

```js
const paragraf = document.getElementById('paragraf-hola');
paragraf.textContent = 'Hola Món';
```

---

### Ex.3 – Atributs: canviar `src` d'una imatge

Usa `setAttribute` per canviar dinàmicament l'atribut `src` d'una `<img>`.

```js
const imatge = document.getElementById('imatge-canviant');
imatge.setAttribute('src', 'https://exemple.com/nova-imatge.png');
```

---

### Ex.4 – Estils: canviar fons en fer clic

Afegeix un listener d'event `click` que modifica `style.backgroundColor` de l'element.

```js
const caixaEstil = document.getElementById('caixa-estil');
caixaEstil.addEventListener('click', function () {
  caixaEstil.style.backgroundColor = '#aed9f7';
});
```

---

### Ex.5 – Classes: `classList.toggle`

Un botó alterna la presència de la classe `actiu` en un paràgraf.

```js
const botoToggle = document.getElementById('boto-toggle');
const textClasse = document.getElementById('text-classe');
botoToggle.addEventListener('click', function () {
  textClasse.classList.toggle('actiu');
});
```

---

### Ex.6 – Esdeveniments: `alert` en clic de botó

Associa un event `click` a un botó que llança una finestra d'alerta nativa.

```js
const botoAlerta = document.getElementById('boto-alerta');
botoAlerta.addEventListener('click', function () {
  alert('Has clicat el botó!');
});
```

---

### Ex.7 – Estructura: `createElement` + `appendChild`

Crea un nou element `<li>` i l'insereix al final d'una llista `<ul>`.

```js
const botoAfegir = document.getElementById('boto-afegir');
botoAfegir.addEventListener('click', function () {
  const nouLi = document.createElement('li');
  nouLi.textContent = 'Nou element';
  const llista = document.getElementById('llista-compra');
  llista.appendChild(nouLi);
});
```

---

### Ex.8 – Eliminació: `remove()`

En fer clic sobre l'element, es crida `remove()` i desapareix del DOM.

```js
const elementEliminar = document.getElementById('element-eliminar');
elementEliminar.addEventListener('click', function () {
  elementEliminar.remove();
});
```

---

## Conceptes clau del DOM

- Selecció: `querySelector`, `getElementById`, `getElementsByClassName`
- Contingut: `textContent`, `innerHTML`
- Atributs: `setAttribute`, `getAttribute`
- Estils: `element.style.propietat`
- Classes: `classList.add`, `classList.remove`, `classList.toggle`
- Events: `addEventListener('event', callback)`
- Creació: `createElement`, `appendChild`, `insertBefore`
- Eliminació: `element.remove()`, `parentNode.removeChild()`
