## css Day

### Intro

Omdat we de hackathon hadden gewonnen, kregen wij kaartjes van PPK en Krijn voor CSS DAY. Css day is een conferentie waar sprekers iets gaan vertellen over hun gedachtes over css en nieuwe features of technieken. Het was op 6 en 7 juni en er spraken 14 mensen uit verschillende landen die bijvoorbeeld werken bij Algolia, Google en Apple. Ook zitten sommige in de CSS working group en die bepalen hoe de nieuwe css features eruit komen te zien. 

### Matthias UX, web

Matthias werkt bij ... en heft al 18 jaar ervaring. 

Hij hiel een presentatie over ... en de titel was ...

Hij zei onderandere dat design tools nu minder krachtig zijn dan css en dat dus de creativiteit niet ten goede komt. Dit komt doordat er dus veel meer mogelijkheden zijn dan de designers denken dat kan. 

Hij liet een aantal voorbeelden zien die ik echt heel gaaf vond en zeker mee wil experimenteren en wil gebruiken in mijn designs. 

Hij liet Fluid web typography zien. Met berekeningen zorgde hij ervoor dat de typografie mee schaalde met de viewport. Dus in plaats van veel white space en een klein font op een grote monitor kan je met het grotere font de hele pagina visueel aantrekkelijk houden. 

<!-- TODO zelf de fluid type maken voor dot artikel -->

<!-- Fluid web typography => fluid type 
Fonts grow or shrink bc of the vp
Maybe not really excrssivble

Utopia is a calculator for fluid type

To scale it exponentially it requires a lot of math -->

Ook zei hij dat we css veel vroeger in het design process moeten gebruiken, terug komend op het punt dat de design tools minder krachtig zijn dan css. Ook moeten css dingen laten bepalen over hoe de website zich gedraagd. Denk aan automatische grids etc.
 <!-- // TODO zei hij dit? -->
<!-- TODO foto's -->
We kunnen css vroeger in het design process gebruiken door prototypes te bouwen, veel met de designers over en weer overleggen. En uiteindelijk de code uit de prototypes integreren in development.

<!-- Use css earlier in the design process 
Let css decide
Build prototypes -->


### Rachel Andrew 

Rachel is een developer bij chrome en werkt aan nieuwe features in css. 
Ze ging het hebben over mansory layout maar voordat ze het daar over had leerde ik al iets nieuws. Ze noemde namelijk subgrid. Ik wist wel wat subgrid deed en hoe het deels werkte, maar ik hed het nog nooit gebruikt, of een goed voorbeeld ervan gezien. Ze gaf een voorbeeld van kaartjes met een titeltje en een afbeelding erachter. Een titel was iets groter dan de andere en daardoor was die aan het wrappen. Daardoor waren de titels in de verschillende kaartjes niet meer mooi uitgelijnd. Dit loste ze op met subgrid en zei dat je subgrid kon gebruiken om een grid neer te zetten op elementen in elementen die in een grid zitten. Dit maakte een hoop duidelijk voor mij en ik snapte meteen hoe en waarvoor het gebruikt kon worden. 
Later had ze het over mansory en waarom het nog steeds veel issues heeft, en misschien helemaal nooit in css komt. Ze komen er namelijk niet uit waar manroy geplaats moet worden, is het een flex of een grid layout. Ook hebben ze nog problemen met de tab volgorde. Omdat sommige elementen wat langer zijn dan andere en sommige zelfs twee keer zo lang, zijn sommige al gefocused geweest als je de elementen in de volgende rij focused. Ik zou die dan gewoon overslaan, of misschien nog een keer laten focussen, ze zijn eenmaal groter en misschien dus belangrijker. Ook vergeleek ze het met grid: dense. Dit heeft namelijk soms ook nog wat problemen met de tab volgorde. 

Om dit op te lossen werken ze aan `Reading-order-items` om zo de items te kunnen reorderen. Ze hebben -items erachter gezet omdat ze misschien niet alleen de items willen reorderen. Ik vond dit ook interressant want je ziet dat ze heel goed nadenken voordat ze iets nieuws implementeren. Dit komt door browser backwards compatibility. Alles wat heeft gewerkt moet blijven werken. Anders gaan er namelijk heel weel websites op het web kapot. Ook gaven ze toe dat ze al eerder fouten hebben gemaakt met naamgeving. 
<!-- TODO dit zei iemand anders dacht ik, iets met animations name ofzo-->

<!-- TODO WAT IK ER ZELF VAN VIND FLEX OF GRID EN HOE HET ZOU MOETEN TABBEN -->

<!-- Dev at chrome, working on new features in css -->

<!-- Subgrid fixes the alignment of the  elements inside the elements in the grid  -->

<!-- Talked about Mansory and why it still has problems (weird order etc) -->
<!-- Same as dense -->

<!-- Reordering items is getting worked on -->
<!-- Reading-order-items -->

### Sarah Dayan
 
