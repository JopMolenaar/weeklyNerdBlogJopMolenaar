## CSS Day

### Intro

Omdat we de hackathon hadden gewonnen, kregen wij kaartjes van PPK en Krijn voor CSS DAY. Css day is een conferentie waar sprekers iets gaan vertellen over hun gedachtes over css en nieuwe features of technieken. Het was op 6 en 7 juni en er spraken 14 mensen uit verschillende landen die bijvoorbeeld werken bij Algolia, Google en Apple. Ook zitten sommige in de CSS working group en die bepalen hoe de nieuwe css features eruit komen te zien. 

### Matthias Ott

Matthias Ott hield een presentatie over web design engineering.

Hij zei onder andere dat design tools nu minder krachtig zijn dan css en dat dus de creativiteit niet ten goede komt. Dit komt doordat er dus veel meer mogelijkheden zijn dan de designers denken dat mogelijk is. 

Hij liet een aantal voorbeelden zien die ik echt heel gaaf vond en zeker mee wil experimenteren en wil gebruiken in mijn designs. 

Hij liet namelijk fluid web typography zien. Met berekeningen zorgde hij ervoor dat de typografie mee schaalde met de viewport. Dus in plaats van veel white space en een klein font op een grote monitor kan je met het grotere font de hele pagina visueel aantrekkelijk houden. 

Dit is de regel die ik nu gebruik voor de font-size in dit artikel: `font-size: clamp(1rem, calc(1rem * 0.6522) + 0.87vw, 1.4rem);`

Utopia is een website waar je berekeningen kan maken voor fluid type en dat dan kopieren in je project. 

Om je font exponentieel je laten groeien heb je wel wat meer nodig can alleen die ene regel. Dit vereist veel wiskunde en liet dit ook zien in zijn presentatie. 

Ook zei hij dat we css veel vroeger in het design process moeten gebruiken, terug komend op het punt dat de design tools minder krachtig zijn dan css. Ook moeten we css dingen laten bepalen over hoe de website zich gedraagd. Denk aan automatische grids etc.

We kunnen css vroeger in het design process gebruiken door prototypes te bouwen, veel met de designers over en weer overleggen. En uiteindelijk de code uit de prototypes integreren in development.

### Rachel Andrew 

Rachel is een developer bij chrome en werkt aan nieuwe features in css. 
Ze ging het hebben over mansory layout maar voordat ze het daar over had leerde ik al iets nieuws. Ze noemde namelijk subgrid. Ik wist wel wat subgrid deed en hoe het deels werkte, maar ik hed het nog nooit gebruikt, of een goed voorbeeld ervan gezien. Ze gaf een voorbeeld van kaartjes met een titeltje en een afbeelding erachter. Een titel was iets groter dan de andere en daardoor was die aan het wrappen. Daardoor waren de titels in de verschillende kaartjes niet meer mooi uitgelijnd. Dit loste ze op met subgrid en zei dat je subgrid kon gebruiken om een grid neer te zetten op elementen in elementen die in een grid zitten. Dit maakte een hoop duidelijk voor mij en ik snapte meteen hoe en waarvoor het gebruikt kon worden. 
Later had ze het over mansory en waarom het nog steeds veel issues heeft, en misschien helemaal nooit in css komt. Ze komen er namelijk niet uit waar manroy geplaats moet worden, is het een flex of een grid layout. Ook hebben ze nog problemen met de tab volgorde. Omdat sommige elementen wat langer zijn dan andere en sommige zelfs twee keer zo lang, zijn sommige al gefocused geweest als je de elementen in de volgende rij focused. Ik zou die dan gewoon overslaan, of misschien nog een keer laten focussen, ze zijn eenmaal groter en misschien dus belangrijker. Ook vergeleek ze het met grid: dense. Dit heeft namelijk soms ook nog wat problemen met de tab volgorde. 

Om dit op te lossen werken ze aan `Reading-order-items` om zo de items te kunnen reorderen. Ze hebben -items erachter gezet omdat ze misschien niet alleen de items willen reorderen. Ik vond dit ook interressant want je ziet dat ze heel goed nadenken voordat ze iets nieuws implementeren. Dit komt door browser backwards compatibility. Alles wat heeft gewerkt moet blijven werken. Anders gaan er namelijk heel weel websites op het web kapot. Ook gaven ze toe dat ze al eerder fouten hebben gemaakt met naamgeving.

