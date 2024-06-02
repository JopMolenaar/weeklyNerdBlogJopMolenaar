## Nils Binder

frontend designer

3 units in company => 
- communication design (logo's print work, non coding)
- product dev (developing big apps, data visualitzation)
- web development (web dev, small-medium size websites)

### wrapper element
(container)
does:
- max-width
- padding
- centers

old school:
- max width 75rem
- margin 0 auto
- padding 0 1.5rem

new way:
    width: min(100% - 3rem, 75rem); ""
    margin-inline auto "left and right"

shorter way:
    magin-inine max(1.5rem, ((100/75rem)/2));

why are we making containers?
posters don't have it


in the past we used photoshop but now we use figma wich has many features from css
and you can make variables and use them in the code

figma came in time where many websites looked the same, to make these kind of websites

but we need to embrace the flexibility because it will look diff in diff situation

but figma has so many less units then we have in css

with grid and 1fr you can make cool dynamic layouts with different white space  
1fr only gets content when it is big enough
2fr 3fr auto 1fr
minmax(0, clamp(24rem, 75%, 44rem)); "explanation:  min 24rem, desirded 75% and max 44rem"


conclusion:
use more playfull layouts
and experiment with the white space use
don't center everything