Sara is een principal engineer bij Algolia. 
Zij had het over atomic css (utility css)
Vs semantic css. Ze zei dat dit een mythe was en dat ging ze deze presentatie uitleggen: inline styles are the same as atomic css. 
Ze zei dingen zoals “Inline styles have a local impact.” En ze zei nog veel meer om duidelijk te maken dat utility css geen inline styles zijn. Om zo mensen utility css te laten gebruiken denk ik. Ook vindt ze t handing om tussen verschillende projecten te switchen dat hetzelfde framework (utility css) gebruiken en makkelijk dus de styling aan te kunnen passen etc. Dit snap ik ook wel, maar als je semantische html schrijft, en je werkt in components kan je de css clean houden en de html dus ook. Ik ben veel meer voor het gebruiken van je eigen gemaakte classes dan dat je vast zit aan tailwind ofzo. Want dan moet je ook nog eens wachten totdat alle nieuwe features in tailwind zitten voordat je die kan gebruiken. Of je moet css erbij gaan schrijven naast het gebruiken van tailwind. Maar dat vindt ik ook niks. Liever eigen styling schrijven, custom properties gebruiken zodat het makkelijk aan te passen is en de html blijft overzichtelijk. Dat is nou eenmaal wel de content die op je website komt. 


### Julia Miocene 

We hadden natuurlijk al wat wat gezien van Julia toen ze was uitgenodigd om iets voor de klas te vertellen over wat ze doet. 
Dit keer ging ze nog iets verder en vertelde onder andere hoe ze light sources bouwde en gebruikte om haar karakters tot leven te brengen. Ook vertelde ze hoe ze 3D karakters bouwde door middel van kubussen. Kubussen zijn vierkant maar om rondingen te maken had ze ook iets op bedacht. De kanten roteerde ze naar binnen of buiten en de overlappende delen snijd ze eraf met clippath (dacht ik). En om het iets echter te maken gebruikt ze Noise. Dit doet ze met SVG filters en liet ook zien hoe het er dan uit zag ik de code. 
Dit ga ik ook zeker gebruiken. 

- Cutting edges => clippath
- Noise svg filters 
- Nothing is impossible quote

### Roel Niskens

Roel zijn presentatie was ook erg goed. 
Ik heb zelf niet heel veel met fonts maar wat hij laat zien boeit mij toch wel elke keer weer. Over hoeveel opties zo’n font heeft, dat er logica achter zit, en hoe een font je website vormgeving en toegankelijkheid echt een boost kan geven. 

- Opentype layout features
- Curning
- Ligatures 

### Elika Etemad

Elika werkt bij Apple en gaf een presentatie over de basis van css.
Haar presentatie kon ik echt niet volgen. Ze gaf 0 context, gebruikte moeilijke termen, sprak ontzettend snel en las haar presentatie voor. 

<!-- Works at apple -->
De basics van css zijn:
￼
+ understandable 
+ performant
+ international 
+ integrated
<!-- en nog een aantal -> staan op de foto's  -->

### Stephen hay

Stephen Hay had het over de geschiedenis van css en layouts en over een soort loop waar je uit moet komen. 
Use the new features, be creative

- History of css and layouts
- Tips on how te be creative: set constraints for yourself. 

### Kevin Powell 



Min(…px, …%)
Layouts berekenen met variables 
Calc in media queries

Ik moet vaker dit doen met custom prop en calc layouts

### Sarah soueidan

Sarah had het over toegankelijkheid met css en noemde veel dingen die je moet en niet moet doen.

<!-- list style: none => "" -->


Extra c in css
Tree
- role
- Name
- Description 
- State

Lost style none op list in nav haalt niet de hoeveelheid van de list af voor screen reader


### Tab Atkins 

Tab Atkins ging het hebben over anchor positioning. Maar voordat hij daar over ging vertellen had hij het over position in het algemeen. Ik had geen koffie op en viel vaak bijna even weg. Uiteindelijk kreeg ik mijn aandacht er weer bij toen hij startte met anchor positioning. 
Dit vond ik erg interessant want dit had ik ook nog nooit gebruikt. Ik wist wel dat het bestond en dat we het wilde gaan gebruiken in het project waar ik mee bezig ben, maar verder was ik er nog niet ingedoken.  

<!-- Anchor positioning -->
<!-- TODO Foto’s -->

### Carmen Ansio

Carmen werkt bij lottiefiles en had het over scroll driven animations.

<!-- TODO fotos -->
<!-- Scroll driven animations  -->

### Roma komarov

Roma is iemand die ontzetten veel experimenteerd met nieuwe css technieken. Hij liet echt ontzettend coole dingen zien en inspireerde mij van wat je er allemaal mee kon. 

Hij liet dingen zien zoals de sticky headings net zoals bij VScode, gemaakt met scroll animations. 
En coole dingen gemaakt met anchor positioning waarvan ik ook weer meteen inspiratie kreeg. 
<!-- TODO en nog meer -->

Ook had hij het over wanneer je zou moeten experimenteren en zei dat je moet experimenteren als er een usecase is en als het impect zou hebben. 

<!-- When to experiment => when there is a isecase and it has a impact! -->

<!-- Lots of cool experiments with anchor positioning -->
<!-- And scroll driven animations  -->

