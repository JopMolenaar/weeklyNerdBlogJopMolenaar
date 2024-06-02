# Weekly Nerd => Kilian Valkhof

7 Februari 2024

## Samenvatting van de lezing

Kilian Valkhof is de oprichter van polypane en is lid van het electron governance team dat Frameworks bouwt voor browsers. 

Hij zei in de lezing dat je bij het bouwen van website de "rule of least power" moet gebruiken. Dit houdt in dat je de programmeer taal kiest die het minst kan maar voldoene is voor je doel. Voor een normale webpagina gebruik je dus eerst html, daarna css, en dan pas Javascript. Zo heb je de meeste kans dat je website overal kan worden gebruikt en minder snel stuk gaat onder bepaalde omstandigheden.

Een voorbeeld dat hij hierbij gaf was dat als je door en tunnel rijdt en het internet slecht is, dat je Javascript pagina dan niet meer beschikbaar is, maar als het alleen html en css was, was het wel beschikbaar.

Ook moet je goed kijken of jouw doel kan worden behaald zonder javascript en libraries. Dit moet namelijk allemaal worden gedownload, en veel browsers hebben al heel veel fucntionaliteiten ingebouwd die het misschien wel aleen met html en css kunnen. 

Ook gaf hij een hele goede tip: 

Als je in de komende jaren iets gaat bouwen dat je al eerder hebt gebouwd, en dat wilt hergebruiken, kijk eerst of er een betere manier is om het te bouwen dan dat je al had. Browser funtionaliteiten gaan namelijk heel snel vooruit en er zou zo maar een mogelijke browser oplossing klaar liggen die je eerst met javascript had gebouwd. 

Daarna ging hij door een lijst met html en css code die voor bepaalde doelen kunnen worden gebruikt die eerst vaak met Javascript werden gemaakt. 

### Custom toggles

Custom toggles worden vaak gebruikt op `form` `img` en andere elementen.
Kan je herkennen aan de `::` na een element, voor de custom toggle.

Hij had het over `::focus-visible` en deze toggle geldt alleen als je geen interactie hebt met de muis, verder wel.

Ook heb je `input::thumb` om het rondje in de switch aan te roepen.
en `input::track` om de achterkant van de switch aan te roepen. 

Ook kwam er een vraag uit het publiek wat het verschil was tussen `appearance: none;` en `all: unset;`. Bij `appearance: none;`  zeg je dat de browser dit element niet hoeft te vervangen en niet de standaard styling wil, waardoor je hem zelf beter kan stylen. 
Met `all: unset;` zeg je dat je helemaal geen styling wilt en is minder agressief.

### Datalist

Met het datalist element in html maak je een automatic complete field. Dit hoef je dus niet meer met Javascript te schrijven.

```md
<datalist> 
    <options></options>
    <options></options>
    <options></options>
</datalist>
```

Je kan hem alleen nog niet stylen. Als je dat echt wilt zul je hem wel moeten maken met javascript. Maar het stylen van dit element zou best wel snel in de toekomst kunnen worden toegev=oegd aan browsers. 

### Color pickers

Hij zei ook wat over color pickers. Met `input-type="color"` op het input element krijg je een heleboel colorpicker functionaliteiten van de browser, en je krijgt zelfs meer dan je zelf kan maken met Javascript.

Ook kan je met `color-scheme: dark;` op de input, het element dark laten stylen door de browsers. 

### In-page transitions

Met In-page transitions vervang je honderden regels js + jquery met 1 regel html en dan heb je ook nog een betere ervaring. 
<!-- wat is die regel html? -->
Maar bij scrollen op de pagina kan t ook met 2 regels js.
<!-- welke twee reges? -->

### Accessibility

Accessibility is heel belangrijk en je zou animaties moeten kunnen uitzetten voor mensen die dat willen. Dit kan met `@media {prefers-reduced-motion:no-preference}`.

Als je links hebt die verwijzen naar een kopje op de zelfde pagina dan springt dat daar zo naar toe. De gebruiker weet dan niet waar ze zijn en hoeveel content ze hebben gemist. 
Met `scroll-behavior: smooth;` ga je dat tegen en ziet de gebruiker een mooie scroll animatie. Deze moet je dus wel in de `@media (prefers-reduced-motion:no-preference)` zetten. 

Ook heb je `scroll-margin`, dit is een margin tot waar die naar boven scrolled, zo kan je bepalen waar dat gelinkte kopje op je scherm komt als je op die link klikt. 

Als je op de link klikt en je springt naar het gelinkte kopje op de pagina kan je dit een styling geven met `:target`. Dit geeft dan styling weer als dat element getarget wordt. 

### Carousels

scroll-snap api's

adam argyle snap video's

### Accordions and modals

Accordions of ook wel details and summary's genoemd hoef je ook niet met Javascript te maken. 

```md
<details>
  <summary>Titel</summary>
  <p>Text over die titel dat uitklapt als je op de titel klikt.</p>
</details>
```

Met `::marker` kun je de marker naast een list item of het summary element stylen
Met [open] kun je de details en summary een andere styling geven als die open is

Ook is het handig om een de muis een pointer te maken en hover styling toe te voegen op de :hover van een details en summary. Want dit gebeurt niet automatisch

