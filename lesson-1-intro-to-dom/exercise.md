# Unit 5 Lesson 0 Practice
## Intro to the DOM and Trees

1. Briefly describe what the DOM is in about 2-5 sentences.

2. Draw a diagram of the DOM tree for the `sample.html` file below.
**`sample.html`**

<html>
    <head>
        <h1>Hello</h1>
    <head>
    <body>
        <p id=”school">”Marcy Lab”</p>
        <p id=”chief-program-officer">”Maya”</p>
    </body>
</html>

3. For the diagram of the DOM tree below, type the corresponding html code.
![dom-tree](lesson-1-intro-to-dom/dom-tree-diagram.png)

4. Write the output of the below console.log() statement. Briefly explain your reasoning for writing this output.
**example.html**

<p id=”ceo">
Jessie Woolley-Wilson
</p

**example.js**
`const element = getElementById(‘ceo’)`
`const content = element.innerText()`
`console.log(content)`

5. What is one key difference between a NodeList and an HTMLCollection?

6. Complete this performance task and submit a screenshot of the website after you complete the changes.
    - Go to the Marcy Lab Website
    - Open the developer tools
    - Using the console:
        - find the element that renders “Our Team” and change it to another phrase that labels this group(ie. The Team, Our Staff, etc.
    - Change the background color of the element containing the staff and board photos ...from white to purple