<!-- TODO SCROLL DRIVEN ANIMATIONS MET DIE HEADINGS MAKEN -->
<!-- TODO ANCHOR POSTIONING ELEMENT ON THE NAV VAN WAAR JE SCROLLT-->

### Josh Comeau 

Josh had het over het les geven aan mensen over css. Hij zei dat hij soms dingen tegen komt waarvan hij denkt dat dat heel raar is. Na wat googlen kan hij het oplossen maar Josh gaat op onderzoek uit en kijkt hoe en waarom dat zo werkt. Zo liet hij een voorbeeld zien van een plaatje in een div met een border. Er kwam ruimte onder het plaatje te zitten. Dit kwam uiteindelijk doordat het plaatje op de baseline wordt geplaatst. Je kan dan line height 0 zeggen maar ook wat andere dingen doen 
<!-- TODO FOTOS + MISSCHIEN IN RESET CSS ZETTEN -->

<!-- Teaching css -->
<!-- Eye opener om te kijken hoe dingen in elkaar zitten,  -->

### Nicole sullivan

Nicole had het ook over mansory layout.  
<!-- TODO nog doen.  -->





Na de talks op de tweede dag heb ik kunnen praten met Lea verou, Bramus, een backend developer bij werkspot, Roel natuurlijk, iemand van IO België en nog een aantal. Hij moest spreken bij css café en verder raadde hij ons aan om bij vergaderingen te zitten bij W3c community groups. 

### Reflectie 
Induiken of downloaden:
+ Front end social
+ mastodon 

Ik was erg onder de indruk hoe veel we al weten en hoe veel mensen we al ontmoet hebben door onze studie. Ook ben ik geïnspireerd door …, ga ik nieuwe dingen gebruiken zoals … en ga ik meer experimenteren met nieuwe technieken want zoals … al zei: 

Uiteindelijk heb ik dus dit artikel gemaakt over css day en wilde ik daarbij de nieuwe geleerde technieken uitproberen. In dit artikel kan je daar een aantal dingen van terug zien namelijk:
- De headings die aan de boven kant blijven hangen en omhoog worden gedrukt door de volgende heading. Dit heb ik gedaan met scroll driven animtions. 

Dit is de code (simplified):

```css
    h2 {--sticky-top: 0rem;}
    h3 {--sticky-top: 2.1rem;}
    h4 {--sticky-top: 4rem;}

    h2, h3, h4 {
        animation: shrink linear forwards;
        animation-timeline: view();
        animation-range: calc(90vh - 3em - var(--sticky-top) - 80px) calc(100vh - 10vh - 25px);
    }
```

Hiervan heb ik ook nog andere dingen meegenomen van de talks namelijk over engineren en met custom properties werken

Ook heb ik met anchor positioning gespeeld. Dit kan je terug zien bij het hoveren op de navigatie rechts op de pagina. De uitdaging was om het zo generiek moeglijk te schrijven, en daardoor kwam ik tegen wat dingen aan die ik wel in css zou willen zien. Zoals custom properties kunnen gebruiken voor anchor-name. Dus in plaats van de code zo te moeten schrijven voor anchor positioning:

```css 
    /* Hardcoded duplicate code */
    article .nav li:nth-of-type(1) { anchor-name: --1; }
    article .nav li:nth-of-type(2) { anchor-name: --2; }
    article .nav li:nth-of-type(3) { anchor-name: --3; }
    article .nav li:nth-of-type(4) { anchor-name: --4; }
    article .nav li:nth-of-type(5) { anchor-name: --5; }

    :root:has(article .nav li:nth-of-type(1):hover) { --anchor: --1; }
    :root:has(article .nav li:nth-of-type(2):hover) { --anchor: --2; }
    :root:has(article .nav li:nth-of-type(3):hover) { --anchor: --3; }
    :root:has(article .nav li:nth-of-type(4):hover) { --anchor: --4; }
    :root:has(article .nav li:nth-of-type(5):hover) { --anchor: --5; }

    article .nav:has(li:hover):after {
        opacity: 1;
    }
    
    nav::after {
        position-anchor: var(--anchor);
      inset:
        anchor(top)
        anchor(right)
        anchor(bottom)
        anchor(left);
    }
```

Wilde ik het graag zo doen:

```css
    /* Voeg meer toe zo nodig */
    li:nth-of-type(1){--anchorName: --1}
    li:nth-of-type(2){--anchorName: --2}
    li:nth-of-type(3){--anchorName: --3}
    li:nth-of-type(4){--anchorName: --4}
    li:nth-of-type(5){--anchorName: --5}
    li:nth-of-type(6){--anchorName: --6}

    /* Deze regels hieronder blijven hetzelfde  */
    article .nav li { anchor-name: var(--anchorName);}

    :root { --anchor: --1; }

    :root:has(article .nav li:hover) { --anchor: var(--anchorName);}

    nav::after {
        position-anchor: var(--anchor);
        inset:
            anchor(top)
            anchor(right)
            anchor(bottom)
            anchor(left);
        }
```

Ook heb ik fluidtype toegevoegd aan mijn  design. Dit opent veel deuren voor mij omdat ik dan minder mijn hofd moet breken over nieuwe layouts creeeren op verschillende scherm groottes. 
