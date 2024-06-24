## Weekly Nerd => Fenna de Wilde

### Samenvatting van de lezing

Fenna is een creative front-end developer en vindt toegankelijkheid erg belangrijk. Haar lezing ging dus ook over toegankelijkheid. Ze zei dat het bedrijfsleven nog heel veel toegankelijkheid mist en dat veel developers, designers en opdrachtgevers weinig geven om toegankelijkheid. Ze zit bij een bedrijf dat dat niet zo belangrijk vindt en dar gaat ze tegen in. Ook leert ze elk project nieuwe aria attributen. Aangezien dat er zo veel zijn wil je dat niet in een keer leren dus kiest ze er een per project. 

Wat Fenna gebruikt is Next.js, Emotion CSS library en Sanity. 

#### Focus state voor keyboard gebruikers

Met `:focus-visible` kan je een focus state voor keyboard gebruikers stylen. En daarbij zei ze ook dat als je een focus state vormgeeft, het het beste is om elk element apart te stylen.

#### Aria attributen

Ook had ze een hele lijst met aria attributen:

- aria-label - voor images, of een button met een icon, of logo in de nav
- aria-controls - is om bedienings elementen te koppelen aan het element dat het controleert, button of link
- aria-expanded - of het menu uitgeklapt is of niet
- aria-live - vertelt de screen reader wat de dynamische veranderingen zijn op de website, 
    - off
    - polite
    - assertive (is vrij agressief) 
- aria-atomic - true => ik wil dat deze hele groep opniew wordt geannounced
- role=""
- aria-role-description=""
- aria-labelledby, koppelt een element dat de button laat zien
- aria-label, gaat over de inhoud 
- aria-hidden=“” - List items neemt ie dus niet mee 

Nog een tip: Gebruik geen li elements voor slides

Carousel controls moet je groeperen met `role="group"` op de parent, en een `aria-label` toevoegen want de screen reader kan geen icoontjes herkennen, die ziet alleen een button met een svg. En wanneer je niet verder kan navigeren in de carousel, zet dan op de buttons: `aria-disabled=“true”`.

#### Kleur contrasten 

Zwart op wit is een 21:1 contrast ratio. Met lighthouse-audit om contrast te testen.
Ook zei ze dat de optimale regellengte van 50 tot 75 tekens is. En met de ch unit in css kan je dat stylen. 1ch is de breedte van de 0.

#### Wat kan je nog meer doen:

Wat je nog meer kan doen om je website nog toegankelijker te maken is het toevoegen van:

- Skip to content button
- Prefers reduce motion
- Autoplay moeten gepauzeerd kunnen worden
- Zelf een screen reader gebruiken

### Reflectie

Deze lezing vond ik interessant en belangrijk om ook deze kennis te gebruiken in mijn projecten. 
Heel veel aria attributen waren nieuw voor mij, en daarnaast wist ik al wel veel maar herhaling is altijd goed. 