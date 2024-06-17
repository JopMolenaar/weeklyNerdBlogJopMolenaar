## Pre CSS day

De laatste weekly nerd van de Minor is de georganiseerde pre van het opkomende event CSS Day waarvoor ik kaartjes had gewonnen. De minor had Bramus van Damme en Miriam Suzanne uitgenodigd om te spreken over view transitions en container queries. Beide relatief nieuw voor mij dus ik was erg benieuwd. 

### Bramus van Damme (View transitions)

Bramus werkt bij Google als front-end developer en hij was een leraar. Hij introduceerde ons de net geimplementeerde view transitions API. 

Hij liet voorbeelden zien die ik al eerder had gezien maar niet de implementatie die ik al eerder had gezien. Ik had het namelijk zelf al een keer geprobeerd met @keyframes en een delay op de link. 

#### Implementatie

De implementatie is als volgt:
<!-- TODO add implementatie -->

```
document.startViewTransition(()=>{

})

```

##### tweak the animations:

with css  but you cant use the elements in de snap shots, 

view-transition-name: box
box is in a different layer

view-transition-name: none doesnt capture the element

::view-transistion {
    pointer events: none
}

interrupted view transistions skip to the end (for now)

identify elements, set the names

.page1 h2 {
view-transition-name: name1
}
page2 h1{
view-transition-name: name1
}
same element I think



view-transition-class 
nmae needs to be unique, class is schared on these elements, 


#### Hoe het werkt

View transitions zijn niet alleen visueel een upgrade voor je website, maar het is ook handig voor UX. Dit komt doordat de gebruiker ziet dat sommige elementen hetzelfde zijn en daardoor makkelijk weer de link kan leggen met de andere pagina. 

<!-- view transitions for MPA's are here -->

<!-- fe developer -->
<!-- working at google -->


<!-- helpfull for ux -->



it takes snapshots and pauses the rendering of the new page
daarna laat hij de oude screen shot zien en render hij de andere pagina. 
En daarna laat hij de screenshots in elkaar faden. 
Maar je kan dus elementen skippen, of de transitie veranderen. 

user agent stylesheet, is the stylesheet of the browser, if vewtransitions are supporten is says: view-transistion: root

view transistion api (spa same doucment page)

 @view-transition {
    navigation: auto
    types: // could assign types here
 }

 if you dont know the tyopes up front: 

 pageswap and pagereveal on the window.addEventlistener
 and then you can add the type


screenshot way ()


cross document view transition chrome 126: two conditions: same site, same origin & both pages need to have it opt in: @view-transition {navigation: auto}

they will implement cross origin in the future

#### Extra things he said

run a blog he said, expose your work, write about it or something

 a (link) blocking="render" ??? use with caution








### Miriam Suzanne (container queries)

Miriam had het over container queries, zij is namelijk de bedenker daarvan en weet precies hoe het werkt en wilde ons overtuigen dat het geen loops veroorzaakt ook al denken veel mensen dat.

Veel mensen dachten dus inderdaar dat er loops zouden ontstaan doordat je de parent styled om de kinderen op een bepaalde manier te laten gedragen, en ... 

problems etc

it was asked for a decade, but they were scared it would cause layout loops

interinsic and extrinisic
pushing out and pushing in

content on the inside need to set the size of the parent and the parent set the sizes of the children = loop

contain: inline-size and not contain: size
but it could go wrong if you do display grid and justify-content: center

Met container style queries kan je elementen stylen aan de hand van welke styling ze hebben. Dit kan je gebruiken met het breedte van het element, andere styling of custom properties. 

### Reflectie

<!-- TODO BIJ ELKE EEN KORTE REFLECTIE  -->