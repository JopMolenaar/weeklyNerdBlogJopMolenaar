## Pre CSS day



### Bramus van Damme

Was een lecurer

view transitions for MPA's are here

fe developer
working at google

run a blog he said, expose your work, write about it or something

helpfull for ux

view transistion api (spa same doucment page)

```
document.startViewTransition(()=>{

})

```

it takes snapshots and pauses the rendering of the new page

user agent stylesheet, is the stylesheet of the browser, if vewtransitions are supporten is says: view-transistion: root

#### tweak the animations:

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


cross document view transition chrome 126

screenshot way ()

two conditions: same site, same origin & both pages need to have it opt in: @view-transition {navigation: auto}

they will implement cross origin in the future


 @view-transition {
    navigation: auto
    types: // could assign types here
 }

 if you dont know the tyopes up front: 

 pageswap and pagereveal on the window.addEventlistener
 and then you can add the type


 a (link) blocking="render" ??? use with caution

### Miriam Suzanne

container queries

problems etc

it was asked for a decade, but they were scared it would cause layout loops

interinsic and extrinisic
pushing out and pushing in

content on the inside need to set the size of the parent and the parent set the sizes of the children = loop

contain: inline-size and not contain: size
but it could go wrong if you do display grid and justify-content: center

container style queries 