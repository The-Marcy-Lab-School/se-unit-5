# DOM Unit - Sample Scope and Sequence

Below is a sample scope/sequence for an DOM unit. This is meant as just an outline - feel free to move around any topic/area as you see fit.

## Day 1
Intro to the DOM and Trees

Today will start with an introduction to the Document Object Model, what it is, why it's useful. This is also a good opportunity to discuss Trees as they relate to fundamentals. For the first day, it's fun to simply examine a real website in the browser to explore how the DOM is represented.

## Day 2
The DOM API and editing

Today, students can explore the DOM API and begin writing code to manipulate the DOM. This can again happen in an existing web application to start. Review existing documentation and where to look up DOM methods.

* Finding elements (querySelector, getElementById, getElementsByClassname)
* Creating new elements (createElement, appendChild, innerHTML)
* Updating existing elements(attributes)
* Deleting elements(removeChild)

## Day 3
Intro to Events and the Event Loop

Today, we'll look at how to respond to events. Discuss what an event is and how JavaScript adds items to the event loop (EloquentJS and You Don't Know JS both have good chapters on this). Have students describe the different types of events that get triggered when they're using web applications. This is also a good time to look at the event object passed to a callback.

* Events
* Click Events / Callbacks
* stopPropagation

## Day 4
Working with Forms

Today, discuss how to get data from users via forms.

## Day 5
Review

Forms are important and can be tricky to work with. For today, it's probably a good idea to give students more practice working with forms. A ToDo List application could be an interesting project, or something similar to do basic CRUD on a list.

## Day 6
Application State and Code Organization

Up until now, we likely haven't had much structure to our code or the way it was organized. Here we can begin introducing some concepts that will come up in React such as state and components. Create an application that uses a component based UI - a re-usable `Navbar` function that takes in some properties and returns an element that can be appended to the DOM.

## Day 7
Building a ToDo List

Today is a mini-project day - have students build their Day-5 project over again, this time using the patterns that they worked on yesterday. Start from scratch and identify what components their applications should use, and build them in an organized and re-usable fashion.

## Day 8 - 10
Projects

Students can work on independent projects, such as CRUD applications or basic 2D platform games. For those wishing to build a game, they could use a library to help get something up quickly: https://github.com/collections/javascript-game-engines

Other possibilities are simple translators or other CRUD like applications. 
