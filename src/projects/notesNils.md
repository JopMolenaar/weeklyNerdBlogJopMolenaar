## Nils Binder

Nils Binder is a Frontend designer and works at 9elements in Germany.

They have three units in their company:

- communication design (logo's print work, non coding)
- product dev (developing big apps, data visualitzation)
- web development (web dev, small-medium size websites)

Nils talked about layouts and how you can create a lot more interesting layouts then only centering containers. 

### wrapper element

Many people use a container to catagorize elements.
A container does or has:

- max-width
- padding
- centers itself or content

The old school way was:

- max width 75rem
- margin 0 auto
- padding 0 1.5rem

The new way is:

- width: min(100% - 3rem, 75rem); ""
- margin-inline auto "left and right"

And it has a shorter way:
- magin-inine max(1.5rem, ((100/75rem)/2));

### Why?

But why are we making containers? Posters don't have it.

In the past we used photoshop but now we use figma wich has many features from css and you can make variables and use them in the code.
Figma came in a time where many websites looked the same, and now people use fimga to make these kind of websites.

We need to embrace the flexibility because it will look different in different situations. But figma has so many less units then we have in css so it is very hard to make these new looking websites in figma. 

With grid and 1fr you can make cool dynamic layouts with different white space. Or you can use clamp for the layout like this: minmax(0, clamp(24rem, 75%, 44rem)); Explanation: min 24rem, desirded 75% and max 44rem

Nils showed a lot of cool examples and ways to make the layout of a website less basic and centered. 

### Conclusion:

Use more playfull layouts and experiment with the white space use. And also don't center everything.

I liked his presentation a lot and it inspired me and opened my eyes that such simple things can boost the UI of your website by a lot.