### Sarah Dayan
 
Sara is een principal engineer bij Algolia. 
Zij had het over atomic css (utility css)
Vs semantic css. Ze zei dat dit een mythe was en dat ging ze deze presentatie uitleggen: inline styles are the same as atomic css. 
Ze zei dingen zoals “Inline styles have a local impact.” En ze zei nog veel meer om duidelijk te maken dat utility css geen inline styles zijn. Om zo mensen utility css te laten gebruiken denk ik. Ook vindt ze t handing om tussen verschillende projecten te switchen dat hetzelfde framework (utility css) gebruiken en makkelijk dus de styling aan te kunnen passen etc. Dit snap ik ook wel, maar als je semantische html schrijft, en je werkt in components kan je de css clean houden en de html dus ook. Ik ben veel meer voor het gebruiken van je eigen gemaakte classes dan dat je vast zit aan tailwind ofzo. Want dan moet je ook nog eens wachten totdat alle nieuwe features in tailwind zitten voordat je die kan gebruiken. Of je moet css erbij gaan schrijven naast het gebruiken van tailwind. Maar dat vindt ik ook niks. Liever eigen styling schrijven, custom properties gebruiken zodat het makkelijk aan te passen is en de html blijft overzichtelijk. Dat is nou eenmaal wel de content die op je website komt. 

### Julia Miocene 

We hadden natuurlijk al wat wat gezien van Julia toen ze was uitgenodigd om iets voor de klas te vertellen over wat ze doet. 
Dit keer ging ze nog iets verder en vertelde onder andere hoe ze light sources bouwde en gebruikte om haar karakters tot leven te brengen. Ook vertelde ze hoe ze 3D karakters bouwde door middel van kubussen. Kubussen zijn vierkant maar om rondingen te maken had ze ook iets op bedacht. De kanten roteerde ze naar binnen of buiten en de overlappende delen snijd ze eraf met clippath (dacht ik). En om het iets echter te maken gebruikt ze Noise. Dit doet ze met SVG filters en liet ook zien hoe het er dan uit zag ik de code. 
Dit ga ik ook zeker gebruiken. 

### Roel Niskens

Roel zijn presentatie was ook erg goed. 
Ik heb zelf niet heel veel met fonts maar wat hij laat zien boeit mij toch wel elke keer weer. Over hoeveel opties zo’n font heeft, dat er logica achter zit, en hoe een font je website vormgeving en toegankelijkheid echt een boost kan geven. 

### Elika Etemad

Elika werkt bij Apple en gaf een presentatie over de basis van css.
Haar presentatie kon ik echt niet volgen. Ze gaf 0 context, gebruikte moeilijke termen, sprak ontzettend snel en las haar presentatie voor. 

<!-- Works at apple -->
<!-- De basics van css zijn:
￼
+ understandable 
+ performant
+ international 
+ integrated -->
<!-- en nog een aantal -> staan op de foto's  -->

### Stephen Hay

Stephen Hay had het over de geschiedenis van css en layouts en over een soort loop waar je uit moet komen.

Zijn boodschap was vooral om te experimenteren met css, de nieuwe technieken te gebruiken zoals grid-template die bijvoorbeeld nooit iemand gebruikt. En als je experimenteerd kom je altijd achter iets nieuws.

Ook gaf hij wat tips en zei dat als je jezelf beperkingen oplegt, je creatievere oplossingen gaat bedenken. 

### Kevin Powell 

Op dag 2 begon Kevin Powell over het over engineren van je css. De titel was echter: "Don't over engineer je css" omdat hij veel boze reacties had gekregen op een youtube short omdat hij een wrapper zijn breedte zogenaamd had over geengineerd. Het ging over deze regel: `min(100% - 4rem, 60ch);`. Veel mensen vinden dit niet leesbaar, en zeiden daarom dat je het niet moet gebruiken. Kevin zei dat je het juist wel moet gebruiken en mensen mee moeten gaan met de tijd en in de nieuwe features van css moeten duiken. 

Ook liet hij voorbeelden zien van layouts berekenen met custom properties en dat je blijkbaar calc kan gebruiken in media queries.

