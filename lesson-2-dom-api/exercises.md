# Unit 5 Day 2 Practice
## The DOM API and editing

1. What is one difference between a NodeList and an HTMLCollection?


2. Write the output of the console.log() statement. Briefly explain your reasoning for writing this output.

```html
<-- example.html -->
<html>
    <head>
        <h1 id="company">Dream Box</h1>
        <h2 id="ceo">Jessie Woolley-Wilson</h2>
    <head>
    <body>
        <p id="purpose"> DreamBox Learning is an online software provider that focuses on mathematics education.</p>
        <p id="chief-program-officer">Maya</p>
    </body>
</html>
```

**example.js**
`const element = getElementById("ceo");`
`const content = element.innerText()`
`console.log(content)`


3. Read the sample html code below. Describe what will happen when `myFunction()` is invoked.

```html
<!DOCTYPE html>
<html>
    <body>
        <h2 class="example">A heading with class="example" </h2>
        <p class="example">A paragraph with class="example".</p> 
        <p>Click the button to add a background color to the first element in the document with class="example".</p>
        <button onclick="changeColor()">Try it</button>
        <script>
        const changeText = () => {
        document.querySelector(".example").style.backgroundColor = "red";
        }
        </script>
    </body>
</html>
```

4. Write a function named `changeText` within the `<script>` tags in order to:
    - a) get the element with the id of `career`
    - b) change the color of the element to green
    - c) and update the text to the future tech career of your choosing

```html
<!DOCTYPE html>
<html>
    <body>
    <p id="demo">Click this button to change the color and text of this paragraph.</p>
    <button onclick="changeText()">Try it</button>
    <script>
    //write your changeText() code here
    </script>
    </body>
</html>
```


5. Write a function named `addLunch()` within the `script` tags in order to:
    - create an LI node
    - create a text node with "Bagged Lunch" as a new lunch list option - _look up MDN documentation for Document.createTextNode()_
    - append the text node to the LI node
    - append the LI node to the list.
    - remove the instructions - "Add a lunch option above."

**Before:**
- IHop
- Drive Change
Add a lunch option above.

**After:**
- IHop
- Drive Change
- Bagged Lunch
    
```html
<!DOCTYPE html>
<html>
<body>
<div id="activity">
	 <p id="instructions">Add a lunch option above</p>
  <ul id="myList">
    <li>IHop</li>
    <li>Drive Change</li>
  </ul>
  <button onclick="addLunch()">Try it</button>
  <script>
  //write your addLunch() code here
  </script>
</div>
</body>
</html>
```

6. **BONUS:** For more in depth practice with the DOM API, check out [these problem sets and solutions](https://www.w3resource.com/javascript-exercises/javascript-dom-exercises.php).
