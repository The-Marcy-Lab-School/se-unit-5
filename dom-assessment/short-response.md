# The DOM
## Written Assessment

1. In your own words, answer the following questions: what is the Document Object Model? Why is it useful?

**Suggested Answer** - The Document Object Model is a representation of the structure that makes up a web page. Typically, this will be composed of HTML. Each Node in our HTML will have properties, attributes, and child nodes which we can access and manipulate. This representation is useful because it allows us to have a structure to our UI that we can easily track.

2. In computer science terms, what is a tree? Why are they useful? What are some scenarios where you might want to use a tree?

**Suggested Answer** A tree is a data structure consisting of a collection of nodes. Each node can have values or attributes, a parent node, and many child nodes. To be considered a tree, each node can only have a connection to it's parent and child nodes. Some examples of situations where trees are useful:

1. Document Object Model - we can represent our HTML pages as a tree of nodes, where elements have a parent element and child elements.
2. A map or maze - a map or maze can be represented by a tree as a series of possible paths. Each point can return to the previous point, or go forward to multiple "child" points.


3. Given some HTML that looks like this:

```html
<div id="content">
  <h1>Listings</h1>
  <a id="about" class="primary" href="/about">About Our Listings</a>
</div>
```

What are three different `document` methods that you could use to select the `a` element and store it into a variable?

**Suggested Answer**

There are potentially many ways to do this, the purpose is to have students identify that there are many and what some of them are.

  +  `getElementById`
  +  `getElementsByClassname`
  +  `querySelector`



4. In your own words, describe: what is the event loop? How does it work? Why is it important?

**Suggested Answer** In JavaScript, code can be run asynchronously. When we pass a callback function, that code is handed off to the event loop to be worked off the queue while the rest of the code continues. For example, `setTimeout` will set a timer, and then put the callback onto the queue to be fired off when ready. 

This is important to be aware of because it can make debugging our code a bit more difficult, as events are firing in a slightly different order than when we expected.

5. Assuming we have the following code in an HTML file. Describe what the JavaScript code is doing. What would happen when we submit the form?

```html
<form id="new-cat" action="/" method="POST">
  <label for="cat-name">Name</label>
  <input type="text" name="cat-name" value="">
  <input type="submit" name="" value="Create Cat">
</form>

<ul id="cat-list">
</ul>


<script src="index.js" charset="utf-8"></script>
```

```js
const catForm = document.getElementById('new-cat');

catForm.addEventListener('submit', function(){
  const input = catForm[1];
  const name = input.value;
  const catList = document.getElementById('cat-list');

  const catListItem = document.createElement('li');
  catListItem.innerText = name;
  catList.append(catListItem);
})
```

**Suggested Answer**

This is a bit of a trick question - the code as written looks like it should find the input, save the value and append a new list item into the catList with the given name.

The problem is that when the form is submitted, it will make a new request and refresh the page by default. So we actually won't see the behavior manifest itself. We could correct this by using the `event` argument passed to our callback and preventing the default action using the `preventDefault` method.  

6. The following HTML and JavaScript creates a button that logs a message to the console each time it is clicked. What line or lines of code could you remove from the JavaScript file and keep the same behavior? Assume that the JavaScript file is being loaded into the HTML via a script tag.

```html
<button id="log">Click to Log to Console</button>

```

```js
const button = document.getElementById('log')

button.addEventListener('click', function(e){
  e.preventDefault();
  e.stopPropagation();
  console.log("Logging...")
})
```

**Suggested Answer** In this case, it's not necessary to prevent the default action, as a button does not have a default. We also may or may not need to stopPropagation here, as it doesn't appear that there will be any other click events which will propagate to.

7. When developing web applications, what are some examples of events that a user might initiate? Describe as many as you can.

**Suggested Answer**

This gives students a chance to describe as many different events as possible. Some that may come up:

  + click - when the user clicks an element
  + dblclick - when the user double clicks an element
  + change - when an input changes
  + keyup / keydown - typing a key on the keyboard
  + scroll - scrolling the page
  + mouseover / mousemove - tracking where the cursor is
  + submit - submitting a form
  + DOMContentLoaded - when the DOM actually loads on a page

A complete answer would include some of those (or others), as well as descriptions of how a user can affect those.

8. Given the following HTML file, describe what would happen when a user clicks the "Alert" button? What change would you need to make to make our "handleClick" function fire?

index.html

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>My Website</title>
    <script type="text/javascript" src="index.js"></script>
  </head>
  <body>
    <button id='alert'>Click to Alert!</button>
  </body>
</html>
```

index.js
```javascript
const button = document.getElementById('alert')

function handleClick(){
  alert("I was clicked!")
}

button.addEventListener('click', handleClick)
```

**Suggested Answer** When our JS file loads, we are adding the event listener to a button. However, there won't be a button available at that point, because the DOM hasn't finished loading yet. We could either move the script to the bottom of the page so that it loads after the HTML content, or add an event handler so that this code won't fire unless the DOM content is loaded (or both)

```javascript
const button = document.getElementById('alert')

function handleClick(){
  alert("I was clicked!")
}

document.addEventListener('DOMContentLoaded', () => {
  button.addEventListener('click', handleClick)
})
```