Ook gaf hij als tip dat je de details en summary niet moet dichtmaken als je op een andere klikt. Soms willen mensen vergelijken en dan moet de gebruiker er heel vaak op klikken om zijn/haar doel te behalen. 


### Dialog

In plaats van zelf een goeie popup te bouwen met Javascript kan je ook het html element `<dialog><dialog/>` gebruiken. Een dialog blokeert de javascript daar achter niet maar een `<alert></alert>` wel. 

In de dialog kan je een button zetten met `type="submit"` om de dialog te sluiten. En als je data terug wilt sturen zet je de submit button in een form in de dialog.
Je kan de value in Javascript dan ophalen met `dialog.returnValue`.
Om de dialog aan te roepen moet je wel Javascript schrijven, maar dat kan je doen met `jeDialogElement.showModal()`. 

De dialog komt boven alles want het komt in de top layer. En je kan ook dialogs in/over dialogs plaatsen.

Om alles rondom de dialog (achter de modal) te kunnen stylen kan je met `::backdrop` dat aanroepen en stylen. 

### Container queries

Container queries werken als een soort media queries, maar dan in plaats van hoe breed mijn vp is, is het: hoe breed is mijn container? Dus dan kan je hoe de childs in die container zich moeten gedragen. Hierdoor hoef je dus niet extra media queries toe te voegen. 

Je kan dit doen met `container-type:` en `@container (min-width: ...em)`
En 50cqw container units is dus 50% van de container breedte. 

### :has()

:has() is een parent selector, dit kan je bijvoorbeeld zo gebruiken:
```css
h1:has(+ p) {
  margin-bottom: 0;
}
```
Hier zeg je: als een h1 meteen een p eronder heeft, geef het dan een `margin-bottom: 0;`.
Voor meer info: [polypane.app/blog/where-is-has/](https://polypane.app/blog/where-is-has-new-css-selectors-that-make-your-life-easier/)


### Features van browsers en css waar nog aan wordt gewerkt

Hier noemde hij een lijstje van browser functionaliteiten die in weinig browsers al zitten, maar dit aankomende tijd wel wordt toegevoegd aan veel browsers. 

- `field-sizing: content;`:  styling op een input element die dan mee schaalt met de content.
- masonry grid: een gird dat zichzelf opvult
- selectlist (html element): selectlist heeft alle semantics en interactie van een gewone select, maar die kan je stijlen.
    - div met slot="listbox"
    -  :parts
    - [popover]
- scroll driven animations: animatie koppelen aan een scroll ergens op de pagina

Voor meer info over scroll driven animations: [bram.us/scroll-driven-animations-cover-flow](https://www.bram.us/2023/02/12/scroll-driven-animations-cover-flow-2022-10-06-full-stack-europe/)


### Conclusie

De conclusie uit Kilians lezing was dat je moet proberen om zo min mogelijk Javascript te gebruiken en vooral te kijken naar wat er al mogelijk is in de browser met html en css. 
Als je zo min mogelijk javascript gebruikt en het meeste kan behalen met html en css wordt je website sneller en gaat minder snel kapot.

## Reflectie

Ik vond de persentatie van Kilian heel interessant, confronterend en hij heeft zeker indruk op mij gemaakt. Ik ben het helemaal met hem eens dat je niet Javascript moet gebruiken als je met html en css het zelfde doel kan behalen. Een aantal css selectoren die hij besprak kende ik al wel maar veel ook niet. Dit waren namelijk:

- `::focus-visible`
- `input::thumb`
- `input::track`
- `appearance: none;`
- `:target`
- `scroll-margin`
- `:has()`

Ook wist ik niet dat er een `<dialog><dialog/>` element was terwijl ik zelf al we eerder had gewerkt met modals. Dus die ga ik zeker later gebruiken. Container queries kende ik ook niet. 

En laatst bij mijn vorige project had ik met Javascript een automatic complete field gemaakt. Dit koste mij een uurtje om te maken en had 120 regels Javascript. Ik fetchte alle data, plaatste die in een ul onder de input balk met en een display none. Als je iets typte in de input balk dan zocht hij in de list op wat je had getypt. En zo werd de input een soort searchbar. En wanneer je op de li klikte werd dat de value van de input. 
Ik was hier aardig trots op maar Kilian noemde tijdens zijn presentatie het html element `<datalist></datalist>` met options erin. Als ik dat had geweten had ik de vorige keer alleen de data moeten fetchen en die in de datalist moeten stoppen. De volgende keer doe ik dat.

Al deze nieuwe informatie is wel wat veel dus ik ga af dit terug lezen om te kijken of ik zo mijn code en projecten kan verbeteren.

Op het laatst was er nog een vraag over AI in het werkveld en daarbij gaf hij een goeie tip want hij zei: juniors worden waarschijnlijk bij bepaalde bedrijven verboden om AI te gebruiken, dit komt doordat als je AI steeds je code laat schrijven, je minder goed snapt wat de code doet. En hoe je dus fouten van de AI kan corrigeren. 
Ik gebruik veel chatGPT om mijn code sneller te schrijven, maar dit kijk ik altijd na, documenteer het, en als het niet werkt los ik het zelf op. Maar aangezien er een kans is dat ik geen AI mag gebruiken in het begin van mijn carrière, zal ik er op letten dat ik het meeste zelf schrijf. 