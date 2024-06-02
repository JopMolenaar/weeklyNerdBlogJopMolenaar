# Weekly Nerd => Fenna ...

7 Februari 2024

## Samenvatting van de lezing

Fenna ...  is
Wat zij gebruikt:
Next.js
Emotion CSS library
Sanity
Ze heeft hele leuke en mooie dingen gemaakt als creative front-end developer.

Haar lezing ging over toegankelijkheid. Ze zei dat het bedrijfsleven nog heel veel toegankelijkheid mist. En dat veel developers, designers en opdrachtgevers weinig geven om toegankelijkheid. 

Ze kwam met een lijst bestaande uit html attributen en css selectors

### focus state voor keyboard gebruikers

Met `:focus-visible` kan je een focus state voor keyboard gebruikers stylen. En daarbij zei ze ook dat als je een focus state vormgeeft, het het beste is om elk element apart te stylen.

### aria attributen

Ook had ze een hele lijst met aria attributen:

- aria-label voor images, of button met en icon, logo in de nav
- aria-controls, bedienings elementen te koppelen aan het element dat het controleert, button link of tab
- aria-expanded, of het menu uitgeklapt is of niet
- aria-live, vertelt de screen reader wat de dynamische veranderingen zijn op de website, 
    - off
    - polite
    - assertive => vrij agressief

- aria-atomic, true => ik wil dat deze hele groep opniew wordt geannounced
- role=""
- aria-role-description=""
- aria-labelledby, geef de id mee
- aria-label, inhoud 
- aria-hidden=“” List items neemt ie dus niet mee 

Nog een tip: 
Gebruik geen li elements voor slides

Carousel controls moet je groeperen met `role="group"` op de parent, een `aria-label` toevoegen want de screen reader kan geen icoontjes herkennen, die ziet alleen een button met een svg. En wanneer je niet verder kan navigeren in de carousel, zet dan op de buttons: `aria-disabled=“true”`.

### Kleur contrasten 

1/21
Zwart op wit is 21:1

Lighthouse-audit om contrast te testen

Lettergrootte is ook belangrijk
Minimaal 16px

Regellengte van 50 tot 75 tekens
Ch unit in css : 1ch is de breedte van de 0 

Alt text 
Correcte semantiek 
Nav, h1 tot en met h6, button of a

### Wat kan je nog meer doen:

Skip to content button
Prefers reduce motion
Autoplay moeten gepauzeerd kunnen worden
Zelf een screen reader gebruiken

## Reflectie

Deze lezing vond ik ook interessant en belangrijk om ook deze kennis te gebruikein in mijn projecten. 
Heel veel aria attributen waren nieuw voor mij.