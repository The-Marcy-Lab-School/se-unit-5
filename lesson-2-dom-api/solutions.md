1. What is one difference between a NodeList and an HTMLCollection?
   _Both interfaces are collections of DOM nodes. They differ in the methods they provide and in the type of nodes they can contain. Also, we cannot run array methods such as forEach on a HTMLCollection._ 

2. Write the output of the console.log() statement. Briefly explain your reasoning for writing this output. 
    _"Jessie Woolley-Wilson" would be logged to the console. This text is the innerText of the `<h2>` element that has an idea of "ceo"_


3. Read the sample html code below. Describe what will happen when `myFunction()` is invoked.
    _When myFunction is involed, the DOM will be queried to find an element with a selector of example. The `querySelector` method returns the first element with the specifed selector. In this case, that element is the `<h2>`.The style of this element will then be changed to have the background color of red._ 


4. 

const changeText = () => {
    const futureCareer = "software engineer";
    var x = document.getElementById("demo");
    x.style.color = "red";
    x.innerHTML = futureCareer;
}


5. 

const addLunch = () => {
    let node = document.createElement("li");
    let textnode = document.createTextNode("Bagged Lunch");
    node.appendChild(textnode);
    document.getElementById("myList").appendChild(node);

    let p = document.getElementById("instructions");
    document.getElementById("activity").removeChild(p);
}


6. Solutions found here: https://www.w3resource.com/javascript-exercises/javascript-dom-exercises.php