# weeklyNerdBlogJopMolenaar

I made this blog to write down all my processes from classes, thoughts about talks and my learning curve from the Minor Web Development and Design 2024. 

This website is made with node.js, ejs and css and is generated a statis site with 11ty. Because of that the content is easily updated and I don't need to pay for a fast loading server because it is just accesible via the cloud. 

The content is fetched from a json where all my articles are listed. In those articles you can find a name and a link to the markdown where the article is written. The markdown is parsed to HTML and is pushed in an object that is pushed in an array that is given to the ejs template which will generate a html file. 
