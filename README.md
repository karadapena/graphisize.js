Graphisize.js
===

A JavaScript tool used by the Miami Herald to make static graphics with different widths be responsive on its digital platforms (desktop, mobile and apps) in modern browsers. 

[DEMO](http://www.miamiherald.com/site-services/testing/newsgate-testing/article46070970.html)

These step-by-step instructions are best suited for organizations that have transitioned to 2020, use NewsDirector, use Content Studio and have a print paper with a 44-inch web width. Organizations that don't meet these guidelines may need different:

- media queries for the break points in the CSS
- way of getting a URL for the image
- values for the column widths


Instructions
----
#### Create the graphic:
1. Build the graphic on your paper's 6-column grid and output it as a 150 dpi jpeg.
2. Ideal sizes are 1-, 2- and 3-column graphics. Consider a custom solution for anything more than 4 columns or reconfigure to fit in 3 columns.

#### Get a URL for the graphic from Content Studio:
1. Drag the image into content studio and hit publish.
2. Content studio will generate a URL for the image. Click on the URL and you will get a blank page.
3. At the end of the URL add the following, replacing `GraphicFileName.jpg` with your file's name (note: if the file name contains spaces, replace each space with `%20`):


		/binary/GraphicFileName.jpg 

	
		
4. When you’re done, your URL should look something like this and you should be able to see your graphic in your browser window:
 
       http://www.miamiherald.com/latest-news/76bxnw/picture40442520/binary/10-25-TR-Namibia.jpg

#### Embed your graphic in NewsGate:


1) Edit the story in NewsDirector, and in the `<mm_link 1>` field, paste the following code, replacing `URLofGraphic` with your graphic's URL (the link you ended up with in Step 4 above):


	<div class='graphisize-container'><div class="graphic-container"><div class="enlarge"></div><img class='graphic1' src="URLofGraphic"></div><script src="http://pubsys.miamiherald.com/static/media/projects/graphisize/graphisize.js"></script><script>Graphisize('graphic1');</script></div>
  

2) Place the `<mm_embed 1>` macro tag where you want the graphic to appear in the body of the story.

#### Embed additional graphics:

1. If you have an additional graphic to embed in the same story, repeat the steps above, but place the code in an `<mm_link 2>` field and place the graphic in the story with an `<mm_embed 2>` macro tag. 
2. Within the second graphic's embed code, change `graphic1` to `graphic2` in the two spots where it appears.
3. Repeat as needed for additional graphics using `graphic3`, `graphic4` and so on...

How it works
----
- The script reads the natural width of the jpeg and categorizes it as 1-column, 2-column or 3-column and wider and applies the appropriate css to make it responsive.
- We recommend you upload the graphisize.js script to your paper's server and adjust it as needed for your paper's column grid. In the embed code, replace `http://pubsys.miamiherald.com/static/media/projects/graphisize/graphisize.js` with its location on your server.
- At the Herald, which has a 44-inch web, 1-column graphics are those under 450px wide, 2-col are under 750 and 3-col are 750 and larger. Replace the values in your local graphisize.js script's `function init (w)` with values to match your paper's column widths when you output graphics at 150 dpi.
- If all the graphics in a story are the same width, you do not need to change the codes to say `graphic2`, `graphic3` and so on... We wrote the instructions assuming that whoever uploads and embeds the graphics will not necessarily know their column widths.
- Note: Embed codes in NewsGate need to be minimized (aka on one line with no paragraph marks)


Improvements
----
Any thoughts/suggestions/improvements are all welcome! (Especially if you have an IE8 solution)
