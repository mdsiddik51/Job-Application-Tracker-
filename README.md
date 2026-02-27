### 1 : What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?


Answer : getElementById -> getElementById() is used to select a single HTML element using it's unique id name 


Answer : getElementsByClassName() -> getElementsByClassName() is use to select all HTML element that have the same class name 


Answer : querySelector() -> querySelector() is use to select the first element that match a CSS selector


Answer : querySelectorAll() -> querySelectorAll() is used to select all elements that match the same CSS selector.


### 2. How do you create and insert a new element into the DOM?


Answer : to create and insert a new element first us document.createElement() to create a new HTML element and then Insert it to the DOM using appendChild() 



### 3. What is Event Bubbling? And how does it work?

Answer : What is Event Bubbling? ->  Event Bubbling is a DOM event concept where, when an event happens on a child element, it automatically moves upwards to its parent elements.



Answer : And how does it work? -> when a event happens on a child element like click then first the event happens on the child element then the same event moves upward to the parent element and continues upward 


### 4. What is Event Delegation in JavaScript? Why is it useful?


Answer : What is Event Delegation in JavaScript? -> Event Delegation in JavaScript is a method we use to add one event listener to the parent then this parent element catch events from its child elements and handles the event  

Answer : Why is it useful? -> Event Delegation is useful because with one event listener we can handle multiple events 


### 5. What is the difference between preventDefault() and stopPropagation() methods?


Answer : preventDefault() ->  preventDefault() is use to remove the browser automatic work 


Answer : stopPropagation() -> stopPropagation() is use to stop the event Bubbling



 


