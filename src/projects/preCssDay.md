## Pre CSS day

De laatste weekly nerd van de Minor is de georganiseerde pre van het opkomende event CSS Day waarvoor ik kaartjes had gewonnen. De minor had Bramus van Damme en Miriam Suzanne uitgenodigd om te spreken over view transitions en container queries. Beide relatief nieuw voor mij dus ik was erg benieuwd. 

### Bramus van Damme (View transitions)

Bramus werkt bij Google als front-end developer en hij was een leraar. Hij introduceerde ons de net geimplementeerde view transitions API. 

Hij liet voorbeelden zien die ik al eerder had gezien maar niet de implementatie die ik al eerder had gezien. Ik had het namelijk zelf al een keer geprobeerd met @keyframes en een delay op de link. 

#### Implementatie

De implementatie is als volgt:

```
document.startViewTransition(() => updateTheDOMSomehow());
```

Zo simpel is het. Nu fade je nieuwe pagina in met de oude.

##### tweak the animations:

view-transition-name: box; Box is in een andere laag

view-transition-name: none;pakt het element niet

::view-transistion {
    pointer-events: none
}

Onderbroken view transitions gaan naar het einde (voor nu)

Identificeer elementen, stel de namen in. Het onderstaande voorbeeld wordt behandeld als hetzelfde element in de transitie.

```
.page1 h2 {
    view-transition-name: name1
}
page2 h1{
    view-transition-name: name1
}
```

view-transition-class 
De naam moet uniek zijn, maar een class wordt gedeeld op deze elementen.

#### Hoe het werkt

View transitions zijn niet alleen visueel een upgrade voor je website, maar het is ook handig voor UX. Dit komt doordat de gebruiker ziet dat sommige elementen hetzelfde zijn en daardoor makkelijk weer de link kan leggen met de andere pagina. 

<!-- view transitions for MPA's are here -->

<!-- fe developer -->
<!-- working at google -->


<!-- helpfull for ux -->

Het neemt snapshots en pauzeert de rendering van de nieuwe pagina. Daarna laat hij het oude screenshot zien en rendert hij de andere pagina. En daarna laat hij de screenshots in elkaar faden. Maar je kunt dus elementen overslaan, of de transitie veranderen.

<!-- user agent stylesheet, is the stylesheet of the browser, if vewtransitions are supporten is says: view-transistion: root -->

View transistion api (spa same document page)

 @view-transition {
    navigation: auto
    types: // could assign types here
 }

Als je de types niet van tevoren weet: pageswap en pagereveal op de window.addEventListener en dan kun je het type toevoegen.

<!-- screenshot way () -->

Cross-document view transitions zijn in Chrome 126: maar ze hebben twee voorwaarden:

- Zelfde site, zelfde origin 
- Beide pagina's moeten dit in hun CSS hebben: @view-transition {navigation: auto}

Ze zullen in de toekomst cross-origin implementeren.

#### Extra things he said

Run een blog, zei hij, expose je werk, schrijf erover of iets dergelijks.

 <!-- a (link) blocking="render" ??? use with caution -->

### Miriam Suzanne (container queries)

Miriam had het over container queries, zij is namelijk de bedenker daarvan en weet precies hoe het werkt en wilde ons overtuigen dat het geen loops veroorzaakt ook al denken veel mensen dat.

Veel mensen dachten dus dat er loops zouden ontstaan doordat je de parent styled om de kinderen op een bepaalde manier te laten gedragen, en ook de kinderen kan stylen om de parent op een bepaalde manier te laten gedragen. 

<!-- It was asked for a decade, but they were scared it would cause layout loops. -->
Bij layout heb je interinsic and extrinisic. Bij interinsic drukken elementen naar buiten en bij extrinisic naar binnen. 
<!-- Content on the inside need to set the size of the parent and the parent set the sizes of the children = loop -->

contain: inline-size en niet contain: size. Maar het kan misgaan als je display grid doet en justify-content: center.

Met container style queries kan je elementen stylen aan de hand van welke styling ze hebben. Dit kan je gebruiken met het breedte van het element, andere styling of custom properties. 

### Reflectie

Ik vond de presentatie van Bramus echt heel goed en interessant. Ik had al wel een keer geprobeerd om view transitions te implementeren maar deed dat dus op en hele andere manier dan dat Bramus presenteerde. Dit heb ik uiteindelijk ook geimplementeerd in mijn blog. 
De presentatie van Miriam vond ik minder interessant en kon ik minder goed mijn aandacht bij houden. 