Ik snap wel wat die regel betekent en vind hem ook leesbaar. Verder vond ik dat ik vaker met custom properties moet werken en calc in layouts gebruiken. 

### Sarah soueidan

Sarah had het over toegankelijkheid met css en noemde veel dingen die je moet en niet moet doen.

Ze noemde vier informatie bronnen uit de accessibility tree object namelijk:

- Role - wat voor ding is het
- Name - hoe noemen we dit element
- Description - hoe beschrijven we verder dit ding
- State - wat is de huidige staat

<!-- list style: none => "" -->

Ook noemde ze veel voorbeelden op wat wel accessible is en wat niet. Hoe je elementen kan laten verdwijnen en wat de gevolgen daarvan zijn. En dat dit symbool: ⓘ niet goed wordt opgelezen door screen readers en dit een betere oplossing daarvoor is:

```
.info:before {
    content: "ⓘ" / "info: ";
}
```
<!-- 
List style none op een lijst in de nav haalt niet de hoeveelheid van de list af voor screen reader -->

Ook noemde ze dingen die je moet vermijden op je website zoals het laten zien van content als css er is, maar ook dubbele labels enzo.

### Tab Atkins 

Tab Atkins ging het hebben over anchor positioning. Maar voordat hij daar over ging vertellen had hij het over position in het algemeen. Ik had geen koffie op en viel vaak bijna even weg. Uiteindelijk kreeg ik mijn aandacht er weer bij toen hij startte met anchor positioning. 
Dit vond ik erg interessant want dit had ik ook nog nooit gebruikt. Ik wist wel dat het bestond en dat we het wilde gaan gebruiken in het project waar ik mee bezig ben, maar verder was ik er nog niet ingedoken.  

Uiteindelijk ben ik er dus in gedoken en heb het gebruikt voor de navigatie rechts op de pagina. 

### Carmen Ansio

Carmen werkt bij lottiefiles en had het over scroll driven animations.
Ik had al wel vaker gewerkt met scroll driven animations en wist al erg veel.

### Roma komarov

Roma is iemand die ontzettend veel experimenteerd met nieuwe css technieken. Hij liet echt ontzettend coole dingen zien en inspireerde mij van wat je er allemaal mee kon. 

Hij liet dingen zien zoals de sticky headings net zoals bij VScode, gemaakt met scroll animations. Hij maakt ook coole dingen met anchor positioning waarvan ik ook weer meteen inspiratie kreeg en natuurlijk de fit text to width wat ik ook heb gebruikt in dit project op de home pagina. 

Ook had hij het over wanneer je zou moeten experimenteren en zei dat je moet experimenteren als er een usecase is en als het impect zou hebben. 

### Josh Comeau 

Josh had het over het les geven aan mensen over css. Hij zei dat hij soms dingen tegen komt waarvan hij denkt dat dat heel raar is. Na wat googlen kan hij het oplossen maar Josh gaat op onderzoek uit en kijkt hoe en waarom dat zo werkt. Als mensen dan naar heb toekomen voor vragen over css zegt hij nu niet alleen het antwoord maar ook waarom dat zo werkt. Dit gaf zo veel meer duidelijkheid voor de mensen die naar toe kwamen en liet ze css niet alleen kunnen schrijven, maar ook begrijpen. Hierdoor heeft hij een cursus opgezet "Javascript voor developers" waarbij hij veel mensen heeft kunnen helpen. 

Zo liet hij een voorbeeld zien van een plaatje in een div met een border. Er kwam ruimte onder het plaatje te zitten. Dit kwam uiteindelijk doordat het plaatje op de baseline wordt geplaatst. Je kan dan `line-height: 0;` zeggen maar ook wat andere dingen daar tegen doen zoals `vertical-align: bottom;` of `display: block;` of `display: flex;` op de parent.

Maar Josh had het ook over layouts, en bijvoorbeeld waarom z-index soms niet werkt op elementen in andere elementen.

### Nicole Sullivan

Nicole werkt aan browsers en ging het hebben over mansory layout. Ze had het over wat het is, welke websites het al een soort van gebruiken, en welke websites geen mansory hebben maar het soms wel lijkt. Dit zie je onderandere bij google images. Dit lijkt een mansory maar dat is het niet want als je items toevoegd gaan die naar onderen en je scrolled verticaal dus het is meer een flex layout. Ook op Flickr lijkt er een mansory te zijn maar dat is het ook niet. Dit komt doordat de rows een vaste breedte hebben. 

Mansory minimaliseerd de verticale ruimte tussen items. Het heeft altijd een soort gescheurde onderkant wat niet mooi uitgelijnd is. En het heeft soms een rare tab volgorde.

Ook vertelde ze hoe je het later misschien zou kunnen implementeren. Hierover zijn ze nog aan het vergaderen en sommige mensen vinden het meer bij flex passen en sommige bij grid. Nicole zelf liet deze implementatie zien:

```css
main {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr));
    grid-template-rows: mansory;
}
```

### Borrel

Na de talks op de tweede dag heb ik kunnen praten met Lea Verou, Bramus, een (backend developer bij werkspot), Roel natuurlijk, Brecht van IO België en nog een aantal. Dit was ook erg interessant en heb er uiteindelijk wat linkedIn connecties erbij gekregen. 

Ook heb ik meerdere keren Mastodon en frontend social voorbij horen komen en ben hier de dagen erna ook even ingedoken. 

### Reflectie 

Ik was erg onder de indruk hoe veel we al weten en hoe veel mensen we al ontmoet hebben door onze studie. Ook ben ik geïnspireerd door …, ga ik nieuwe dingen gebruiken zoals … en ga ik meer experimenteren met nieuwe technieken want zoals … al zei: 

Uiteindelijk heb ik dus dit artikel gemaakt over CSS day en wilde ik daarbij de nieuwe geleerde technieken uitproberen. In dit artikel kan je daar een aantal dingen van terug zien namelijk:

De headings die aan de boven kant blijven hangen en omhoog worden gedrukt door de volgende heading. Dit heb ik gedaan met **scroll driven animtions**. 

Dit is de code (versimpeld):

```scss
    h2 {--sticky-top: 0rem;} // --sticky-top wordt ook gebruikt voor fluid type
    h3 {--sticky-top: 2.1rem;}
    h4 {--sticky-top: 4rem;}

    h2, h3, h4 {
        animation: shrink linear forwards;
        animation-timeline: view();
        animation-range: calc(90vh - 3em - var(--sticky-top) - 80px) calc(100vh - 10vh - 25px);
    }
```

Hiervan heb ik ook nog andere dingen meegenomen van de talks namelijk over **engineren** en meer met **custom properties** werken

Ook heb ik met **anchor positioning** gespeeld. Dit kan je terug zien bij het hoveren op de navigatie rechts op de pagina. De uitdaging was om het zo generiek moeglijk te schrijven, en daardoor kwam ik tegen wat dingen aan die ik wel in css zou willen zien. Zoals custom properties kunnen gebruiken voor anchor-name. Dus in plaats van de code zo te moeten schrijven voor anchor positioning:

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

Ook heb ik **fluidtype** toegevoegd aan mijn  design. Dit opent veel deuren voor mij omdat ik dan minder mijn hoofd moet breken over nieuwe layouts creeeren op verschillende scherm groottes. 

Ook heb ik geprobeerd **view transitions** toe te voegen aan mijn blog. Het loopt best wel erg vast op mijn computer (behalve als ik een extra scherm er aan koppel) en ik weet niet waar dat aan ligt. Maar dat stopte mij niet om er in te duiken. 

Uiteindelijk lukte het, maar kwam ondertussen wel tot nieuwe dingen die ik terug zou willen zien in css. Je kan namelijk hier ook niet variabelen gebruiken voor `view-transition-name`, en ik zou ook graag willen dat je de dataset op een element in de html in een custom property kan doen met css. Dit is erg jammer want dan werkt dit namelijk niet. En moet ik voor elk project een `view-transition-name` aanmaken.

Dit werkt dus niet:
```
.heading {
    --name: attr(project)
    view-transition-name: var(--name);
}
```

Ook heb ik nog **fit width to text** geimplemeteerd op de kaartjes op de home pagina. Dit had ik gezien bij Roma komarov en dit is echt een hele coole techniek om dus je text mooi met de breedte uit te lijnen. Meer info over de techniek: [Zie hier zijn artikel kizu.dev/fit-to-width-text](https://kizu.dev/fit-to-width-text/)